import React from "react";
import IMAGES from "./icons/index.js";
import unknown from "./icons/01d.png";

const storage = localStorage;

export class ShowData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: Math.floor(this.props.data.current.temp),
            preference: "",
            icon: "",
        };

        this.setPreference = this.setPreference.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    componentDidMount() {
        /* console.log(this.props.data.current.temp); */
        this.setPreference();
        this.setIcon();
    }

    setPreference() {
        let currentTemp = this.state.currentTemp;
        /* switch (currentTemp) {
            case (currentTemp == storage.perfectTemp):
                this.setState({ preference: "perfect" });
                break;
            case currentTemp >= storage.burning:
                this.setState({ preference: "burning" });
                break;
            case currentTemp >= storage.warm:
                this.setState({ preference: "warm" });
                break;
            case currentTemp >= storage.cold:
                this.setState({ preference: "cold" });
                break;
            case currentTemp >= storage.freezing:
                this.setState({ preference: "freezing" });
                break;
            default:
                this.setState({ preference: "boobs" });
                break;
        } */

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

        console.log(this.state.currentTemp);
    }

    setIcon() {
        const icon = this.props.data.current.weather[0].icon;
        this.setState({ icon: IMAGES[`${icon}`] });
    }

    render() {
        return (
            <div>
                <h1 className="city-name">{this.props.city}</h1>
                <p>{this.props.state}</p>
                <h2 className="current-temp">{this.state.currentTemp}°F</h2>
                <p>{this.state.preference}</p>
                <div className="weather-icon">
                    <img src={this.state.icon} alt="" />
                </div>
            </div>
        );
    }
}
