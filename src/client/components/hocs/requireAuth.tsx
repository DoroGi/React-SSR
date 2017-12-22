import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HOC } from '../../../helpers/UtilTypes'
import IStoreProps from '../../../helpers/store/IStoreState'

const autorized: HOC = ChildComponent => {
    class RequireAuth extends Component<IStoreProps,{}> {
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

    const mapStateToProps = ({ user }) => { return { user } }

    return connect(mapStateToProps)(RequireAuth)
}

export default autorized