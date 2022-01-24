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
import {UServices} from '../models';
import {UServicesRepository} from '../repositories';

export class UServicesController {
  constructor(
    @repository(UServicesRepository)
    public uServicesRepository : UServicesRepository,
  ) {}

  @post('/u-services')
  @response(200, {
    description: 'UServices model instance',
    content: {'application/json': {schema: getModelSchemaRef(UServices)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UServices, {
            title: 'NewUServices',
            exclude: ['id'],
          }),
        },
      },
    })
    uServices: Omit<UServices, 'id'>,
  ): Promise<UServices> {
    return this.uServicesRepository.create(uServices);
  }

  @get('/u-services/count')
  @response(200, {
    description: 'UServices model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UServices) where?: Where<UServices>,
  ): Promise<Count> {
    return this.uServicesRepository.count(where);
  }

  @get('/u-services')
  @response(200, {
    description: 'Array of UServices model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UServices, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UServices) filter?: Filter<UServices>,
  ): Promise<UServices[]> {
    return this.uServicesRepository.find(filter);
  }

  @patch('/u-services')
  @response(200, {
    description: 'UServices PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UServices, {partial: true}),
        },
      },
    })
    uServices: UServices,
    @param.where(UServices) where?: Where<UServices>,
  ): Promise<Count> {
    return this.uServicesRepository.updateAll(uServices, where);
  }

  @get('/u-services/{id}')
  @response(200, {
    description: 'UServices model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UServices, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UServices, {exclude: 'where'}) filter?: FilterExcludingWhere<UServices>
  ): Promise<UServices> {
    return this.uServicesRepository.findById(id, filter);
  }

  @patch('/u-services/{id}')
  @response(204, {
    description: 'UServices PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UServices, {partial: true}),
        },
      },
    })
    uServices: UServices,
  ): Promise<void> {
    await this.uServicesRepository.updateById(id, uServices);
  }

  @put('/u-services/{id}')
  @response(204, {
    description: 'UServices PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() uServices: UServices,
  ): Promise<void> {
    await this.uServicesRepository.replaceById(id, uServices);
  }

  @del('/u-services/{id}')
  @response(204, {
    description: 'UServices DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.uServicesRepository.deleteById(id);
  }
}
