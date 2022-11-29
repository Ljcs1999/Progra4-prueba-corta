import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Plazas, PlazasRelations, Requisitos} from '../models';
import {RequisitosRepository} from './requisitos.repository';

export class PlazasRepository extends DefaultCrudRepository<
  Plazas,
  typeof Plazas.prototype.id,
  PlazasRelations
> {

  public readonly requisitos: BelongsToAccessor<Requisitos, typeof Plazas.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('RequisitosRepository') protected requisitosRepositoryGetter: Getter<RequisitosRepository>,
  ) {
    super(Plazas, dataSource);
    this.requisitos = this.createBelongsToAccessorFor('requisitos', requisitosRepositoryGetter,);
    this.registerInclusionResolver('requisitos', this.requisitos.inclusionResolver);
  }
}
