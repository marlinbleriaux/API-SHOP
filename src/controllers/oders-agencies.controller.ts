import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Oders,
  Agencies,
} from '../models';
import {OdersRepository} from '../repositories';

export class OdersAgenciesController {
  constructor(
    @repository(OdersRepository)
    public odersRepository: OdersRepository,
  ) { }

  @get('/oders/{id}/agencies', {
    responses: {
      '200': {
        description: 'Agencies belonging to Oders',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agencies)},
          },
        },
      },
    },
  })
  async getAgencies(
    @param.path.string('id') id: typeof Oders.prototype.id,
  ): Promise<Agencies> {
    return this.odersRepository.agencies(id);
  }
}
