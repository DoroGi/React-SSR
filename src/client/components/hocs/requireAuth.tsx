import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HOC } from '../../../helpers/UtilTypes'

const autorized: HOC = ChildComponent => {
    class RequireAuth extends Component<{user: any},{}> {
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

    return connect(mapStateToProps)(RequireAuth)
}

export default autorized