import { Persons, GoogleUser } from '../allTypes'

export default interface IStoreState {
    readonly user: GoogleUser | boolean,
    readonly users?: Persons,
    readonly admins?: Persons
}