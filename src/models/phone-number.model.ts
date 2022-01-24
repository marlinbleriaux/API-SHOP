import {Model, model, property} from '@loopback/repository';

@model()
export class PhoneNumber extends Model {
  @property({
    // required: true,
    type: 'number',

    // jsonSchema: {
    //   maximum: 9,
    //   errorMessage: 'the phone number must be at least 9 characters',
    // },
  })
  number: number;

  @property({
    type: 'string',
  })
  mno?: string;

  @property({
    type: 'boolean',
  })
  is_momo?: boolean;

  @property({
    type: 'boolean',
  })
  is_verified?: boolean;


  constructor(data?: Partial<PhoneNumber>) {
    super(data);
  }
}

export interface PhoneNumberRelations {
  // describe navigational properties here
}

export type PhoneNumberWithRelations = PhoneNumber & PhoneNumberRelations;
