import { LOCAL_STORAGE_KEY } from 'src/app/configs/storage-key';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface Wishlist {
  id: number | string;
  product_id?: number;
  variation_id?: number;
  date_added: Date;
}

export function createWishlist() {
  return null;
}
