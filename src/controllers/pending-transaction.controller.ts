import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PendingTransaction} from '../models';
import {PendingTransactionRepository} from '../repositories';

export class PendingTransactionController {
  constructor(
    @repository(PendingTransactionRepository)
    public pendingTransactionRepository : PendingTransactionRepository,
  ) {}

  @post('/pending-transactions')
  @response(200, {
    description: 'PendingTransaction model instance',
    content: {'application/json': {schema: getModelSchemaRef(PendingTransaction)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PendingTransaction, {
            title: 'NewPendingTransaction',
            exclude: ['id'],
          }),
        },
      },
    })
    pendingTransaction: Omit<PendingTransaction, 'id'>,
  ): Promise<PendingTransaction> {
    return this.pendingTransactionRepository.create(pendingTransaction);
  }

  @get('/pending-transactions/count')
  @response(200, {
    description: 'PendingTransaction model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PendingTransaction) where?: Where<PendingTransaction>,
  ): Promise<Count> {
    return this.pendingTransactionRepository.count(where);
  }

  @get('/pending-transactions')
  @response(200, {
    description: 'Array of PendingTransaction model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PendingTransaction, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PendingTransaction) filter?: Filter<PendingTransaction>,
  ): Promise<PendingTransaction[]> {
    return this.pendingTransactionRepository.find(filter);
  }

  @patch('/pending-transactions')
  @response(200, {
    description: 'PendingTransaction PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PendingTransaction, {partial: true}),
        },
      },
    })
    pendingTransaction: PendingTransaction,
    @param.where(PendingTransaction) where?: Where<PendingTransaction>,
  ): Promise<Count> {
    return this.pendingTransactionRepository.updateAll(pendingTransaction, where);
  }

  @get('/pending-transactions/{id}')
  @response(200, {
    description: 'PendingTransaction model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PendingTransaction, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PendingTransaction, {exclude: 'where'}) filter?: FilterExcludingWhere<PendingTransaction>
  ): Promise<PendingTransaction> {
    return this.pendingTransactionRepository.findById(id, filter);
  }

  @patch('/pending-transactions/{id}')
  @response(204, {
    description: 'PendingTransaction PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PendingTransaction, {partial: true}),
        },
      },
    })
    pendingTransaction: PendingTransaction,
  ): Promise<void> {
    await this.pendingTransactionRepository.updateById(id, pendingTransaction);
  }

  @put('/pending-transactions/{id}')
  @response(204, {
    description: 'PendingTransaction PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pendingTransaction: PendingTransaction,
  ): Promise<void> {
    await this.pendingTransactionRepository.replaceById(id, pendingTransaction);
  }

  @del('/pending-transactions/{id}')
  @response(204, {
    description: 'PendingTransaction DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pendingTransactionRepository.deleteById(id);
  }
}
