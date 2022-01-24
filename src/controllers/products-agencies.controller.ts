import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Products,
  Agencies,
} from '../models';
import {ProductsRepository} from '../repositories';

export class ProductsAgenciesController {
  constructor(
    @repository(ProductsRepository)
    public productsRepository: ProductsRepository,
  ) { }

  @get('/products/{id}/agencies', {
    responses: {
      '200': {
        description: 'Agencies belonging to Products',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Agencies)},
          },
        },
      },
    },
  })
  async getAgencies(
    @param.path.string('id') id: typeof Products.prototype.id,
  ): Promise<Agencies> {
    return this.productsRepository.agencies(id);
  }
}
