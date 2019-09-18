/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react'
import Head from 'next/head'
import ImageMapper from 'react-image-mapper'
import Dropdown from '../components/dropdown'
import './levels.scss'

const SEntry = () => {
    const initState = {
        currentImage: 0,
        images: [
            '../static/L1.png',
            '../static/L4.png',
            '../static/L1-content.png',
            '../static/L4-content-overview.png',
        ],
        select: {
            label: 'pages',
            name: 'pages',
            type: 'dropdown',
            options: ['L1', 'L4', 'L1 Content', 'L4 Content'],
            layout: '50',
            placeholder: 'L1',
        },
        URL: '../static/L4-content-overview.png',
        WIDTH: null,
    }
    const [state, setState] = useReducer((state, newState) => {
        return { ...state, ...newState }
    }, initState)

    const setOptions = val => {
        setState({ ...state, currentImage: val })
    }

    const MAP = {
        name: 'my-map',
        areas: [
            {
                name: 'overview',
                shape: 'rect',
                coords: [541, 198, 659, 170],
            },
            {
                name: 'recent',
                shape: 'rect',
                coords: [707, 192, 922, 167],
            },
        ],
    }

    const onImageClick = e => {
        if (e.name === 'overview') {
            setState({ ...state, URL: '../static/L4-content-overview.png' })
        } else {
            setState({ ...state, URL: '../static/L4-content.png' })
        }
    }

    const updateDimensions = () => {
        setState({ WIDTH: window.innerWidth })
    }

    useEffect(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
    }, [])

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

            {state.currentImage === 3 ? (
                <ImageMapper
                    className="image-map"
                    src={state.URL}
                    map={MAP}
                    imgWidth={1440}
                    width={state.WIDTH}
                    onClick={e => onImageClick(e)}
                />
            ) : (
                <img src={state.images[state.currentImage]} />
            )}
        </div>
    )
}

export default SEntry
