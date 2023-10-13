export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categories: Category[];
    images: HygraphImage[];
    reviews: Review[];
    rating: number;
    title: string;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface HygraphImage {
    width: number;
    height: number;
    fileName: string;
    url: string;
  }
  
  export interface Review {
    id: string;
    rating: string;
    email: string;
    name: string;
    headline: string;
    content: string;
  }