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
  UServices,
} from '../models';
import {OdersRepository} from '../repositories';

export class OdersUServicesController {
  constructor(
    @repository(OdersRepository)
    public odersRepository: OdersRepository,
  ) { }

  @get('/oders/{id}/u-services', {
    responses: {
      '200': {
        description: 'UServices belonging to Oders',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(UServices)},
          },
        },
      },
    },
  })
  async getUServices(
    @param.path.string('id') id: typeof Oders.prototype.id,
  ): Promise<UServices> {
    return this.odersRepository.uServices(id);
  }
}
