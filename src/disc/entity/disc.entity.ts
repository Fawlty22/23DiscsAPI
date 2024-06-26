import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity()
export class Disc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'user_id'})
  userId: number;

  @Column()
  bag: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column()
  speed: number;

  @Column()
  glide: number;

  @Column()
  turn: number;

  @Column()
  fade: number;

  @Column()
  flightpath: string;
}
