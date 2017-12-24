import { Persons, GoogleUser } from '../UtilTypes'

export default interface IStoreState {
    readonly user: GoogleUser | boolean,
    readonly users?: Persons,
    readonly admins?: Persons
}