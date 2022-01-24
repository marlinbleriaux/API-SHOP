import {Model, model, property} from '@loopback/repository';

@model()
export class BankCard extends Model {
  @property({
    type: 'string',
  })
  number?: string;

  // @property({
  //   type: 'date',
  // })
  // expired_at?: string;
  @property({
    type: 'date',
    default: () => new Date(),
  })
  expired_at?: Date;
  @property({
    type: 'string',
  })
  code?: string;


  constructor(data?: Partial<BankCard>) {
    super(data);
  }
}

export interface BankCardRelations {
  // describe navigational properties here
}

export type BankCardWithRelations = BankCard & BankCardRelations;
