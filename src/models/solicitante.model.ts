import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitante extends Entity {
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
  Edad: number;

  @property({
    type: 'string',
    required: true,
  })
  Estadocivil: string;

  @property({
    type: 'number',
    required: true,
  })
  Cedula: number;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Nivelacademico: string;


  constructor(data?: Partial<Solicitante>) {
    super(data);
  }
}

export interface SolicitanteRelations {
  // describe navigational properties here
}

export type SolicitanteWithRelations = Solicitante & SolicitanteRelations;
