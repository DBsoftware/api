import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from 'src/questions/question.entity';
import { Client } from 'src/client/client.entity';

@Entity()
export class Answer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  respuesta: string;

  @ManyToOne(type => Question, p => p.answers, { eager: true })
  pregunta: Question;
 
  @ManyToOne(type => Client, c => c.answers, { eager: false })
  client: Client;

  @Column()
  preguntaId: number;

  @Column()
  clientId: number;

  setAnswer({  respuesta, preguntaId,clientId}){
    this.respuesta = respuesta;
    this.preguntaId = preguntaId
    this.clientId = clientId
  }
}
