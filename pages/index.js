import React, { useReducer, useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Accordion from '../components/accordion'
import Modal from '../components/modal'
import './index.scss'

const Home = () => {
    const initState = {
        openModal: false,
        modalTitle: '',
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const toggleModal = title => {
        console.log(title)
        const prev = state
        setState({ ...state, openModal: !prev.openModal, modalTitle: title })
    }
    return (
        <div>
            <Head>
                <title>Topic Map</title>
            </Head>
            <div className="section-wrapper">
                <Nav />
            </div>
            <div className="section-wrapper">
                <Accordion
                    title={`universal topics`}
                    content={[
                        { name: 'cross sector topic 1', width: '100', onClick: toggleModal },
                        { name: 'cross sector topic 2', width: '100', onClick: toggleModal },
                        { name: 'cross sector topic 3', width: '100', onClick: toggleModal },
                    ]}
                />
            </div>
            <div className="section-wrapper">
                <Accordion
                    title={`sector specific topics`}
                    bgStyle={'dark'}
                    onClick={toggleModal}
                    content={[
                        [
                            { name: 'sector specific topic 1', width: '40' },
                            { name: 'sector specific topic 2', width: '40' },
                            { name: 'sector specific topic 3', width: '20' },
                        ],

                        [
                            { name: 'sector specific topic 4', width: '20' },
                            { name: 'sector specific topic 5', width: '20' },
                            { name: 'sector specific topic 6', width: '20' },
                            { name: 'sector specific topic 7', width: '40' },
                        ],

                        [
                            { name: 'sector specific topic 8', width: '20' },
                            { name: 'sector specific topic 9', width: '40' },
                            { name: 'sector specific topic 10', width: '20' },
                            { name: 'sector specific topic 11', width: '20' },
                        ],

                        [
                            { name: 'sector specific topic 12', width: '20' },
                            { name: 'sector specific topic 13', width: '20' },
                            { name: 'sector specific topic 14', width: '20' },
                            { name: 'sector specific topic 15', width: '20' },
                            { name: 'sector specific topic 16', width: '20' },
                        ],
                    ]}
                />
            </div>
            <div className="section-title">toolkits</div>
            <div className="section-wrapper">
                <Accordion
                    title={`toolkits`}
                    content={[
                        { name: 'toolkits 1', width: '12', onClick: toggleModal },
                        { name: 'toolkits 2', width: '12', onClick: toggleModal },
                        { name: 'toolkits 3', width: '12', onClick: toggleModal },
                    ]}
                />
            </div>
            <div className="section-title">kpds</div>
            <div className="section-wrapper">
                <Accordion
                    title={`key digital programs`}
                    content={[
                        { name: 'key digital program 1', width: '12', onClick: toggleModal },
                        { name: 'key digital program 2', width: '12', onClick: toggleModal },
                    ]}
                />
            </div>
            <Modal open={state.openModal} toggleModal={toggleModal} title={state.modalTitle} />
        </div>
    )
}

export default Home
