import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {UServices, UServicesRelations} from '../models';

export class UServicesRepository extends DefaultCrudRepository<
  UServices,
  typeof UServices.prototype.id,
  UServicesRelations
> {
  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource,
  ) {
    super(UServices, dataSource);
  }
}
