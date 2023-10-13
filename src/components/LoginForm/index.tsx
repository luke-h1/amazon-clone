/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { auth } from '@frontend/lib/firebase';
import { useAppDispatch } from '@frontend/store/hooks';
import { signInToAccount } from '@frontend/store/reducers/userReducer';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { Container, RegisterButton, SignInButton } from './styles';

interface FormState {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });

  const loginUser = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then(
        user => {
          dispatch(signInToAccount(user.user));
          router.push('/');
        },
        // eslint-disable-next-line no-shadow
      )
      .catch(e => {
        // eslint-disable-next-line no-alert
        alert(`${e.message} - code is ${e.code}`);
      });
  };

  const registerUser = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then(
        user => {
          dispatch(signInToAccount(user.user));
          router.push('/');
        },
        // eslint-disable-next-line no-shadow
      )
      .catch(e => {
        // eslint-disable-next-line no-alert
        alert(`${e.message} - code is ${e.code}`);
      });
  };

  return (
    <Container>
      <h1>sign in</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={e => setFormState({ ...formState, email: e.target.value })}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={e =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <SignInButton type="submit" onClick={e => loginUser(e)}>
          Sign In
        </SignInButton>
        <p style={{ textAlign: 'center' }}>Or</p>
        <RegisterButton type="button" onClick={e => registerUser(e)}>
          Create your Amazon Account
        </RegisterButton>
      </form>
    </Container>
  );
};
export default LoginForm;
