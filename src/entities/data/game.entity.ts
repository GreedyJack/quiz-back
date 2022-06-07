import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity, GameParticipants, User } from '@/entities';

@Entity()
export class Game extends BaseEntity {
  @Column()
  date: string;

  @OneToMany(() => GameParticipants, (link) => link.user)
  participants: User[];
}
