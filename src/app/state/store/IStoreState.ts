import { Persons, GoogleUser } from '@types'

export default interface IStoreState {
    readonly user: GoogleUser | boolean,
    readonly users?: Persons,
    readonly admins?: Persons
}