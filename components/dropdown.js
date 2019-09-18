/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useReducer } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import './dropdown.scss'

const Dropdown = ({ label, name, options, placeholder, layout, setOptions }) => {
    const initState = {
        displayText: placeholder,
        selected: null,
        open: false,
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const curDrop = useRef(null)

    const toggleList = () => {
        if (options.length > 0) {
            if (!state.open) document.addEventListener('mousedown', handleClick, false)
            setState({ ...state, open: !state.open })
        }
    }

    const handleClick = e => {
        if (curDrop.current.contains(e.target)) return
        setState({ open: false })
        document.removeEventListener('mousedown', handleClick, false)
    }

    const selectItem = val => {
        setState({ ...state, displayText: val, selected: val, open: false })
    }

    return (
        <div className="dropdown-wrapper" ref={curDrop}>
            <div className="dropdown-button">
                <div className="dropdown-button-text" onClick={toggleList}>
                    {state.displayText}
                    {state.open ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
            </div>
            {state.open && (
                <ul className="dropdown-list">
                    {options.map((opt, i) => {
                        return (
                            <li
                                className="dropdown-list-item"
                                key={`${opt}-${i}`}
                                onClick={() => {
                                    selectItem(opt)
                                    setOptions(i)
                                }}
                            >
                                {opt}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Dropdown
