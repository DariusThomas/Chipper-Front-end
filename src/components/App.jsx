import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            submitedText: ['First Chirp', 'Second Chirp', 'Third Chirp'],
            text: '',
            curTime: new Date().toLocaleString()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    handleClick() {
        let arr = [...this.state.submitedText];
        arr.unshift(this.state.text);
        this.setState({
            submitedText: arr,
            text: ''
        })
    }
    render() {
        let messageList = this.state.submitedText.map((i, index) => <div className=" border border-dark w-100 "><div className="border" >{i}</div><p>{this.state.curTime}</p></div>)
        return (
            <>
                    <div>
                        <input type="text" placeholder="Enter Chirp" onChange={this.handleChange} />
                        <input type="button" value="submit" onClick={this.handleClick} className="btn btn-primary" />
                    </div>
                    <div className="d-flex p-4 flex-wrap flex-column align-items-center">
                         {messageList} 
                    </div>
            </>
        )
    }
}

export default App