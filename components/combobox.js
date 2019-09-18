import React, { useReducer, useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
import Dropdown from './dropdown'
import './combobox.scss'

const Combobox = () => {
    const initState = {
        open: false,
        links: [{ name: 'my travel' }, { name: 'my career' }, { name: 'my office' }, { name: 'my time & expense' }],
        select: {
            label: 'Search Category',
            name: 'search-category',
            type: 'dropdown',
            options: ['Area 1', 'Area 2', 'Area 3', 'Everything'],
            layout: '50',
            placeholder: 'Everything',
        },
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const toggle = () => {
        setState({ ...state, open: !state.open })
    }

    return (
        <div className="combo-box">
            <span className="input_wrapper">
                <MdSearch />
                <input type="text" placeholder="Search" />
            </span>
            <Dropdown {...state.select} />
        </div>
    )
}

export default Combobox
