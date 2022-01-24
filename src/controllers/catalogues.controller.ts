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
import {Catalogues} from '../models';
import {CataloguesRepository} from '../repositories';

export class CataloguesController {
  constructor(
    @repository(CataloguesRepository)
    public cataloguesRepository : CataloguesRepository,
  ) {}

  @post('/catalogues')
  @response(200, {
    description: 'Catalogues model instance',
    content: {'application/json': {schema: getModelSchemaRef(Catalogues)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Catalogues, {
            title: 'NewCatalogues',
            exclude: ['id'],
          }),
        },
      },
    })
    catalogues: Omit<Catalogues, 'id'>,
  ): Promise<Catalogues> {
    return this.cataloguesRepository.create(catalogues);
  }

  @get('/catalogues/count')
  @response(200, {
    description: 'Catalogues model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Catalogues) where?: Where<Catalogues>,
  ): Promise<Count> {
    return this.cataloguesRepository.count(where);
  }

  @get('/catalogues')
  @response(200, {
    description: 'Array of Catalogues model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Catalogues, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Catalogues) filter?: Filter<Catalogues>,
  ): Promise<Catalogues[]> {
    return this.cataloguesRepository.find(filter);
  }

  @patch('/catalogues')
  @response(200, {
    description: 'Catalogues PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Catalogues, {partial: true}),
        },
      },
    })
    catalogues: Catalogues,
    @param.where(Catalogues) where?: Where<Catalogues>,
  ): Promise<Count> {
    return this.cataloguesRepository.updateAll(catalogues, where);
  }

  @get('/catalogues/{id}')
  @response(200, {
    description: 'Catalogues model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Catalogues, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Catalogues, {exclude: 'where'}) filter?: FilterExcludingWhere<Catalogues>
  ): Promise<Catalogues> {
    return this.cataloguesRepository.findById(id, filter);
  }

  @patch('/catalogues/{id}')
  @response(204, {
    description: 'Catalogues PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Catalogues, {partial: true}),
        },
      },
    })
    catalogues: Catalogues,
  ): Promise<void> {
    await this.cataloguesRepository.updateById(id, catalogues);
  }

  @put('/catalogues/{id}')
  @response(204, {
    description: 'Catalogues PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() catalogues: Catalogues,
  ): Promise<void> {
    await this.cataloguesRepository.replaceById(id, catalogues);
  }

  @del('/catalogues/{id}')
  @response(204, {
    description: 'Catalogues DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cataloguesRepository.deleteById(id);
  }
}
