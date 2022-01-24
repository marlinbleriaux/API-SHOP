import {Model, model, property} from '@loopback/repository';

@model()
export class Register extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  key?: string;


  constructor(data?: Partial<Register>) {
    super(data);
  }
}

export interface RegisterRelations {
  // describe navigational properties here
}

export type RegisterWithRelations = Register & RegisterRelations;
