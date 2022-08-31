import { GifUser } from './gif-user.model';
export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: Date;
  user: GifUser;
  images: {
    downsized: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
  };
}
