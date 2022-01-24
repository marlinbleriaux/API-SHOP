import {Model, model, property} from '@loopback/repository';

@model()
export class SecurityQuestion extends Model {
  @property({
    type: 'string',
  })
  question?: string;

  @property({
    type: 'string',
  })
  answer?: string;


  constructor(data?: Partial<SecurityQuestion>) {
    super(data);
  }
}

export interface SecurityQuestionRelations {
  // describe navigational properties here
}

export type SecurityQuestionWithRelations = SecurityQuestion & SecurityQuestionRelations;
