import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {FiltroSolicitante} from '../models';
import {FiltroSolicitanteRepository} from '../repositories';

export class FiltroSolicitanteController {
  constructor(
    @repository(FiltroSolicitanteRepository)
    public filtroSolicitanteRepository : FiltroSolicitanteRepository,
  ) {}

  @post('/filtro-solicitantes')
  @response(200, {
    description: 'FiltroSolicitante model instance',
    content: {'application/json': {schema: getModelSchemaRef(FiltroSolicitante)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FiltroSolicitante, {
            title: 'NewFiltroSolicitante',
            exclude: ['id'],
          }),
        },
      },
    })
    filtroSolicitante: Omit<FiltroSolicitante, 'id'>,
  ): Promise<FiltroSolicitante> {
    return this.filtroSolicitanteRepository.create(filtroSolicitante);
  }

  @get('/filtro-solicitantes/count')
  @response(200, {
    description: 'FiltroSolicitante model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FiltroSolicitante) where?: Where<FiltroSolicitante>,
  ): Promise<Count> {
    return this.filtroSolicitanteRepository.count(where);
  }

  @get('/filtro-solicitantes')
  @response(200, {
    description: 'Array of FiltroSolicitante model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FiltroSolicitante, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FiltroSolicitante) filter?: Filter<FiltroSolicitante>,
  ): Promise<FiltroSolicitante[]> {
    return this.filtroSolicitanteRepository.find(filter);
  }

  @patch('/filtro-solicitantes')
  @response(200, {
    description: 'FiltroSolicitante PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FiltroSolicitante, {partial: true}),
        },
      },
    })
    filtroSolicitante: FiltroSolicitante,
    @param.where(FiltroSolicitante) where?: Where<FiltroSolicitante>,
  ): Promise<Count> {
    return this.filtroSolicitanteRepository.updateAll(filtroSolicitante, where);
  }

  @get('/filtro-solicitantes/{id}')
  @response(200, {
    description: 'FiltroSolicitante model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FiltroSolicitante, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FiltroSolicitante, {exclude: 'where'}) filter?: FilterExcludingWhere<FiltroSolicitante>
  ): Promise<FiltroSolicitante> {
    return this.filtroSolicitanteRepository.findById(id, filter);
  }

  @patch('/filtro-solicitantes/{id}')
  @response(204, {
    description: 'FiltroSolicitante PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FiltroSolicitante, {partial: true}),
        },
      },
    })
    filtroSolicitante: FiltroSolicitante,
  ): Promise<void> {
    await this.filtroSolicitanteRepository.updateById(id, filtroSolicitante);
  }

  @put('/filtro-solicitantes/{id}')
  @response(204, {
    description: 'FiltroSolicitante PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() filtroSolicitante: FiltroSolicitante,
  ): Promise<void> {
    await this.filtroSolicitanteRepository.replaceById(id, filtroSolicitante);
  }

  @del('/filtro-solicitantes/{id}')
  @response(204, {
    description: 'FiltroSolicitante DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.filtroSolicitanteRepository.deleteById(id);
  }
}
