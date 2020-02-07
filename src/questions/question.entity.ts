import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Answer } from 'src/answers/answer.entity';

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pregunta: string;

  @Column()
  orden: number;

  @Column()
  activa: boolean;

  @OneToMany(type => Answer, answer => answer.pregunta, { eager: false })
  answers: Answer[];

  setQuestion({pregunta, orden, activa}){
    this.orden = orden;
    this.pregunta = pregunta;
    this.activa = activa
  }

}
