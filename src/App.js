import "./App.css";
import React from "react";
import { GatherInfo } from "./components/GatherInfo";
import { ShowWeather } from "./components/ShowWeather";

const storage = localStorage;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showGatherInfo: true,
            showShowWeather: false,
        };

        this.handleLoad = this.handleLoad.bind(this);
        this.clearStorage = this.clearStorage.bind(this);
        this.setStorage = this.setStorage.bind(this);
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
            this.setState({ showShowWeather: !this.state.showShowWeather });
            console.log(storage.length);
        } else {
            console.log(storage.length);
        }
    }

    clearStorage() {
        if (storage.length > 0) {
            storage.clear();
            this.setState({ showGatherInfo: !this.state.showGatherInfo });
            this.setState({ showShowWeather: !this.state.showShowWeather });
            console.log(storage.length);
        }
    }

    setStorage() {
        this.setState({ showGatherInfo: !this.state.showGatherInfo });
        this.setState({ showShowWeather: !this.state.showShowWeather });

        console.log(storage.length);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.showGatherInfo && (
                        <GatherInfo setStorage={this.setStorage} />
                    )}
                    {this.state.showShowWeather && (
                        <ShowWeather clearStorage={this.clearStorage} />
                    )}
                </header>
            </div>
        );
    }
}

export default App;
