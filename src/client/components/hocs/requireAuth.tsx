import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

 function autorized (ChildComponent: React.ComponentClass<any> | React.StatelessComponent<any>): React.ComponentClass<any> {
    class RequireAuth extends Component<any> {
        render() {
            switch (this.props.user) {
                case false:
                    return <Redirect to="/" />
                case null:
                    return <div>Loading...</div>
                default:
                    return <ChildComponent {...this.props} />
            }
        }
    }

    function mapStateToProps({ user }) {
        return { user }
    }

    return connect(mapStateToProps)(RequireAuth);
}

export default autorized