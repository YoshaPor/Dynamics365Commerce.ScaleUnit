
    /*!
    * Copyright (c) Microsoft Corporation.
    * All rights reserved. See LICENSE in the project root for license information.
    * THIS FILE IS AN AUTOGENERATED TYPESCRIPT PROXY EXTENSION.
    * TO USE THIS FILE, IT MUST BE ADDED TO A D365COMMERCE APPLICATION
    */
    import {
        AsyncResult,
        callActionOrExecute,
        DataServiceQuery,
        IContext,
        IDataServiceRequest,
        IQueryResultSettings,
        // @ts-ignore -- Unused import
        NullResult
    } from '@msdyn365-commerce/retail-proxy';
    // @ts-ignore -- Unused import
    import * as EntityClasses from '@msdyn365-commerce/retail-proxy/dist/Entities/CommerceModels.g';
    // @ts-ignore -- Unused import
    import * as Entities from '@msdyn365-commerce/retail-proxy/dist/Entities/CommerceTypes.g';
    import * as DataServiceEntities from './DataServiceEntities.g';

    
    function simplePingPostQuery(): DataServiceQuery {
          return new DataServiceQuery();
          }

    
    export function simplePingPostInput (
        
    ): IDataServiceRequest {
      const query = simplePingPostQuery();
      return query.createDataServiceRequestForOperation(
          'SimplePingPost',
          true, 
            ''
          ,
          'false',
          { bypassCache: 'get', returnEntity: '' },
          {
          
          }
      );
    }

    export function simplePingPostAsync (
        context: IContext
        ): AsyncResult<boolean> {
        const request = simplePingPostInput();
        return callActionOrExecute<boolean>(request, context.callerContext);
        }
      
    function simplePingGetQuery(): DataServiceQuery {
          return new DataServiceQuery();
          }

    
    export function simplePingGetInput (
        
    ): IDataServiceRequest {
      const query = simplePingGetQuery();
      return query.createDataServiceRequestForOperation(
          'SimplePingGet',
          false, 
            ''
          ,
          'false',
          { bypassCache: 'get', returnEntity: '' },
          {
          
          }
      );
    }

    export function simplePingGetAsync (
        context: IContext
        ): AsyncResult<boolean> {
        const request = simplePingGetInput();
        return callActionOrExecute<boolean>(request, context.callerContext);
        }
      

        // @ts-ignore
        function storeHoursQuery(id?: number): DataServiceQuery {
        const key = (id) ? { Id: id } :null;
        return new DataServiceQuery("StoreHours", "StoreDayHours", DataServiceEntities.StoreDayHoursExtensionClass, key);
        }

        
    export function createGetStoreDaysByStoreInput(queryResultSettings: IQueryResultSettings, storeNumber: string): IDataServiceRequest {
    const query = storeHoursQuery().resultSettings(queryResultSettings);
    return query.createDataServiceRequestForOperation('GetStoreDaysByStore', true, DataServiceEntities.StoreDayHoursExtensionClass, 'true', {bypassCache: 'none', returnEntity: 'DataServiceEntities.IStoreDayHours'}, {StoreNumber: storeNumber });
    }

    
    export function getStoreDaysByStoreAsync(context: IContext, storeNumber: string): AsyncResult<DataServiceEntities.IStoreDayHours[]> {
    const request = createGetStoreDaysByStoreInput(
      context.queryResultSettings || {}, storeNumber);
    return callActionOrExecute<DataServiceEntities.IStoreDayHours[]>(request, context.callerContext);
    }
  
    export function createUpdateStoreDayHoursInput(id: number, storeDayHours: DataServiceEntities.IStoreDayHours): IDataServiceRequest {
    const query = storeHoursQuery(id);
    return query.createDataServiceRequestForOperation('UpdateStoreDayHours', true, DataServiceEntities.StoreDayHoursExtensionClass, 'false', {bypassCache: 'get', returnEntity: 'DataServiceEntities.IStoreDayHours'}, {storeDayHours: storeDayHours });
    }

    
    export function updateStoreDayHoursAsync(context: IContext, id: number, storeDayHours: DataServiceEntities.IStoreDayHours): AsyncResult<DataServiceEntities.IStoreDayHours> {
    const request = createUpdateStoreDayHoursInput(id, storeDayHours);
    return callActionOrExecute<DataServiceEntities.IStoreDayHours>(request, context.callerContext);
    }
  

        // @ts-ignore
        function boundControllerQuery(unusualEntityId?: number): DataServiceQuery {
        const key = (unusualEntityId) ? { UnusualEntityId: unusualEntityId } :null;
        return new DataServiceQuery("BoundController", "ExampleEntity", DataServiceEntities.ExampleEntityExtensionClass, key);
        }

        
    export function createCreateExampleEntityInput(entityData: DataServiceEntities.IExampleEntity): IDataServiceRequest {
    const query = boundControllerQuery();
    return query.createDataServiceRequestForOperation('CreateExampleEntity', true, '', 'false', {bypassCache: 'get', returnEntity: ''}, {entityData: entityData });
    }

    
    export function createExampleEntityAsync(context: IContext, entityData: DataServiceEntities.IExampleEntity): AsyncResult<number> {
    const request = createCreateExampleEntityInput(entityData);
    return callActionOrExecute<number>(request, context.callerContext);
    }
  
    export function createUpdateExampleEntityInput(unusualEntityId: number, updatedEntity: DataServiceEntities.IExampleEntity): IDataServiceRequest {
    const query = boundControllerQuery(unusualEntityId);
    return query.createDataServiceRequestForOperation('UpdateExampleEntity', true, '', 'false', {bypassCache: 'get', returnEntity: ''}, {updatedEntity: updatedEntity });
    }

    
    export function updateExampleEntityAsync(context: IContext, unusualEntityId: number, updatedEntity: DataServiceEntities.IExampleEntity): AsyncResult<boolean> {
    const request = createUpdateExampleEntityInput(unusualEntityId, updatedEntity);
    return callActionOrExecute<boolean>(request, context.callerContext);
    }
  
    export function createDeleteExampleEntityInput(unusualEntityId: number): IDataServiceRequest {
    const query = boundControllerQuery(unusualEntityId);
    return query.createDataServiceRequestForOperation('DeleteExampleEntity', true, '', 'false', {bypassCache: 'get', returnEntity: ''}, { });
    }

    
    export function deleteExampleEntityAsync(context: IContext, unusualEntityId: number): AsyncResult<boolean> {
    const request = createDeleteExampleEntityInput(unusualEntityId);
    return callActionOrExecute<boolean>(request, context.callerContext);
    }
  
    export function createGetAllExampleEntitiesInput(queryResultSettings: IQueryResultSettings): IDataServiceRequest {
    const query = boundControllerQuery().resultSettings(queryResultSettings);
    return query.createDataServiceRequestForOperation('GetAllExampleEntities', false, DataServiceEntities.ExampleEntityExtensionClass, 'true', {bypassCache: 'none', returnEntity: 'DataServiceEntities.IExampleEntity'}, { });
    }

    
    export function getAllExampleEntitiesAsync(context: IContext): AsyncResult<DataServiceEntities.IExampleEntity[]> {
    const request = createGetAllExampleEntitiesInput(
      context.queryResultSettings || {}, );
    return callActionOrExecute<DataServiceEntities.IExampleEntity[]>(request, context.callerContext);
    }
  