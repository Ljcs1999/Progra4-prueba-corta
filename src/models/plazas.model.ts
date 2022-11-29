import {Entity, model, property} from '@loopback/repository';

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
  Carga-laboral: string;


  constructor(data?: Partial<Plazas>) {
    super(data);
  }
}

export interface PlazasRelations {
  // describe navigational properties here
}

export type PlazasWithRelations = Plazas & PlazasRelations;
