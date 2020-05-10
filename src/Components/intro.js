import React, { Component } from 'react'

class Intro extends Component {
    render() {
        return (
            <section id='home'>
                  <a className="logo" href="#home">logo</a>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#weather">Weather</a></li>
                </ul>
            </nav>
            <h1>Hello It is <br/> Weather App</h1>
            </section>
        )
    }
}
export default Intro