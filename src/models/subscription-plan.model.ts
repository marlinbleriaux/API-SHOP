import {Model, model, property} from '@loopback/repository';

@model()
export class SubscriptionPlan extends Model {
  @property({
    type: 'string',
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    enum:[],
  })
  status?: string;

  @property({
    type: 'number',
  })
  monthly_cost?: number;

  @property({
    type: 'number',
  })
  yearly_cost?: number;

  @property({
    type: 'number',
  })
  has_auto_paid?: number;

  @property({
    type: 'number',
  })
  is_active?: number;

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
  end_at?: Date[];


  constructor(data?: Partial<SubscriptionPlan>) {
    super(data);
  }
}

export interface SubscriptionPlanRelations {
  // describe navigational properties here
}

export type SubscriptionPlanWithRelations = SubscriptionPlan & SubscriptionPlanRelations;
