import {Model, model, property} from '@loopback/repository';
import {PaymentInstrument} from './payment-instrument.model';

@model()
export class Transaction extends Model {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;

  @property({
    type: 'string',
    enum: [''],
  })
  type?: string;

  @property({
    type: 'string',
    enum: [''],

  })
  status?: string;

  @property({
    type: PaymentInstrument,
    itemType:'object',
  })
  payment_instrument?: PaymentInstrument;

  @property({
    type: 'object',
  })
  metadata?: object;

  @property({
    type: 'date',
  })
  created_at?: string;

  @property({
    type: 'date',
    default: new Date(),

  })
  updated_at?: Date;

  @property({
    type: 'string',
  })
  note?: string;

  @property({
    type: 'date',
    default: new Date(),

  })
  end_at?: Date;


  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
