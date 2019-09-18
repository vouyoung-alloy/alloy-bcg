import React, { useReducer, useEffect } from 'react'
import { MdArrowForward } from 'react-icons/md'
import './account.scss'

const Account = () => {
    const initState = {
        open: false,
        links: [{ name: 'my travel' }, { name: 'my career' }, { name: 'my office' }, { name: 'my time & expense' }],
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const toggle = () => {
        setState({...state, open: !state.open})
    }

    return (
        <div className="my-account" onMouseEnter={toggle} onMouseLeave={toggle}>
            <div className="profile" ></div>

            {state.open && <div className="account-links">
                <div className="arrow-up"></div>
                <ul>
                    {state.links.map(({ name }) => (
                        <li className="link" key={name}>
                            {name}{' '}
                            <span className="icon">
                                <MdArrowForward />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Account
