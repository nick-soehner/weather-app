import "./App.css";
import React from "react";
import { GatherInfo } from "./components/GatherInfo";
import { ShowWhether } from "./components/ShowWhether";

const storage = localStorage;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showGatherInfo: true,
            showShowWhether: false,
        };

        this.handleLoad = this.handleLoad.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener("load", this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.handleLoad);
    }

    handleLoad() {
        if (storage.length > 0) {
            this.setState({ showGatherInfo: !this.state.showGatherInfo });
            this.setState({ showShowWhether: !this.state.showShowWhether });
            console.log(storage.length);
        } else {
            console.log(storage.length);
        }
    }

    handleChange() {
        if (storage.length > 0) {
            storage.clear();
            this.setState({ showGatherInfo: !this.state.showGatherInfo });
            this.setState({ showShowWhether: !this.state.showShowWhether });
            console.log(storage.length);
        } else {
            this.setState({ showGatherInfo: !this.state.showGatherInfo });
            this.setState({ showShowWhether: !this.state.showShowWhether });
            console.log(storage.length);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.showGatherInfo && <GatherInfo />}
                    {this.state.showShowWhether && (
                        <ShowWhether handleChange={this.handleChange} />
                    )}
                </header>
            </div>
        );
    }
}

export default App;
