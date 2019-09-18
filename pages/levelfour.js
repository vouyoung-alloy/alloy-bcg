import React, { useReducer, useEffect } from 'react'
import Head from 'next/head'
import Account from '../components/account'
import Combobox from '../components/combobox'
import Slideout from '../components/slideout'
import './levelfour.scss'

const SEntry = () => {
    const initState = {
        modes: [
            { name: 'explore', links: ['PA & Topics', 'Primers', 'LABs', 'BCG Publications', 'Training'] },
            {
                name: 'find',
                links: ['Cases', 'Proposals', 'Credentials', 'Research Materials', 'Proprietary Methods & Tools'],
            },
            {
                name: 'assist',
                links: ['People Finder', 'BCG Experts / CCO', 'Expert Networks', 'Communities', 'KT/DRS Assistance'],
            },
        ],
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    return (
        <div className="level-four">
            <Head>
                <title>Search Entry</title>
            </Head>
            <img src="../static/L4.png" />
        </div>
    )
}

export default SEntry
