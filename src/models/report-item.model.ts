import {Model, model, property} from '@loopback/repository';

@model()
export class ReportItem extends Model {
  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
    enum:[],
  })
  value?: number;

  @property({
    type: 'object',
  })
  details?: object;


  constructor(data?: Partial<ReportItem>) {
    super(data);
  }
}

export interface ReportItemRelations {
  // describe navigational properties here
}

export type ReportItemWithRelations = ReportItem & ReportItemRelations;
