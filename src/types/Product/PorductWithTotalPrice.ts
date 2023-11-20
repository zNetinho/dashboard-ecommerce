import { Product } from "./Product";

export interface ProductWithTotalPrice extends Product {
    totalPrice: number;
  }