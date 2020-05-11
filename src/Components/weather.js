import React, { Component } from "react";
import Form from "./Form";
import Information from "./Information";



class Weather extends Component {

    state = {
        city: '',
        country: '',
        tempreature: '',
        temp_min: '',
        temp_max: '',
        main: '',
        humidity: '',
        description: '',
        error: ''
    }

    //Using Api to pass information
    getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value;
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=e36ed364400282e43250b6c4c0274d44`)
        const data = await api.json();

        // turnning the temperature degree from fhernhait to celisius in Integer number
        const number = Math.round(data.main.temp - 273);
        const min_number = Math.round(data.main.temp_min - 273);
        const max_number = Math.round(data.main.temp_max - 273);

        //getting all data and to know the target of each state
        console.log(data)

        if (city) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                tempreature: number,
                temp_min: min_number,
                temp_max: max_number,
                humidity: data.main.humidity,
                main: data.weather[0].main,
                description: data.weather[0].description,
                error: false
            })
        } else {
            this.setState({
                city: '',
                country: '',
                tempreature: '',
                temp_min: '',
                temp_max: '',
                main: '',
                humidity: '',
                description: '',
                error: 'Please Enter City Name'
            })
        }

    }
    render() {
        return (
            <section id="weather">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#weather">Weather</a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <h2>just type the city name</h2>
                    <h3>you must sppelling correctly</h3>
                    <Form getWeather={this.getWeather} />
                    <Information
                        tempreature={this.state.tempreature}
                        city={this.state.city}
                        country={this.state.country}
                        temp_min={this.state.temp_min}
                        temp_max={this.state.temp_max}
                        main={this.state.main}
                        description={this.state.description}
                        error={this.state.error}
                    />
                </main>
            </section>
        )
    }
}

export default Weather;
