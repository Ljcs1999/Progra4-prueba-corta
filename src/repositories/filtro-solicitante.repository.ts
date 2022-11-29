import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {FiltroSolicitante, FiltroSolicitanteRelations, Solicitante} from '../models';
import {SolicitanteRepository} from './solicitante.repository';

export class FiltroSolicitanteRepository extends DefaultCrudRepository<
  FiltroSolicitante,
  typeof FiltroSolicitante.prototype.id,
  FiltroSolicitanteRelations
> {

  public readonly solicitantes: HasManyRepositoryFactory<Solicitante, typeof FiltroSolicitante.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('SolicitanteRepository') protected solicitanteRepositoryGetter: Getter<SolicitanteRepository>,
  ) {
    super(FiltroSolicitante, dataSource);
    this.solicitantes = this.createHasManyRepositoryFactoryFor('solicitantes', solicitanteRepositoryGetter,);
    this.registerInclusionResolver('solicitantes', this.solicitantes.inclusionResolver);
  }
}
