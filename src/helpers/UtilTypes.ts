import { Dispatch } from 'redux'
import { RouteConfig } from "react-router-config"
import IStoreState from './store/IStoreState' 
import { AxiosInstance, AxiosResponse } from 'axios';

//I didn't find a generic type for these, so I created my own
export type HOC = (InnerComponent: React.ComponentClass<any>) => React.ComponentClass<any>
export type ActionCreator = () => (dispatch: Dispatch<IStoreState>, getState?: () => IStoreState, api?: AxiosInstance) => Promise<void>
export type Action = { readonly type: string, readonly payload: AxiosResponse }
export type Reducer<T> = ( state: T, action: Action) => T
export type Context = { notFound?: boolean, url?: string }

//To be used when props just accepts state
export type IStoreProps = IStoreState

export type GoogleUser = { readonly _id: string, readonly googleId: string, readonly v: number }
export type Persons = Array<{ readonly id: string, readonly name: string }>
export interface DataRoute extends RouteConfig { readonly loadData?: any, readonly routes?: Array<DataRoute> }