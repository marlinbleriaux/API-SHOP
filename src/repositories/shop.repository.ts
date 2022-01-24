import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Shop, ShopRelations} from '../models';

export class ShopRepository extends DefaultCrudRepository<
  Shop,
  typeof Shop.prototype.id,
  ShopRelations
> {
  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource,
  ) {
    super(Shop, dataSource);
  }
}
