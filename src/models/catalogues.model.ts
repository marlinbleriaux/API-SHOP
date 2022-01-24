import {Entity, model, property} from '@loopback/repository';

@model()
export class Catalogues extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    mongodb: {dataType: 'ObjectId'},

  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  business?: string[];

  @property({
    type: 'object',
  })
  products?: object;


  constructor(data?: Partial<Catalogues>) {
    super(data);
  }
}

export interface CataloguesRelations {
  // describe navigational properties here
}

export type CataloguesWithRelations = Catalogues & CataloguesRelations;
