import { AxiosInstance, AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { RouteConfig } from 'react-router-config'
import IStoreState from './store/IStoreState'

// Server
export { Request } from 'express'
export { AxiosResponse } from 'axios'

// React
export type HOC = (InnerComponent: React.ComponentClass<any>) => React.ComponentClass<any>
export type Context = { notFound?: boolean, url?: string }

// React Router
export interface DataRoute extends RouteConfig { readonly loadData?: any, readonly routes?: Array<DataRoute> }

// Redux
export { Store, Dispatch, Reducer } from 'redux'
export { default as IStoreState } from './store/IStoreState'
export type IStoreProps = IStoreState
export type Action = { readonly type: string, readonly payload: AxiosResponse }
export type ActionCreator = () => (dispatch: Dispatch<Action>, getState: () => IStoreState, api: AxiosInstance) => Promise<void>

// Custom types
export type GoogleUser = { readonly _id: string, readonly googleId: string, readonly v: number } | null
export type Persons = Array<{ readonly id: string, readonly name: string }>