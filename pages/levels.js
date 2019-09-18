import React, { useReducer, useEffect } from 'react'
import Head from 'next/head'
import Dropdown from '../components/dropdown'
import './levels.scss'

const SEntry = () => {
    const initState = {
        currentImage: 0,
        images: ['../static/L1.png', '../static/L4.png', '../static/L1-content.png', '../static/L4-content.png'],
        select: {
            label: 'pages',
            name: 'pages',
            type: 'dropdown',
            options: ['L1', 'L4', 'L1 Content', 'L4 Content'],
            layout: '50',
            placeholder: 'L1',
        },
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const setOptions = val => {
        setState({ currentImage: val })
    }

    return (
        <div className="level-four">
            <Head>
                <title>Topic Pages</title>
            </Head>
            <header>
                <div className="leftside">
                    <Dropdown {...state.select} setOptions={setOptions} />
                </div>
                <div className="rightside"></div>
            </header>

            <img src={state.images[state.currentImage]} />
        </div>
    )
}

export default SEntry
