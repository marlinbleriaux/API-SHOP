import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  RegisterSessions,
  Agencies,
} from '../models';
import {RegisterSessionsRepository} from '../repositories';

export class RegisterSessionsAgenciesController {
  constructor(
    @repository(RegisterSessionsRepository)
    public registerSessionsRepository: RegisterSessionsRepository,
  ) { }

  @get('/register-sessions/{id}/agencies', {
    responses: {
      '200': {
        description: 'Agencies belonging to RegisterSessions',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agencies)},
          },
        },
      },
    },
  })
  async getAgencies(
    @param.path.string('id') id: typeof RegisterSessions.prototype.id,
  ): Promise<Agencies> {
    return this.registerSessionsRepository.agencies(id);
  }
}
