import {Model, model, property} from '@loopback/repository';
import { PhoneNumber }  from './phone-number.model';
import { Address }  from './address.model';


@model()
export class Person extends Model {
  @property({
    type: PhoneNumber,
    itemType: 'object',
  })
  phone_number?: PhoneNumber[];

  @property({
    type: 'string',
  })
  user_id?: string;

  @property({
    type: 'string',
  })
  first_name?: string;

  @property({
    type: 'string',
  })
  middle_name?: string;

  @property({
    type: 'string',
  })
  last_name?: string;

  @property({
    type: 'date',
  })
  birth_date?: string;

  // @property({
  //   type: 'array',
  //   itemType: 'buffer',

  // })
  // avatar?: Buffer[];

  @property({
    type:Address,
    itemType: 'object',
  })
  address?: Address[];


  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
