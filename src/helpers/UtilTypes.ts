import { RouteConfig } from "react-router-config";

export type HOC = (InnerComponent: React.ComponentClass<any>) => React.ComponentClass<any>

export type Persons = Array<{ id: string, name: string }>
export type Context = any
export interface DataRoute extends RouteConfig { loadData?: any, routes?: Array<DataRoute> }