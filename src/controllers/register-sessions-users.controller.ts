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
  Users,
} from '../models';
import {RegisterSessionsRepository} from '../repositories';

export class RegisterSessionsUsersController {
  constructor(
    @repository(RegisterSessionsRepository)
    public registerSessionsRepository: RegisterSessionsRepository,
  ) { }

  @get('/register-sessions/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to RegisterSessions',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.string('id') id: typeof RegisterSessions.prototype.id,
  ): Promise<Users> {
    return this.registerSessionsRepository.users(id);
  }
}
