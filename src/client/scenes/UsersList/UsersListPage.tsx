import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../services/ListAPI/listActions'
import { Persons, IStoreProps, DataRoute, ActionCreator } from '../../../helpers/UtilTypes'
import { Helmet } from 'react-helmet'
import { Dispatch } from 'redux';

interface IProps extends IStoreProps {
    readonly fetchUsers: ActionCreator,
    readonly users: Persons
}

class UsersList extends Component<IProps,{}> {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => { return { users } }

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData: ({ dispatch }) => dispatch(fetchUsers())    
} as DataRoute