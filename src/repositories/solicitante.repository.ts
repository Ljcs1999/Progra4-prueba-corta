import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Solicitante, SolicitanteRelations, FiltroSolicitante} from '../models';
import {FiltroSolicitanteRepository} from './filtro-solicitante.repository';

export class SolicitanteRepository extends DefaultCrudRepository<
  Solicitante,
  typeof Solicitante.prototype.id,
  SolicitanteRelations
> {

  public readonly filtroSolicitante: BelongsToAccessor<FiltroSolicitante, typeof Solicitante.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('FiltroSolicitanteRepository') protected filtroSolicitanteRepositoryGetter: Getter<FiltroSolicitanteRepository>,
  ) {
    super(Solicitante, dataSource);
    this.filtroSolicitante = this.createBelongsToAccessorFor('filtroSolicitante', filtroSolicitanteRepositoryGetter,);
    this.registerInclusionResolver('filtroSolicitante', this.filtroSolicitante.inclusionResolver);
  }
}
