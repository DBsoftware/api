import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Answer } from '../answers/answer.entity';

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  telefono: string;

  @Column()
  correo: string;

  @OneToMany(type => Answer, answer => answer.client, { eager: true, cascade: true })
  answers: Answer[];

  setClient({  nombres, telefono, correo}){
    this.nombres = nombres;
    this.telefono = telefono;
    this.correo =  correo;
  }

}
