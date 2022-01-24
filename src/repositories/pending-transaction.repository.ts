import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {PendingTransaction, PendingTransactionRelations} from '../models';

export class PendingTransactionRepository extends DefaultCrudRepository<
  PendingTransaction,
  typeof PendingTransaction.prototype.id,
  PendingTransactionRelations
> {
  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource,
  ) {
    super(PendingTransaction, dataSource);
  }
}
