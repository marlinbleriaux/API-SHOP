import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Agencies, AgenciesRelations, Shop} from '../models';
import {ShopRepository} from './shop.repository';

export class AgenciesRepository extends DefaultCrudRepository<
  Agencies,
  typeof Agencies.prototype.id,
  AgenciesRelations
> {

  public readonly shop: BelongsToAccessor<Shop, typeof Agencies.prototype.id>;

  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource, @repository.getter('ShopRepository') protected shopRepositoryGetter: Getter<ShopRepository>,
  ) {
    super(Agencies, dataSource);
    this.shop = this.createBelongsToAccessorFor('shop', shopRepositoryGetter,);
    this.registerInclusionResolver('shop', this.shop.inclusionResolver);
  }
}
