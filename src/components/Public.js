import {Link} from 'react-router-dom';
import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1><span className="nowrap">TechNotes</span></h1>
            </header>
            <main className="public__main">
                <p>This app is made using the MERN stack</p>
                <br />
                <p>Use id: test</p>
                <p>Use pass: test</p>
                <br />
                <p>Made by Vedant Kannawar</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public
