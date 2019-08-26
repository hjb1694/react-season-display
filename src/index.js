import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './spinner';
import SeasonDisplay from './seasonDisplay';

class App extends React.Component {


    state = {
        latitude : null, 
        errorMsg : ''
    }


    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude : position.coords.latitude}), 
            error => this.setState({errMsg : error.message})
        );

    }


    renderComponent(){
        if(!this.state.errorMsg && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude} />
        }

        if(this.state.errorMsg && !this.state.latitude){
            return this.state.errorMsg;

        }

        return <Spinner message="Please allow your location to continue." />;


    }



    render() {

        return (
            <div className="App">
                {this.renderComponent()}
            </div>
        );

    }

}



ReactDOM.render(<App />, document.querySelector('#root'));