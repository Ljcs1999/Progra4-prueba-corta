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
  Requisitos,
  Plazas,
} from '../models';
import {RequisitosRepository} from '../repositories';

export class RequisitosPlazasController {
  constructor(
    @repository(RequisitosRepository) protected requisitosRepository: RequisitosRepository,
  ) { }

  @get('/requisitos/{id}/plazas', {
    responses: {
      '200': {
        description: 'Array of Requisitos has many Plazas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plazas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Plazas>,
  ): Promise<Plazas[]> {
    return this.requisitosRepository.plazas(id).find(filter);
  }

  @post('/requisitos/{id}/plazas', {
    responses: {
      '200': {
        description: 'Requisitos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plazas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Requisitos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plazas, {
            title: 'NewPlazasInRequisitos',
            exclude: ['id'],
            optional: ['requisitosId']
          }),
        },
      },
    }) plazas: Omit<Plazas, 'id'>,
  ): Promise<Plazas> {
    return this.requisitosRepository.plazas(id).create(plazas);
  }

  @patch('/requisitos/{id}/plazas', {
    responses: {
      '200': {
        description: 'Requisitos.Plazas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plazas, {partial: true}),
        },
      },
    })
    plazas: Partial<Plazas>,
    @param.query.object('where', getWhereSchemaFor(Plazas)) where?: Where<Plazas>,
  ): Promise<Count> {
    return this.requisitosRepository.plazas(id).patch(plazas, where);
  }

  @del('/requisitos/{id}/plazas', {
    responses: {
      '200': {
        description: 'Requisitos.Plazas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plazas)) where?: Where<Plazas>,
  ): Promise<Count> {
    return this.requisitosRepository.plazas(id).delete(where);
  }
}
