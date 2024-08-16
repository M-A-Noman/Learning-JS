import { genre } from './details.model';

export interface MovieDescriptionModel {
  title?: string;
  release_date?: string;
  genres?: genre[];
  runtime?: string;
  ratting?: number;
  tagline?: string;
  overview?: string;
  background_image?: string;
  poster_image?:string
}
