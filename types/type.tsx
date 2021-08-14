export interface User {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  username: string;
  email: string;
  tag: string;
  description: string;
  stream_key: string;
  balance: number;
  banned_words: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  is_stackable: boolean;
  price: number;
}
