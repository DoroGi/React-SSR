import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { HOC, IStoreProps } from '@types'

const autorized: HOC = ChildComponent => {
    class RequireAuth extends PureComponent<IStoreProps> {
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

    const mapStateToProps = ({ user }: IStoreProps) => { return { user } }

    return connect(mapStateToProps)(RequireAuth)
}

export default autorized