import React from 'react'
import {Component} from 'react'


class CircleSelector extends Component{
    
    handleChange1 = () => {
        if(this.state.state1 === false){
        this.setState({
            ["buttonOne"]: "Circle 1 Selected",
            ["buttonTwo"]: "Select Circle 2",
            ["buttonThree"]: "Select Circle 3",
            ["buttonFour"]: "Select Circle 4",
            ["c1"]: "selected",
            ["c2"]: "",
            ["c3"]: "",
            ["c4"]: "",


        });

    }
}
handleChange2 = () => {
    if(this.state.state2 === false){
    this.setState({
        ["buttonOne"]: "Select Circle 1",
        ["buttonTwo"]: "Circle 2 Selected",
        ["buttonThree"]: "Select Circle 3",
        ["buttonFour"]: "Select Circle 4",
        ["c1"]: "",
        ["c2"]: "selected",
        ["c3"]: "",
        ["c4"]: "",


    });

}
}
handleChange3 = () => {
    if(this.state.state3 === false){
    this.setState({
        ["buttonOne"]: "Select Circle 1",
        ["buttonTwo"]: "Select Circle 2",
        ["buttonThree"]: "Circle 3 Selected",
        ["buttonFour"]: "Select Circle 4",
        ["c1"]: "",
        ["c2"]: "",
        ["c3"]: "selected",
        ["c4"]: "",


    });

}
}
handleChange4 = () => {
    if(this.state.state4 === false){
    this.setState({
        ["buttonOne"]: "Select Circle 1",
        ["buttonTwo"]: "Select Circle 2",
        ["buttonThree"]: "Select Circle 3",
        ["buttonFour"]: "Circle 4 Selected",
        ["c1"]: "",
        ["c2"]: "",
        ["c3"]: "",
        ["c4"]: "selected",


    });
}
}

   
    state ={
        state1: false,
        state2: false,
        state3: false,
        state4: false,
        buttonOne : "Select Circle 1",
        buttonTwo : "Select Circle 2",
        buttonThree : "Select Circle 3",
        buttonFour : "Select Circle 4",
        c1: "",
        c2: "",
        c3: "",
        c4: "",

    }

    
    render (){
        return(
            <div>

            <div className="CircleSelector">
                <button name="buttonOne" onClick={this.handleChange1} >{this.state.buttonOne}</button>
                <button name="buttonTwo" onClick={this.handleChange2}>{this.state.buttonTwo}</button>
                <button name="buttonThree" onClick={this.handleChange3}>{this.state.buttonThree}</button>
                <button name="buttonFour" onClick={this.handleChange4}>{this.state.buttonFour}</button>
            </div>
            <div className="Circles">
                <div id="c1" className={this.state.c1}>1</div>
                <div id="c2" className={this.state.c2}>2</div>
                <div id="c3" className={this.state.c3}>3</div>
                <div id="c5" className={this.state.c4}>4</div>

            </div>
            </div>
        )
    }
}

export default CircleSelector