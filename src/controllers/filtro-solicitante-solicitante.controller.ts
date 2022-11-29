import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  FiltroSolicitante,
  Solicitante,
} from '../models';
import {FiltroSolicitanteRepository} from '../repositories';

export class FiltroSolicitanteSolicitanteController {
  constructor(
    @repository(FiltroSolicitanteRepository) protected filtroSolicitanteRepository: FiltroSolicitanteRepository,
  ) { }

  @get('/filtro-solicitantes/{id}/solicitantes', {
    responses: {
      '200': {
        description: 'Array of FiltroSolicitante has many Solicitante',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitante)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitante>,
  ): Promise<Solicitante[]> {
    return this.filtroSolicitanteRepository.solicitantes(id).find(filter);
  }

  @post('/filtro-solicitantes/{id}/solicitantes', {
    responses: {
      '200': {
        description: 'FiltroSolicitante model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitante)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof FiltroSolicitante.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitante, {
            title: 'NewSolicitanteInFiltroSolicitante',
            exclude: ['id'],
            optional: ['filtroSolicitanteId']
          }),
        },
      },
    }) solicitante: Omit<Solicitante, 'id'>,
  ): Promise<Solicitante> {
    return this.filtroSolicitanteRepository.solicitantes(id).create(solicitante);
  }

  @patch('/filtro-solicitantes/{id}/solicitantes', {
    responses: {
      '200': {
        description: 'FiltroSolicitante.Solicitante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitante, {partial: true}),
        },
      },
    })
    solicitante: Partial<Solicitante>,
    @param.query.object('where', getWhereSchemaFor(Solicitante)) where?: Where<Solicitante>,
  ): Promise<Count> {
    return this.filtroSolicitanteRepository.solicitantes(id).patch(solicitante, where);
  }

  @del('/filtro-solicitantes/{id}/solicitantes', {
    responses: {
      '200': {
        description: 'FiltroSolicitante.Solicitante DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitante)) where?: Where<Solicitante>,
  ): Promise<Count> {
    return this.filtroSolicitanteRepository.solicitantes(id).delete(where);
  }
}
