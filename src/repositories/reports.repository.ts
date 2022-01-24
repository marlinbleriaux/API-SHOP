import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Reports, ReportsRelations} from '../models';

export class ReportsRepository extends DefaultCrudRepository<
  Reports,
  typeof Reports.prototype.id,
  ReportsRelations
> {
  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource,
  ) {
    super(Reports, dataSource);
  }
}
