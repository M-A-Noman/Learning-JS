import { PostInterface } from './post.mode';

export interface postStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
