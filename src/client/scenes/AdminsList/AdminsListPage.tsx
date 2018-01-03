import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../../services/ListAPI/listActions'
import requireAuth from '../../components/hocs/requireAuth'
import { IStoreProps, IStoreState, Persons, DataRoute, ActionCreator, Store } from '../../../helpers/allTypes'

interface IProps extends IStoreProps {
    readonly fetchAdmins: ActionCreator,
    readonly admins: Persons
}

class AdminsListPage extends Component<IProps> {
    componentDidMount() {
        this.props.fetchAdmins()
    }

    shouldComponentUpdate(nextProps: IProps) {
        return this.props.admins !== nextProps.admins
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

const mapStateToProps = ({ admins }: IStoreProps) => { return { admins } }

export default {
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
    loadData: ({ dispatch }: Store<IStoreState>) => dispatch(fetchAdmins())
} as DataRoute