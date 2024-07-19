import { Add_To_Cart, Remove_To_Cart } from "./constants";

export function addToCart(itme) {
  return {
    type: Add_To_Cart,
    data: itme
  }
}
export function removeToCart(itme) {
  return {
    type: Remove_To_Cart,
    data: itme
  }
}