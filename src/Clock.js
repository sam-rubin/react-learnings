import React from "react";

export default class Clock extends React.Component{
    //constructor
      constructor(props){
        super(props);
        this.state = {date :new Date()};
        //this.tick = this.tick.bind(this);
        
      }
    
    
      componentDidMount(){
        console.log('Component will Mount');
        var that = this;
        this.intervalId= setInterval( this.tick.bind(this),1000);
        window.intervalId = this.intervalId;
      }
    
      tick(){
      console.log('inside tick method',this)
    
      this.setState({date: new Date()});
      }
    
     static getDerivedStateFromProps(props,state){
        console.log(props,"Insise derived state from props ",state);
      }

      componentDidUpdate(){
        console.log("whether component got updated ");

    }

    

      componentWillUnmount(){
        console.log('Component will unMount');
        clearInterval(this.intervalId);
      }
    
    render(){
      return (
        <div>
         
         Hello World {this.state.date.toLocaleTimeString()}
    
        </div>
      )
    }
    }
    
    