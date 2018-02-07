import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IStoreProps } from '@types'

const s = require('./style.css')

const Header: SFC<IStoreProps> = ({ user }) => {
    const authButton: JSX.Element = user ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )

    return (
        <nav>
            <div className={s.navWrapper}>
                <Link to="/" className={s.brandLogo}>
                Vortigaunt
                </Link>
                <ul className={s.right}>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admins">Admins</Link>
                    </li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ user }: IStoreProps) => { return { user } }

export default connect(mapStateToProps)(Header)