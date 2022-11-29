import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {FiltroSolicitante, FiltroSolicitanteRelations} from '../models';

export class FiltroSolicitanteRepository extends DefaultCrudRepository<
  FiltroSolicitante,
  typeof FiltroSolicitante.prototype.id,
  FiltroSolicitanteRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(FiltroSolicitante, dataSource);
  }
}
