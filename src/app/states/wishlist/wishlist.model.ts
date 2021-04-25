export interface Wishlist {
  id: number | string;
  product_id?: number;
  variation_id?: number;
  date_added: Date;
}

export function createWishlist() {
  return null;
}
