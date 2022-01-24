
import {Entity, model, property} from '@loopback/repository';
// import {Patner, PaymentInstrument, ProductCategories, Register, SubscriptionPlan} from '.';
import {Address} from './address.model';
import {Patner} from './patner.model';
import {PaymentInstrument} from './payment-instrument.model';
import {ProductCategories} from './product-categories.model';
import {Register} from './register.model';
import {SubscriptionPlan} from './subscription-plan.model';

@model()
export class Shop extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'array',
    itemType: 'string',
    enum: [''],
  })
  business?: string[];

  @property({
    type: 'string',
  })
  registration_number?: string;

  @property({
    type: Address,
    itemType:'object',
  })
  address?: Address;

  @property({
    type: Register,
    itemType: 'object',
  })
  registers?: Register[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  employees?: string[];

  @property({
    type: PaymentInstrument,
    itemType: 'object',
  })
  payment_accounts?: PaymentInstrument[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  agencies?: object[];

  @property({
    type: ProductCategories,
    itemType: 'object',
  })
  product_categories?: ProductCategories[];

  @property({
    type: 'date',
    default: () => new Date(),
  })
  created_at?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updated_at?: Date;

  @property({
    type: 'date',
    default: () => new Date(),

  })
  last_paid_at?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  frozen_at?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  trial_start_at?: Date;

  @property({
    type: SubscriptionPlan,
    itemType: 'object',
  })
  subscription_plan?: SubscriptionPlan[];

  @property({
    type: Patner,
    itemType: 'object',
  })
  patners?: Patner[];


  constructor(data?: Partial<Shop>) {
    super(data);
  }
}

export interface ShopRelations {
  // describe navigational properties here
}

export type ShopWithRelations = Shop & ShopRelations;
