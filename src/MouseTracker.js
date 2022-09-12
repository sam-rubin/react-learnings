import React from "react";
import Cat from "./Cat";

export default class MouseTracker extends React.Component {


    constructor(props){
        super(props);
    //    this.handleMouseChange = this.handleMouseChange.bind(this);
        this.state = {
            x:0,
            y:0
        }
    }

    handleMouseChange = (event)=> {
        

        console.log("X is ", event.clientX," Y is ",event.clientY);

       this.setState(() => ({
            x: event.clientX,
            y: event.clientY
        }));
    }


    render(){

        return (
        <div onMouseMove={this.handleMouseChange} style={{ height: '100vh' }}>
            <h1>Mouse Tracker</h1> 
            <p>current position of mouse X is {this.state.x} Y  is  {this.state.y} </p>
            <Cat mouse ={this.state}/>

            
        </div>
        );
    }

}