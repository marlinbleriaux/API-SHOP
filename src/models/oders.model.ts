import {belongsTo, Entity, model, property} from '@loopback/repository';
// import {Transaction, Station} from '.';
// import {OrderDetail, Person, Station, Transaction} from '.';
import {Agencies} from './agencies.model';
import {OrderDetail} from './order-detail.model';
import {Person} from './person.model';
import {Register} from './register.model';
import {Station} from './station.model';
import {Transaction} from './transaction.model';
import {UServices} from './u-services.model';

// import {UServices} from './u-services.model';
// import {Agencies} from './agencies.model';

@model()
export class Oders extends Entity {
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
  recipoent?: string;

  @property({
    type: Register,
    itemType:'object',
  })
  register?: Register;

  @property({
    type: 'string',
  })
  order_number?: string;

  @property({
    type: 'string',
    enum: [''],
  })
  status?: string;

  @property({
    type: Person,
    itemType: 'object'
  })
  customer?: Person;

  @property({
    type: OrderDetail,
    itemType: 'object',
  })
  details?: OrderDetail[];

  @property({
    type: 'string',
    enum: [''],
  })
  type?: string;

  @property({
    type:Transaction,
    itemType: 'object',
  })
  transaction?: Transaction;

  @property({
    type: 'number',
  })
  profit?: number;

  @property({
    type: 'number',
  })
  amount?: number;

  @property({
    type: 'number',
  })
  taxe?: number;

  @property({
    type: 'date',
    default: new Date(),

  })
  created_at?: Date;

  @property({
    type: 'date',
    default: new Date(),
  })
  updated_at?: Date;

  @property({
    type: 'number',
  })
  cog?: number;

  @property({
    type: 'string',
  })
  note?: string;

  @property({
    type: 'string',
    enum: [''],
  })
  payment_status?: string;

  @property({
    type: 'number',
  })
  quantity?: number;

  @property({
    type: 'object',
  })
  metadata?: object;

  @property({
    type:Station,
    itemType: 'object',
  })
  station?: Station;

  @property({
    type: Person,
    itemType: 'object',
  })
  agent?: Person;

  @belongsTo(() => UServices)
  uServicesId: string;

  @belongsTo(() => Agencies)
  agenciesId: string;
  // @belongsTo(() => UServices)
  // uServicesId: string;

  // @belongsTo(() => Agencies)
  // agenciesId: string;
  // @belongsTo(() => UServices)
  // uServicesId: string;

  // @belongsTo(() => Agencies)
  // agenciesId: string;

  constructor(data?: Partial<Oders>) {
    super(data);
  }
}

export interface OdersRelations {
  // describe navigational properties here
}

export type OdersWithRelations = Oders & OdersRelations;
