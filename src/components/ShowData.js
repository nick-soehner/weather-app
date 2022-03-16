import React from "react";
import IMAGES from "./icons/index.js";

const storage = localStorage;

export class ShowData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: Math.floor(this.props.data.current.temp),
            preference: "",
            icon: "",
            day: [],
        };

        this.setPreference = this.setPreference.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    componentDidMount() {
        this.setPreference();
        this.setIcon();
    }

    setPreference() {
        let currentTemp = this.state.currentTemp;
        if (currentTemp == storage.perfectTemp) {
            this.setState({
                preference:
                    "It is currently your perfect weather choice! Enjoy the beautiful day!",
            });
        } else if (currentTemp >= storage.burning) {
            this.setState({
                preference:
                    "It's going to be a hot one out today! Crank that AC!",
            });
        } else if (currentTemp >= storage.warm) {
            this.setState({
                preference:
                    "On the warmer side for you today! Whip out those shorts!",
            });
        } else if (currentTemp >= storage.cold) {
            this.setState({
                preference:
                    "On the colder side for you today! Maybe slip on that jacket!",
            });
        } else if (currentTemp >= storage.freezing) {
            this.setState({
                preference:
                    "It's going to be freezing today! Bundle up and stay warm!",
            });
        } else {
            this.setState({
                preference:
                    "It's going to be freezing today! Bundle up and stay warm!",
            });
        }

        /* console.log(this.state.currentTemp); */
    }

    setIcon() {
        const icon = this.props.data.current.weather[0].icon;
        this.setState({ icon: icon });
        console.log(this.state.icon)
    }

    render() {
        return (
            <div className="show-data">
                <div className="tempbox">
                    <h1 className="city-name">{this.props.city}</h1>
                    <p>{this.props.state}</p>
                    <h2 className="current-temp">{this.state.currentTemp}°F</h2>
                    <div className="weather-info">
                        <div className="info-box">
                            <img
                                src={IMAGES[`${this.state.icon}`]}
                                alt=""
                                className="current-weather-icon"
                            />
                            <p className="weather-desc">
                                {this.props.data.current.weather[0].description}
                            </p>
                        </div>
                        <div className="info-box">
                            <img
                                src={IMAGES["50d"]}
                                alt=""
                                className="current-weather-icon"
                            />
                            <p>
                                {Math.floor(this.props.data.current.wind_speed)}{" "}
                                mph
                            </p>
                        </div>
                    </div>
                </div>

                <p>{this.state.preference}</p>
            </div>
        );
    }
}
