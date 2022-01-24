import {Model, model, property} from '@loopback/repository';

@model()
export class Image extends Model {
  @property({
    type: 'string',
  })
  path?: string;

  @property({
    type: 'any',
  })
  content?: any;

  @property({
    type: 'number',
  })
  size?: number;

  @property({
    type: 'number',
  })
  height?: number;

  @property({
    type: 'number',
  })
  width?: number;


  constructor(data?: Partial<Image>) {
    super(data);
  }
}

export interface ImageRelations {
  // describe navigational properties here
}

export type ImageWithRelations = Image & ImageRelations;
