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
  Shop,
} from '../models';
import {ProductsRepository} from '../repositories';

export class ProductsShopController {
  constructor(
    @repository(ProductsRepository)
    public productsRepository: ProductsRepository,
  ) { }

  @get('/products/{id}/shop', {
    responses: {
      '200': {
        description: 'Shop belonging to Products',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Shop)},
          },
        },
      },
    },
  })
  async getShop(
    @param.path.string('id') id: typeof Products.prototype.id,
  ): Promise<Shop> {
    return this.productsRepository.shop(id);
  }
}
