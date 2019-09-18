/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useReducer } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import './slideout.scss'

const Slideout = () => {
    const initState = {
        open: null,
        newTabs: [
            {
                name: 'topics you follow',
                sections: [
                    {
                        title: 'new content',
                        items: [
                            { type: 'Topic', name: 'Agile@Scale', content: 'Lean Playbook I.PPTX' },
                            { type: 'Topic', name: 'Agile@Scale', content: 'Lean Playbook II.PPTX' },
                        ],
                    },
                    {
                        title: 'new discussions',
                        items: [
                            {
                                type: 'Topic',
                                name: 'Agile@Scale',
                                content: 'What are the best frameworks for sizing and prioritizing?',
                            },
                            {
                                type: 'Topic',
                                name: 'Agile@Scale',
                                content: 'What are the best frameworks for sizing and prioritizing?',
                            },
                        ],
                    },
                    {
                        title: 'new questions',
                        items: [
                            {
                                type: 'PA',
                                name: 'TMT',
                                content: 'Does anyone have a vignette for Ad Inventory Optimization in the EU?',
                            },
                            {
                                type: 'PA',
                                name: 'TMT',
                                content: 'Does anyone have a vignette for Ad Inventory Optimization in the EU?',
                            },
                        ],
                    },
                ],
            },
            { name: 'recent activity', sections: [] },
        ],
        tabs: [
            {
                name: 'topics you follow',
                items: [
                    {
                        type: 'Topic',
                        name: 'Agile@Scale',
                        content: { type: 'New Content', title: 'Lean Playbook II.PPTX' },
                    },
                    {
                        type: 'Topic',
                        name: 'Agile@Scale',
                        content: {
                            type: 'New Discussion',
                            title: 'What are the best frameworks for sizing and prioritizing',
                        },
                    },

                    {
                        type: 'PA',
                        name: 'TMT',
                        content: {
                            type: 'New Question',
                            title: 'Does anyone have a vignette for Ad Inventory Optimization in the EU?',
                        },
                    },

                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                    {
                        type: 'PA',
                        name: 'Lorem ipsum',
                        content: {
                            type: 'New Question',
                            title: 'Cras bibendum malesuada tristique. Praesent dignissim ligula id risus bibendum?',
                        },
                    },
                ],
            },
            { name: 'recent activity', items: [] },
        ],
        //need to update $elements in slideout.scss
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const curTab = useRef(null)

    const handleClick = e => {
        if (curTab && curTab.current.contains(e.target)) return
        setState({ ...state, open: null })
        document.removeEventListener('mousedown', handleClick, false)
    }

    useEffect(() => {}, [])

    return (
        <div className="slideout-wrapper" ref={curTab}>
            {state.newTabs.map((t, i) => (
                <div
                    className={`tabs tab-${i} ${state.open === i ? 'open' : ''}`}
                    key={`tab-${i}`}
                    onClick={() => {
                        if (state.newTabs[i].sections.length > 0) {
                            setState({ ...state, open: i })
                            document.addEventListener('mousedown', handleClick, false)
                        }
                    }}
                >
                    <h3 className="tab-title">{t.name}</h3>

                    {t.sections.map((s, j) => {
                        return (
                            <div key={`tab-${i}-${j}`}>
                                <h4>{s.title}</h4>
                                <ul>
                                    {s.items.map((item, w) => {
                                        return (
                                            <li key={`tab-${i}-${j}-${w}`}>
                                                <div className="topic">
                                                    {item.type}:{item.name}
                                                </div>
                                                <div className="content">{item.content}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

export default Slideout
