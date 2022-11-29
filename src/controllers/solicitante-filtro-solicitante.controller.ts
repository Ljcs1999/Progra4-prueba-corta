import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitante,
  FiltroSolicitante,
} from '../models';
import {SolicitanteRepository} from '../repositories';

export class SolicitanteFiltroSolicitanteController {
  constructor(
    @repository(SolicitanteRepository)
    public solicitanteRepository: SolicitanteRepository,
  ) { }

  @get('/solicitantes/{id}/filtro-solicitante', {
    responses: {
      '200': {
        description: 'FiltroSolicitante belonging to Solicitante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FiltroSolicitante)},
          },
        },
      },
    },
  })
  async getFiltroSolicitante(
    @param.path.string('id') id: typeof Solicitante.prototype.id,
  ): Promise<FiltroSolicitante> {
    return this.solicitanteRepository.filtroSolicitante(id);
  }
}
