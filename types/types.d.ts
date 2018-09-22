import { DeepPartial } from 'redux'
import { IStoreState } from '@types'

declare global {
    interface Window {
        INITIAL_STATE: DeepPartial<IStoreState>
    }
}
