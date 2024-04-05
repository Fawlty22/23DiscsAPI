import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'pdga_number'})
  pdgaNumber: string;

  @Column({name: 'first_name'})
  firstName: string;

  @Column()
  email: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;
}

