import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Products, ProductsRelations, Agencies, Shop} from '../models';
import {AgenciesRepository} from './agencies.repository';
import {ShopRepository} from './shop.repository';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id,
  ProductsRelations
> {

  public readonly agencies: BelongsToAccessor<Agencies, typeof Products.prototype.id>;

  public readonly shop: BelongsToAccessor<Shop, typeof Products.prototype.id>;

  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource, @repository.getter('AgenciesRepository') protected agenciesRepositoryGetter: Getter<AgenciesRepository>, @repository.getter('ShopRepository') protected shopRepositoryGetter: Getter<ShopRepository>,
  ) {
    super(Products, dataSource);
    this.shop = this.createBelongsToAccessorFor('shop', shopRepositoryGetter,);
    this.registerInclusionResolver('shop', this.shop.inclusionResolver);
    this.agencies = this.createBelongsToAccessorFor('agencies', agenciesRepositoryGetter,);
    this.registerInclusionResolver('agencies', this.agencies.inclusionResolver);
  }
}
