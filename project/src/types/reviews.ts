import { User } from './user';

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User
};

export type ReviewData = {
  id: number,
  comment:string,
  rating: number | null
}

export type Reviews = Review[];
