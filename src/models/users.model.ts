import {Entity, model, property} from '@loopback/repository';
import {Confirmation} from './confirmation.model';
import {Note} from './note.model';
import {Person} from './person.model';
import {PhoneNumber} from './phone-number.model';
import {SecurityQuestion} from './security-question.model';
import {UserShops} from './user-shops.model';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}

  })
  id?: string;


  @property({
    type: 'object',
    mongodb: {dataType: 'ObjectId'}

  })
  agencies?: object;

  @property({
    type: UserShops,
    itemType:'array',
  })
  shops?: UserShops;

  @property({
    type:  Person,
    itemType: 'object'
  })
  person?: Person;

  @property( {
    type: 'string',
    jsonSchema: {
      format: 'email',
    },
  })
  email: string;
  // @property({
  //   type: 'string',
  // })
  // email?: string;

  @property({
    type: 'boolean',

  })
  isVerified?: boolean;

  @property({
    type:PhoneNumber,
    itemType: 'object'
  })
  phone_number?: PhoneNumber;

  @property({
    type: 'string',
  })
  taxe_payer_number?: string;

  @property({
    type: Note,
    itemType: 'object',
  })
  note?: Note[];

  @property({
    type: SecurityQuestion,
    itemType: 'object',
  })
  security_questions?: SecurityQuestion[];

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updates_at?: Date;


  @property({
    type: Confirmation,
    itemType: 'object',
  })
  confirmations?: Confirmation[];


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
