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
import {Reports} from '../models';
import {ReportsRepository} from '../repositories';

export class ReportsController {
  constructor(
    @repository(ReportsRepository)
    public reportsRepository : ReportsRepository,
  ) {}

  @post('/reports')
  @response(200, {
    description: 'Reports model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reports)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reports, {
            title: 'NewReports',
            exclude: ['id'],
          }),
        },
      },
    })
    reports: Omit<Reports, 'id'>,
  ): Promise<Reports> {
    return this.reportsRepository.create(reports);
  }

  @get('/reports/count')
  @response(200, {
    description: 'Reports model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reports) where?: Where<Reports>,
  ): Promise<Count> {
    return this.reportsRepository.count(where);
  }

  @get('/reports')
  @response(200, {
    description: 'Array of Reports model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reports, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reports) filter?: Filter<Reports>,
  ): Promise<Reports[]> {
    return this.reportsRepository.find(filter);
  }

  @patch('/reports')
  @response(200, {
    description: 'Reports PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reports, {partial: true}),
        },
      },
    })
    reports: Reports,
    @param.where(Reports) where?: Where<Reports>,
  ): Promise<Count> {
    return this.reportsRepository.updateAll(reports, where);
  }

  @get('/reports/{id}')
  @response(200, {
    description: 'Reports model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reports, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Reports, {exclude: 'where'}) filter?: FilterExcludingWhere<Reports>
  ): Promise<Reports> {
    return this.reportsRepository.findById(id, filter);
  }

  @patch('/reports/{id}')
  @response(204, {
    description: 'Reports PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reports, {partial: true}),
        },
      },
    })
    reports: Reports,
  ): Promise<void> {
    await this.reportsRepository.updateById(id, reports);
  }

  @put('/reports/{id}')
  @response(204, {
    description: 'Reports PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() reports: Reports,
  ): Promise<void> {
    await this.reportsRepository.replaceById(id, reports);
  }

  @del('/reports/{id}')
  @response(204, {
    description: 'Reports DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.reportsRepository.deleteById(id);
  }
}
