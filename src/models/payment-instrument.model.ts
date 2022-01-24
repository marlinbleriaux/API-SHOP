import {Model, model, property} from '@loopback/repository';
import {BankCard} from './bank-card.model';
import {PhoneNumber} from './phone-number.model';
// import {BankCard, PhoneNumber} from '.';

@model()
export class PaymentInstrument extends Model {
  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: PhoneNumber,
    itemType:'object',
  })
  phone_number?: PhoneNumber;

  @property({
    type: 'boolean',
  })
  is_default?: boolean;

  @property({
    type: BankCard,
    itemType: 'object',
  })
  bank_card?: BankCard;


  constructor(data?: Partial<PaymentInstrument>) {
    super(data);
  }
}

export interface PaymentInstrumentRelations {
  // describe navigational properties here
}

export type PaymentInstrumentWithRelations = PaymentInstrument & PaymentInstrumentRelations;
