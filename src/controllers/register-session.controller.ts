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
import {RegisterSessions} from '../models';
import {RegisterSessionsRepository} from '../repositories';

export class RegisterSessionController {
  constructor(
    @repository(RegisterSessionsRepository)
    public registerSessionsRepository : RegisterSessionsRepository,
  ) {}

  @post('/register-sessions')
  @response(200, {
    description: 'RegisterSessions model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegisterSessions)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisterSessions, {
            title: 'NewRegisterSessions',
            exclude: ['id'],
          }),
        },
      },
    })
    registerSessions: Omit<RegisterSessions, 'id'>,
  ): Promise<RegisterSessions> {
    return this.registerSessionsRepository.create(registerSessions);
  }

  @get('/register-sessions/count')
  @response(200, {
    description: 'RegisterSessions model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegisterSessions) where?: Where<RegisterSessions>,
  ): Promise<Count> {
    return this.registerSessionsRepository.count(where);
  }

  @get('/register-sessions')
  @response(200, {
    description: 'Array of RegisterSessions model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegisterSessions, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegisterSessions) filter?: Filter<RegisterSessions>,
  ): Promise<RegisterSessions[]> {
    return this.registerSessionsRepository.find(filter);
  }

  @patch('/register-sessions')
  @response(200, {
    description: 'RegisterSessions PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisterSessions, {partial: true}),
        },
      },
    })
    registerSessions: RegisterSessions,
    @param.where(RegisterSessions) where?: Where<RegisterSessions>,
  ): Promise<Count> {
    return this.registerSessionsRepository.updateAll(registerSessions, where);
  }

  @get('/register-sessions/{id}')
  @response(200, {
    description: 'RegisterSessions model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegisterSessions, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RegisterSessions, {exclude: 'where'}) filter?: FilterExcludingWhere<RegisterSessions>
  ): Promise<RegisterSessions> {
    return this.registerSessionsRepository.findById(id, filter);
  }

  @patch('/register-sessions/{id}')
  @response(204, {
    description: 'RegisterSessions PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisterSessions, {partial: true}),
        },
      },
    })
    registerSessions: RegisterSessions,
  ): Promise<void> {
    await this.registerSessionsRepository.updateById(id, registerSessions);
  }

  @put('/register-sessions/{id}')
  @response(204, {
    description: 'RegisterSessions PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() registerSessions: RegisterSessions,
  ): Promise<void> {
    await this.registerSessionsRepository.replaceById(id, registerSessions);
  }

  @del('/register-sessions/{id}')
  @response(204, {
    description: 'RegisterSessions DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.registerSessionsRepository.deleteById(id);
  }
}
