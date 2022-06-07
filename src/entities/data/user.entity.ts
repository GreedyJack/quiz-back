import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity, Game, GameParticipants } from '@/entities';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => GameParticipants, (link) => link.game)
  games: Game[];
}
