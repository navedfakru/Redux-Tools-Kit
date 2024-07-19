import { Add_To_Cart, Remove_FROM_Cart } from "./constants";

export function addToCart(itme) {
  return {
    type: Add_To_Cart,
    data: itme
  }
}
export function removeFromCart(itme) {
  return {
    type: Remove_FROM_Cart,
    data: itme
  }
}