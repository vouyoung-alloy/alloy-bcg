import React from 'react'
import Link from 'next/link'
import './nav.scss'

const links = [
    { href: '#', label: 'sector 1' },
    { href: '#', label: 'sector 2' },
    { href: '#', label: 'sector 3' },
    { href: '#', label: 'sector 4' },
    { href: '#', label: 'sector 5' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            {links.map(({ key, href, label }) => (
                <li key={key}>{label}</li>
            ))}
        </ul>
    </nav>
)

export default Nav
