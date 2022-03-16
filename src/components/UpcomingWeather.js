import React from "react";
import IMAGES from "./icons/index.js";

export class UpcomingWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day: [],
            icons: [],
        };

        this.getDate = this.getDate.bind(this);
        this.getIcons = this.getIcons.bind(this);
    }

    componentDidMount() {
        this.getDate(new Date(), 5);
        this.getIcons();
    }

    getDate() {
        function GetDates(startDate, daysToAdd) {
            let aryDates = [];

            for (let i = 0; i <= daysToAdd; i++) {
                let currentDate = new Date();
                currentDate.setDate(startDate.getDate() + i);
                aryDates.push(DayAsString(currentDate.getDay()));
            }

            return aryDates;
        }

        function DayAsString(dayIndex) {
            let weekdays = new Array(7);
            weekdays[0] = "Sunday";
            weekdays[1] = "Monday";
            weekdays[2] = "Tuesday";
            weekdays[3] = "Wednesday";
            weekdays[4] = "Thursday";
            weekdays[5] = "Friday";
            weekdays[6] = "Saturday";

            return weekdays[dayIndex];
        }

        let startDate = new Date();
        let aryDates = GetDates(startDate, 7);
        /* console.log(aryDates); */

        this.setState({ day: aryDates });
    }

    getIcons() {
        let icons = [];
        icons.push(this.props.data.daily[0].weather[0].icon);
        icons.push(this.props.data.daily[1].weather[0].icon);
        icons.push(this.props.data.daily[2].weather[0].icon);
        icons.push(this.props.data.daily[3].weather[0].icon);
        icons.push(this.props.data.daily[4].weather[0].icon);
        icons.push(this.props.data.daily[5].weather[0].icon);
        this.setState({ icons: icons });
        /* console.log(icons); */
    }

    render() {
        return (
            <div className="upcoming-weather">
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[0]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[0]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[0].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[0].temp.min)}°
                        </p>
                    </div>
                </div>
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[1]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[1]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[1].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[1].temp.min)}°
                        </p>
                    </div>
                </div>
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[2]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[2]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[2].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[2].temp.min)}°
                        </p>
                    </div>
                </div>
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[3]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[3]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[3].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[3].temp.min)}°
                        </p>
                    </div>
                </div>
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[4]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[4]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[4].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[4].temp.min)}°
                        </p>
                    </div>
                </div>
                <div className="forecast-container">
                    <p className="upcoming-weather-text">{this.state.day[5]}</p>
                    <img
                        src={IMAGES[`${this.state.icons[5]}`]}
                        alt="icon"
                        className="forecast-icon"
                    />
                    <div className="low-high">
                        <p className="forecast-high">
                            {Math.floor(this.props.data.daily[5].temp.max)}°
                        </p>
                        <p className="forecast-low">
                            {Math.floor(this.props.data.daily[5].temp.min)}°
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
