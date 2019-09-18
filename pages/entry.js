import React, { useReducer, useEffect } from 'react'
import Head from 'next/head'
import Account from '../components/account'
import Combobox from '../components/combobox'
import Slideout from '../components/slideout'
import './entry.scss'

const SEntry = () => {
    const initState = {
        modes: [
            { name: 'explore', links: ['PA & Topics', 'Research Center', 'LAB', 'BCG Publications', 'BCG Products'] },
            {
                name: 'find',
                links: [
                    'Case Materials',
                    'Selling Materials',
                    'Credentials',
                    'Research Materials',
                    'Proprietary Methods & Tools',
                    'General Practice Materials',
                ],
            },
            {
                name: 'connect',
                links: ['People Finder', 'Expert Networks', 'Communities', 'KT/DRS Assistance', 'Analytics'],
            },
        ],
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    return (
        <div className="search-entry">
            <Head>
                <title>Search Entry</title>
            </Head>
            <header>
                NextGen Knowledge Navigator
                <Account />
            </header>

            <section>
                <Combobox />
                <div className="explore">
                    {state.modes.map(m => (
                        <div className="columns" key={m.name}>
                            <h3>{m.name}</h3>
                            <ul>
                                {m.links.map(l => (
                                    <li key={l}>
                                        <div className="dot" />
                                        {l}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <Slideout />
        </div>
    )
}

export default SEntry
