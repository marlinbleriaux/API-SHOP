import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataPostDataSource} from '../datasources';
import {Oders, OdersRelations, UServices, Agencies} from '../models';
import {UServicesRepository} from './u-services.repository';
import {AgenciesRepository} from './agencies.repository';

export class OdersRepository extends DefaultCrudRepository<
  Oders,
  typeof Oders.prototype.id,
  OdersRelations
> {

  public readonly uServices: BelongsToAccessor<UServices, typeof Oders.prototype.id>;

  public readonly agencies: BelongsToAccessor<Agencies, typeof Oders.prototype.id>;

  constructor(
    @inject('datasources.dataPost') dataSource: DataPostDataSource, @repository.getter('UServicesRepository') protected uServicesRepositoryGetter: Getter<UServicesRepository>, @repository.getter('AgenciesRepository') protected agenciesRepositoryGetter: Getter<AgenciesRepository>,
  ) {
    super(Oders, dataSource);
    this.agencies = this.createBelongsToAccessorFor('agencies', agenciesRepositoryGetter,);
    this.registerInclusionResolver('agencies', this.agencies.inclusionResolver);
    this.uServices = this.createBelongsToAccessorFor('uServices', uServicesRepositoryGetter,);
    this.registerInclusionResolver('uServices', this.uServices.inclusionResolver);
  }
}
