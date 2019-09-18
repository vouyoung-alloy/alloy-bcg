import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import './accordion.scss'
const Accordion = ({ title, bgStyle, content, onClick }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-toggle ${bgStyle}`}
                onClick={e => {
                    setOpen(prevState => !prevState)
                }}
            >
                {title}
                <span className="toggle-icon">{open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
            </div>
            <ul className={`accordion-content ${open ? 'active' : ''}`}>
                {content
                    ? content.map((c, i) => {
                          if (!c.length)
                              return (
                                  <li
                                      key={`${c.name}-content-${i}`}
                                      className={`size-${c.width}`}
                                      onClick={() => c.onClick(c.name)}
                                  >
                                      {c.name}
                                  </li>
                              )
                          else
                              return (
                                  <div className="row" key={`${c.name}-content-${i}`}>
                                      {c.map((s, j) => {
                                          return (
                                              <li
                                                  key={`${s.name}-content-${i}-${j}`}
                                                  className={`size-${s.width}`}
                                                  onClick={() => onClick(s.name)}
                                              >
                                                  {s.name}
                                              </li>
                                          )
                                      })}
                                  </div>
                              )
                      })
                    : 'content'}
            </ul>
        </div>
    )
}

export default Accordion
