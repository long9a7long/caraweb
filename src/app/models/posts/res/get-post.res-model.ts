export interface GetPostResModel {
  status: string;
  count: number;
  count_total: number;
  pages: number;
  posts: Post[];
  query: Query;
}

export interface Query {
  ignore_sticky_posts: boolean;
}

export interface Post {
  id: number;
  type: string;
  slug: string;
  url: string;
  status: string;
  title: string;
  title_plain: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  categories: Category[];
  tags: any[];
  author: Author;
  comments: any[];
  attachments: Attachment[];
  comment_count: number;
  comment_status: string;
  thumbnail?: string;
  custom_fields: CustomFields;
  thumbnail_size?: string;
  thumbnail_images?: Images;
}

export interface CustomFields {
  um_content_restriction: string[];
  rank_math_internal_links_processed: string[];
  rank_math_primary_category?: string[];
  rank_math_seo_score?: string[];
  rank_math_robots?: string[];
  rank_math_advanced_robots?: string[];
  rank_math_facebook_enable_image_overlay?: string[];
  rank_math_facebook_image_overlay?: string[];
  rank_math_twitter_use_facebook?: string[];
  rank_math_twitter_card_type?: string[];
  rank_math_twitter_enable_image_overlay?: string[];
  rank_math_twitter_image_overlay?: string[];
  rank_math_permalink?: string[];
}

export interface Attachment {
  id: number;
  url: string;
  slug: string;
  title: string;
  description: string;
  caption: string;
  parent: number;
  mime_type: string;
  images: Images;
}

export interface Images {
  Image: Image;
  thumbnail: Image;
  medium: Image;
  medium_large: Image;
  '1536x1536': Image;
  '2048x2048': Image;
  woocommerce_thumbnail: Image;
  woocommerce_single: Image;
  woocommerce_gallery_thumbnail: Image;
  shop_catalog: Image;
  shop_single: Image;
  shop_thumbnail: Image;
  large?: Image;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Author {
  id: number;
  slug: string;
  name: string;
  first_name: string;
  last_name: string;
  nickname: string;
  url: string;
  description: string;
}

export interface Category {
  id: number;
  slug: string;
  title: string;
  description: string;
  parent: number;
  post_count: number;
}
