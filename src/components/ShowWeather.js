import React from "react";
import { ShowData } from "./ShowData";

const storage = localStorage;
const APIKEY = process.env.REACT_APP_API_KEY;

export class ShowWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: false,
            city: "",
            state: "",
            lat: "",
            long: "",
            enterLocation: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.enterLocation = this.enterLocation.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.cityEntry = this.cityEntry.bind(this);
        this.getCity = this.getCity.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getLocation();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.enterLocation();
        console.log(this.state.city);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ long: position.coords.longitude });
                    this.setState({ lat: position.coords.latitude });
                    this.getData();
                    this.getCity();
                },
                (error) => {
                    if (error.code == error.PERMISSION_DENIED) {
                        console.log("blocked geolocation");
                        this.setState({
                            enterLocation: !this.state.enterLocation,
                        });
                    }
                }
            );
        }
    }

    enterLocation() {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&limit=5&appid=${APIKEY}`;
        fetch(url)
            .then((result) => result.json())
            .then((info) => {
                /* console.log(info); */
                this.setState({ city: info[0].name });
                this.setState({ state: info[0].state });

                this.setState({ lat: info[0].lat });
                this.setState({ long: info[0].lon });

                this.setState({ enterLocation: !this.state.enterLocation });
                this.getData();
            });
    }

    getData() {
        const dataUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&exclude=minutely,alerts&units=imperial&appid=${APIKEY}`;
        fetch(dataUrl)
            .then((result) => result.json())
            .then((info) => {
                /* console.log(info); */
                this.setState({ data: info });
            });
    }

    getCity() {
        const cityUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${this.state.lat}&lon=${this.state.long}&limit=1&appid=${APIKEY}`;
        fetch(cityUrl)
            .then((result) => result.json())
            .then((info) => {
                /* console.log(info); */
                this.setState({ city: info[0].name });
                this.setState({ state: info[0].state });
            });
    }

    cityEntry(e) {
        const city = e.target.value;
        this.setState({ city });
    }

    render() {
        return (
            <div className="show-weather">
                {/* only shows when geolocation is blocked */}
                {this.state.enterLocation && (
                    <div>
                        <form className="enter-city">
                            <input
                                type="text"
                                value={this.state.city}
                                onChange={this.cityEntry}
                                placeholder="Enter City"
                            />
                            <button
                                className="enter-city-submit-btn"
                                onClick={this.handleSubmit}
                            >
                                Submit City
                            </button>
                            <p className="hint">
                                For more precise weather enable location
                                services.
                            </p>
                        </form>
                    </div>
                )}

                {/* if data is loaded will ShowData if not will show loading*/}
                {this.state.data ? (
                    <ShowData
                        city={this.state.city}
                        data={this.state.data}
                        state={this.state.state}
                    />
                ) : (
                    <span>Loading...</span>
                )}

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
