import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Requisitos} from './requisitos.model';

@model()
export class Plazas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Salario: number;

  @property({
    type: 'string',
    required: true,
  })
  Cargalaboral: string;

  @belongsTo(() => Requisitos)
  requisitosId: string;

  constructor(data?: Partial<Plazas>) {
    super(data);
  }
}

export interface PlazasRelations {
  // describe navigational properties here
}

export type PlazasWithRelations = Plazas & PlazasRelations;
