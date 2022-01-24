import { model, property, belongsTo, Entity} from '@loopback/repository';
// import {Note, Register} from '.';
import {Agencies} from './agencies.model';
import {Note} from './note.model';
import {Register} from './register.model';
import {Users} from './users.model';

// import {Users} from './users.model';
// import {Agencies} from './agencies.model';

@model()
export class RegisterSessions extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id?: string;

  @property({
    type: Register,
    itemType:'object',
  })
  register?: Register;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'number',
  })
  opening_cash?: number;

  @property({
    type: 'number',
  })
  closing_cash?: number;

  @property({
    type: Note,
    itemType:'object',
  })
  notes?: Note[];

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
    type: 'date',
    default: new Date(),

  })
  started_at?: Date;

  @property({
    type: 'date',
    default: new Date(),

  })
  closed_at?: Date;

  @property({
    type: 'array',
    itemType: 'string',
    mongodb: {dataType: 'ObjectId'}

  })
  transaction?: string[];



  @belongsTo(() => Agencies)
  agenciesId: string;

  @belongsTo(() => Users)
  usersId: string;

  constructor(data?: Partial<RegisterSessions>) {
    super(data);
  }
}

export interface RegisterSessionsRelations {
  // describe navigational properties here
}

export type RegisterSessionsWithRelations = RegisterSessions & RegisterSessionsRelations;
