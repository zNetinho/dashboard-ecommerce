import { ReactNode } from "react";
import { ProductWithTotalPrice } from "./PorductWithTotalPrice";

export interface CartProduct extends ProductWithTotalPrice {
    product: ReactNode;
    quantidade: number;
  }
  