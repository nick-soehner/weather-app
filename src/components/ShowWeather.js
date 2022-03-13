import React from "react";

const storage = localStorage;
const APIKEY = process.env.REACT_APP_API_KEY;

export class ShowWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "false",
        };

        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${APIKEY}`;
                fetch(apiUrl)
                    .then((result) => result.json())
                    .then((info) => {
                        /* console.log(info); */
                        this.setState({ data: info });
                    });
            });
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.data.lat}</p>
                <p>{this.state.data.lon}</p>
                <button
                    className="update-btn"
                    onClick={this.props.clearStorage}
                >
                    Update Preferences
                </button>
            </div>
        );
    }
}
