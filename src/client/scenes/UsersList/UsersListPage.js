import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../services/ListAPI/listActions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }


    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

// This things fetches data BEFORE rendering. If I use connect like always, I'd use the provider! Wrong!
function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};