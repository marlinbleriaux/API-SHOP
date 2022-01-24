import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Catalogues, CataloguesRelations} from '../models';

export class CataloguesRepository extends DefaultCrudRepository<
  Catalogues,
  typeof Catalogues.prototype.id,
  CataloguesRelations
> {
  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource,
  ) {
    super(Catalogues, dataSource);
  }
}
