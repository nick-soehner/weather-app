import React from "react";

const storage = localStorage;

/* const clearStorage = () => {
    storage.clear();
    console.log(storage.length);
}; */

export class ShowWeather extends React.Component {
    render() {
        return (
            <div>
                <h1>{storage.cold}</h1>
                <button onClick={this.props.handleChange}>
                    Update Preferences
                </button>
            </div>
        );
    }
}
