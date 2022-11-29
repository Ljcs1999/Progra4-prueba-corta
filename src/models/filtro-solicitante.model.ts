import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitante} from './solicitante.model';

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

  @hasMany(() => Solicitante)
  solicitantes: Solicitante[];

  constructor(data?: Partial<FiltroSolicitante>) {
    super(data);
  }
}

export interface FiltroSolicitanteRelations {
  // describe navigational properties here
}

export type FiltroSolicitanteWithRelations = FiltroSolicitante & FiltroSolicitanteRelations;
