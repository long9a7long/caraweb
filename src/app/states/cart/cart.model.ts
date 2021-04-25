import { Coupon, Product } from 'ngx-wooapi';

export interface Cart {
  id: number | string;
  applied_coupons: Coupon[];

  cart_contents: CartItem[];
  coupon_applied_count: Array<any>;
  removed_cart_contents: CartItem[];
  default_totals: Array<any>;
  shipping_methods: any;
  totals: number;
}

export interface CartItem {
  product: Product;
  variation_id?: number;
  variation?: Array<any>;
  quantity: number;
  line_subtotal: number;
  line_total: number;
}

export function createCart(params: Partial<Cart>) {
  return {} as Cart;
}
