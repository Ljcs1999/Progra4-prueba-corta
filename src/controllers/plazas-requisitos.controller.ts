import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Plazas,
  Requisitos,
} from '../models';
import {PlazasRepository} from '../repositories';

export class PlazasRequisitosController {
  constructor(
    @repository(PlazasRepository)
    public plazasRepository: PlazasRepository,
  ) { }

  @get('/plazas/{id}/requisitos', {
    responses: {
      '200': {
        description: 'Requisitos belonging to Plazas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Requisitos)},
          },
        },
      },
    },
  })
  async getRequisitos(
    @param.path.string('id') id: typeof Plazas.prototype.id,
  ): Promise<Requisitos> {
    return this.plazasRepository.requisitos(id);
  }
}
