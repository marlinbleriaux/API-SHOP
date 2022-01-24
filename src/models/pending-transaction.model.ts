import {Entity, model, property} from '@loopback/repository';

@model()
export class PendingTransaction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;

  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'}

  })
  sourceId?: string;

  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'}

  })
  targetid?: string;

  @property({
    type: 'boolean',
  })
  isLocked?: boolean;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'object',
  })
  metadata?: object;

  @property({
    type: 'date',
    default:()=>Date(),
  })
  created_at?: Date;

  @property({
    type: 'date',
    default:()=>Date(),
  })
  updated_at?: Date;


  constructor(data?: Partial<PendingTransaction>) {
    super(data);
  }
}

export interface PendingTransactionRelations {
  // describe navigational properties here
}

export type PendingTransactionWithRelations = PendingTransaction & PendingTransactionRelations;
