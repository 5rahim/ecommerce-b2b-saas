import { gql } from '@apollo/client'
import {
   CreateStoreMutation, CreateStoreMutationVariables, GetStoreCountBySidQuery, GetStoreCountBySidQueryVariables, UpdateStoreAddressMutation,
   UpdateStoreAddressMutationVariables, UpdateStoreCategoryMutation, UpdateStoreCategoryMutationVariables, UpdateStoreNameMutation,
   UpdateStoreNameMutationVariables, UpdateStoreSettingsMutation, UpdateStoreSettingsMutationVariables,
} from '../../generated/graphql'
import { ServiceBuilder } from '../utils/ServiceBuilder'


export const StoreServices = {
    getStoreCountBySID: ServiceBuilder.createQuery<GetStoreCountBySidQueryVariables, GetStoreCountBySidQuery['stores_aggregate']>({
       table: 'stores',
        document: gql`
          query GetStoreCountBySID($sid: String!) {
            stores_aggregate(where: {sid: {_eq: $sid}}) {
              aggregate {
                count
              }
            }
          }
        `,
       type: 'aggregate',
    }),
    createStore: ServiceBuilder.createMutation<CreateStoreMutationVariables, CreateStoreMutation>({
       table: 'stores',
        document: gql`
          mutation CreateStore($store_id: uuid!, $store_subscription_id: uuid!, $user_id: uuid!, $name: String!, $sid: String!, $category: String!, $country: String!, $phone: String!, $address: String!, $theme: jsonb!, $trial_ends: timestamp!, $subscription_id: uuid!, $created_at: timestamp!, $status: String!, $price_id: String!, $quantity: numeric!) {
            insert_stores_one(object: {id: $store_id, store_subscription_id: $store_subscription_id, user_id: $user_id, name: $name, sid: $sid, category: $category, country: $country, phone: $phone, address: $address, theme: $theme, trial_ends: $trial_ends}) {
              id
              sid
            }
            insert_store_subscriptions_one(object: {id: $store_subscription_id, store_id: $store_id, subscription_id: $subscription_id, created_at: $created_at, status: $status, price_id: $price_id, quantity: $quantity}) {
              id
            }
          }
        `,
    }),
    updateStoreName: ServiceBuilder.createMutation<UpdateStoreNameMutationVariables, UpdateStoreNameMutation>({
       table: 'stores',
        document: gql`
          mutation UpdateStoreName($id: uuid!, $name: String!) {
            update_stores_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
              id
            }
          }
        `,
    }),
    updateStoreCategory: ServiceBuilder.createMutation<UpdateStoreCategoryMutationVariables, UpdateStoreCategoryMutation>({
       table: 'stores',
        document: gql`
          mutation UpdateStoreCategory($id: uuid!, $category: String!) {
            update_stores_by_pk(pk_columns: {id: $id}, _set: {category: $category}) {
              id
            }
          }
        `,
    }),
    updateStoreAddress: ServiceBuilder.createMutation<UpdateStoreAddressMutationVariables, UpdateStoreAddressMutation>({
       table: 'stores',
        document: gql`
          mutation UpdateStoreAddress($id: uuid!, $address: String!) {
            update_stores_by_pk(pk_columns: {id: $id}, _set: {address: $address}) {
              id
            }
          }
        `,
    }),
    updateStoreSettings: ServiceBuilder.createMutation<UpdateStoreSettingsMutationVariables, UpdateStoreSettingsMutation>({
       table: 'stores',
        document: gql`
          mutation UpdateStoreSettings($id: uuid!, $settings: jsonb!) {
            update_stores_by_pk(pk_columns: {id: $id}, _set: {settings: $settings}) {
              id
            }
          }
        `,
    }),
}
