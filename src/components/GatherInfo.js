import React from "react";

const storage = localStorage;

export class GatherInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            warm: "75",
            burning: "90",
            cold: "35",
            freezing: "10",
            perfectTemp: "60",
        };

        this.handleSumbit = this.handleSubmit.bind(this);
        this.warmChange = this.warmChange.bind(this);
        this.coldChange = this.coldChange.bind(this);
        this.burningChange = this.burningChange.bind(this);
        this.freezingChange = this.freezingChange.bind(this);
        this.perfectTempChange = this.perfectTempChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        storage.clear();
        storage.setItem("warm", this.state.warm);
        storage.setItem("cold", this.state.cold);
        storage.setItem("burning", this.state.burning);
        storage.setItem("freezing", this.state.freezing);
        storage.setItem("perfectTemp", this.state.perfectTemp);
        this.props.setStorage();
    }

    warmChange(e) {
        const warm = e.target.value;
        this.setState({ warm });
    }

    coldChange(e) {
        const cold = e.target.value;
        this.setState({ cold });
    }

    burningChange(e) {
        const burning = e.target.value;
        this.setState({ burning });
    }

    freezingChange(e) {
        const freezing = e.target.value;
        this.setState({ freezing });
    }

    perfectTempChange(e) {
        const perfectTemp = e.target.value;
        this.setState({ perfectTemp });
    }

    render() {
        return (
            <div className="gather-info">
                <div className="form">
                    <h2>Please enter some info...</h2>
                    <form onSubmit={this.handleSumbit} className="info-form">
                        <p>
                            What would you consider <strong>warm?</strong>
                        </p>
                        <div className="form-item">
                            <input
                                className="gather-input"
                                type="range"
                                min="0"
                                max="100"
                                value={this.state.warm}
                                onChange={this.warmChange}
                            />
                            <h5>{this.state.warm}°F</h5>
                        </div>
                        <p>
                            What would you consider <strong>cold?</strong>
                        </p>
                        <div className="form-item">
                            <input
                                className="gather-input"
                                type="range"
                                min="0"
                                max="100"
                                value={this.state.cold}
                                onChange={this.coldChange}
                            />
                            <h5>{this.state.cold}°F</h5>
                        </div>
                        <p>
                            What would you consider <strong>burning?</strong>
                        </p>
                        <div className="form-item">
                            <input
                                className="gather-input"
                                type="range"
                                min="0"
                                max="100"
                                value={this.state.burning}
                                onChange={this.burningChange}
                            />
                            <h5>{this.state.burning}°F</h5>
                        </div>
                        <p>
                            What would you consider <strong>freezing?</strong>
                        </p>
                        <div className="form-item">
                            <input
                                className="gather-input"
                                type="range"
                                min="0"
                                max="100"
                                value={this.state.freezing}
                                onChange={this.freezingChange}
                            />
                            <h5>{this.state.freezing}°F</h5>
                        </div>
                        <p>
                            What would you consider your{" "}
                            <strong>perfect temp?</strong>
                        </p>
                        <div className="form-item">
                            <input
                                className="gather-input"
                                type="range"
                                min="0"
                                max="100"
                                value={this.state.perfectTemp}
                                onChange={this.perfectTempChange}
                            />
                            <h5>{this.state.perfectTemp}°F</h5>
                        </div>
                        <button className="submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
