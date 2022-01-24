import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Agencies,
  Shop,
} from '../models';
import {AgenciesRepository} from '../repositories';

export class AgenciesShopController {
  constructor(
    @repository(AgenciesRepository)
    public agenciesRepository: AgenciesRepository,
  ) { }

  @get('/agencies/{id}/shop', {
    responses: {
      '200': {
        description: 'Shop belonging to Agencies',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Shop)},
          },
        },
      },
    },
  })
  async getShop(
    @param.path.string('id') id: typeof Agencies.prototype.id,
  ): Promise<Shop> {
    return this.agenciesRepository.shop(id);
  }
}
