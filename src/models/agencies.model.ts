import {belongsTo, Entity, model, property} from '@loopback/repository';
// import {Address, PhoneNumber, Register,ProductCategories, Person, PaymentInstrument, Station} from '.';
// import {PaymentInstrument, Person, PhoneNumber, ProductCategories, Register, Station} from '.';
import {Address} from './address.model';
import {PaymentInstrument} from './payment-instrument.model';
import {Person} from './person.model';
import {PhoneNumber} from './phone-number.model';
import {ProductCategories} from './product-categories.model';
import {Register} from './register.model';
import {Shop} from './shop.model';
import {Station} from './station.model';


// import {Shop} from './shop.model';

@model()
export class Agencies extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'boolean',
  })
  is_active?: boolean;

  @property({
    type: 'date',
    efault: () => new Date(),
  })
  open_at?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  close_at?: Date;

  @property({
    type: PhoneNumber,
    itemType: 'object',
  })
  phone_number?: PhoneNumber[];

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'any',
  })
  banner?: any;

  @property({
    type:Address,
    itemType:'object',

  })
  address?: Address;

  @property({
    type: 'array',
    itemType: 'object',
  })
  employees?: object[];

  @property({
    type: Register,
    itemType: 'object',
  })
  registers?: Register[];

  @property({
    type:ProductCategories,
    itemType: 'object',
  })
  product_categories?: ProductCategories[];

  @property({
    type: Person,
    itemType: 'object',
  })
  customers?: Person[];

  @property({
    type: PaymentInstrument,
    itemType: 'object',
  })
  paymentAccount?: PaymentInstrument[];

  @property({
    type: 'date',
    default: () => new Date(),
  })
  created_at?: Date;

  @property({
    type: 'array',
    itemType: 'date',
    default: () => new Date(),
  })
  update_at?: string[];

  @property({
    type: Station,
    itemType: 'object',
  })
  stations?: Station[];

  @property({
    type: Person,
    itemType: 'object',
  })
  agents?: Person[];

  @belongsTo(() => Shop)
  shopId: string;


  constructor(data?: Partial<Agencies>) {
    super(data);
  }
}

export interface AgenciesRelations {
  // describe navigational properties here
}

export type AgenciesWithRelations = Agencies & AgenciesRelations;
