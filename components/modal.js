import React, { useEffect, useState } from 'react'
import { IoMdClose, IoIosArrowForward } from 'react-icons/io'
import { DiTerminal } from 'react-icons/di'
import './modal.scss'
const Modal = ({ title, bgStyle, content, open, toggleModal }) => {
    return (
        <>
            {open && (
                <>
                    <div className="modal-screen"></div>
                    <div className="modal-wrapper">
                        <span className="modal-close" onClick={toggleModal}>
                            <IoMdClose />
                        </span>
                        <div className="modal-header">
                            <span className="header-icon">
                                <DiTerminal />
                            </span>
                            <div className="header-text">
                                Drill down on <br /> {title}
                            </div>
                        </div>
                        <div className="modal-content">
                            <div className="half">
                                <h2>overview</h2>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </div>
                                <span className="learn-more">
                                    learn more{' '}
                                    <span className="icon">
                                        <IoIosArrowForward />
                                    </span>
                                </span>
                            </div>

                            <div className="half">
                                <div className="half-v">
                                    <h3>materials</h3>
                                    <div className="gallery">
                                        <div className="material" />
                                        <div className="material" />
                                        <div className="material" />
                                        <div className="material" />
                                    </div>
                                </div>
                                <div className="half-v">
                                    <h3>experts</h3>
                                    <div className="gallery">
                                        <div className="expert" />
                                        <div className="expert" />
                                        <div className="expert" />
                                        <div className="expert" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Modal
