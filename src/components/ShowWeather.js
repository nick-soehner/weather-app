import React from "react";

const storage = localStorage;
const APIKEY = process.env.REACT_APP_API_KEY;

export class ShowWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "false",
            city: "",
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
        let long;
        let lat;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    long = position.coords.longitude;
                    lat = position.coords.latitude;
                    const dataUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${APIKEY}`;
                    fetch(dataUrl)
                        .then((result) => result.json())
                        .then((info) => {
                            /* console.log(info); */
                            this.setState({ data: info });
                            this.setState({ lat: lat });
                            this.setState({ long: long });
                            this.getCity();
                        });
                },
                (error) => {
                    if (error.code == error.PERMISSION_DENIED) {
                        console.log("blocked geolocation");
                        this.setState({
                            enterLocation: !this.state.enterLocation,
                        });
                        console.log(this.state.enterLocation);
                    }
                }
            );
        }
    }

    getData() {
        const dataUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&units=imperial&appid=${APIKEY}`;
        fetch(dataUrl)
            .then((result) => result.json())
            .then((info) => {
                /* console.log(info); */
                this.setState({ data: info });
            });
    }

    enterLocation() {
        let long;
        let lat;

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&limit=5&appid=${APIKEY}`;
        fetch(url)
            .then((result) => result.json())
            .then((info) => {
                console.log(info);
                this.setState({ city: info[0].name });
                long = info[0].lon;
                lat = info[0].lat;

                this.setState({ lat: lat });
                this.setState({ long: long });

                this.setState({ enterLocation: !this.state.enterLocation });
                this.getData();
            });
    }

    getCity() {
        const cityUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${this.state.lat}&lon=${this.state.long}&limit=1&appid=${APIKEY}`;
        fetch(cityUrl)
            .then((result) => result.json())
            .then((info) => {
                this.setState({ city: info[0].name });
            });
    }

    cityEntry(e) {
        const city = e.target.value;
        this.setState({ city });
    }

    render() {
        return (
            <div>
                <p>{this.state.lat}</p>
                <p>{this.state.long}</p>
                {this.state.enterLocation && (
                    <form>
                        <input
                            type="text"
                            value={this.state.city}
                            onChange={this.cityEntry}
                            placeholder="City"
                        />
                        <button
                            className="submit-btn"
                            onClick={this.handleSubmit}
                        >
                            Submit City
                        </button>
                    </form>
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
