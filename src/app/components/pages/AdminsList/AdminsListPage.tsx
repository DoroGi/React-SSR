import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { listOperations } from '@state/ducks/list'
import requireAuth from '../../hocs/requireAuth'
import { IStoreProps, Persons, ActionCreator, DataRoute } from '@types'

interface IProps extends IStoreProps {
    readonly fetchAdmins: ActionCreator,
    readonly admins: Persons
}

class AdminsListPage extends PureComponent<IProps> {
    componentDidMount() {
        this.props.fetchAdmins()
    }
    
    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({ admins }: IStoreProps) => ({ admins })

export default {
    component: connect(mapStateToProps, { fetchAdmins: listOperations.fetchAdmins } )(requireAuth(AdminsListPage)),
    loadData: listOperations.fetchAdmins
} as DataRoute