import { User } from '@/entities';

export interface IGame {
  id: string;
  date: string;
  participants: User[];
}
