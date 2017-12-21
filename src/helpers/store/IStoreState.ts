import { Persons } from '../UtilTypes'

export default interface IStoreState {
    readonly user: any,
    readonly users?: Persons,
    readonly admins?: Persons
}