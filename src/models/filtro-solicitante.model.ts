import {Entity, model, property} from '@loopback/repository';

@model()
export class FiltroSolicitante extends Entity {
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
    type: 'boolean',
    required: true,
  })
  Requisitosaprobados: boolean;


  constructor(data?: Partial<FiltroSolicitante>) {
    super(data);
  }
}

export interface FiltroSolicitanteRelations {
  // describe navigational properties here
}

export type FiltroSolicitanteWithRelations = FiltroSolicitante & FiltroSolicitanteRelations;
