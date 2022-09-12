import React from "react";

export default class Cat extends React.Component{


    constructor(props){
        super(props);

    }

    render(){
        const mouse = this.props.mouse;

        return (
            <img src="./assets/cat.jpeg"  alt ="No Image "style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />

        ); 
    }

}