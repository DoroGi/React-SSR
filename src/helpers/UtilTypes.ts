import { Dispatch } from 'redux'
import { RouteConfig } from "react-router-config"
import IStoreState from './store/IStoreState' 
import { AxiosInstance, AxiosResponse } from 'axios';

//I didn't find a generic type for these, so I created my own
export type HOC = (InnerComponent: React.ComponentClass<any>) => React.ComponentClass<any>
export type ActionCreator = () => (dispatch: Dispatch<IStoreState>, getState?: () => IStoreState, api?: AxiosInstance) => Promise<void>
export type Action = { type: string, payload: AxiosResponse }
export type Reducer = (state: IStoreState, action: Action) => any
export type Context = { notFound?: boolean, url?: string }

//To be used when props just accepts state
export type IStoreProps = IStoreState

export type Persons = Array<{ id: string, name: string }>
export interface DataRoute extends RouteConfig { loadData?: any, routes?: Array<DataRoute> }