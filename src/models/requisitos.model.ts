import {Entity, model, property, hasMany} from '@loopback/repository';
import {Plazas} from './plazas.model';

@model()
export class Requisitos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Edad: number;

  @property({
    type: 'string',
    required: true,
  })
  Experiencia: string;

  @property({
    type: 'string',
    required: true,
  })
  Estudios: string;

  @hasMany(() => Plazas)
  plazas: Plazas[];

  constructor(data?: Partial<Requisitos>) {
    super(data);
  }
}

export interface RequisitosRelations {
  // describe navigational properties here
}

export type RequisitosWithRelations = Requisitos & RequisitosRelations;
