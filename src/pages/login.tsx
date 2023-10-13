import LoginForm from '@frontend/components/LoginForm';
import { LoginContainer } from '@frontend/styles/login';
import { Container, Main } from '@frontend/styles/shared';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  );
};
export default LoginPage;
