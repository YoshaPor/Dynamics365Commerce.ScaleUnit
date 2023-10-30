
/* tslint:disable */
import { ProxyEntities } from "PosApi/Entities";

import { Entities } from "./DataServiceEntities.g";

import { DataServiceRequest, DataServiceResponse } from "PosApi/Consume/DataService";
export { ProxyEntities };

export { Entities };

  export namespace StoreOperations {

  export class SimplePingPostResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class SimplePingPostRequest<TResponse extends SimplePingPostResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "SimplePingPost";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class SimplePingGetResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class SimplePingGetRequest<TResponse extends SimplePingGetResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "SimplePingGet";
        this._parameters = {  };
        this._isAction = false;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

}

export namespace StoreHours {
  // Entity Set StoreDayHours
  export class GetStoreDaysByStoreResponse extends DataServiceResponse {
    public result: Entities.StoreDayHours[];
  }

  export class GetStoreDaysByStoreRequest<TResponse extends GetStoreDaysByStoreResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(StoreNumber: string) {
        super();

        this._entitySet = "StoreHours";
        this._entityType = "StoreDayHours";
        this._method = "GetStoreDaysByStore";
        this._parameters = { StoreNumber: StoreNumber };
        this._isAction = true;
        this._returnType = Entities.StoreDayHours;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class UpdateStoreDayHoursResponse extends DataServiceResponse {
    public result: Entities.StoreDayHours;
  }

  export class UpdateStoreDayHoursRequest<TResponse extends UpdateStoreDayHoursResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(id: number, storeDayHours: Entities.StoreDayHours) {
        super();

        this._entitySet = "StoreHours";
        this._entityType = "StoreDayHours";
        this._method = "UpdateStoreDayHours";
        this._parameters = { storeDayHours: storeDayHours };
        this._isAction = true;
        this._returnType = Entities.StoreDayHours;
        this._isReturnTypeCollection = false;
        this._keys = { Id: id };
      }
  }

}

export namespace BoundController {
  // Entity Set ExampleEntity
  export class CreateExampleEntityResponse extends DataServiceResponse {
    public result: number;
  }

  export class CreateExampleEntityRequest<TResponse extends CreateExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(entityData: Entities.ExampleEntity) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "CreateExampleEntity";
        this._parameters = { entityData: entityData };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class UpdateExampleEntityResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class UpdateExampleEntityRequest<TResponse extends UpdateExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(unusualEntityId: number, updatedEntity: Entities.ExampleEntity) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "UpdateExampleEntity";
        this._parameters = { updatedEntity: updatedEntity };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        this._keys = { UnusualEntityId: unusualEntityId };
      }
  }

  export class DeleteExampleEntityResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class DeleteExampleEntityRequest<TResponse extends DeleteExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(unusualEntityId: number) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "DeleteExampleEntity";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        this._keys = { UnusualEntityId: unusualEntityId };
      }
  }

  export class GetAllExampleEntitiesResponse extends DataServiceResponse {
    public result: Entities.ExampleEntity[];
  }

  export class GetAllExampleEntitiesRequest<TResponse extends GetAllExampleEntitiesResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "GetAllExampleEntities";
        this._parameters = {  };
        this._isAction = false;
        this._returnType = Entities.ExampleEntity;
        this._isReturnTypeCollection = true;
        
      }
  }

}
