import React from "react";


export default class Employee extends React.Component{

constructor(props){
    super(props);
    this.state = {name :'sam',place:'india'}
}

handleNameChange = (event) => {
       const changedValue = event.target.value;
       this.setState( (state,props) =>({
            ...this.state,
            name : changedValue
       }));
}

handlePlaceChange = (event) => {
    const changedValue = event.target.value;
    this.setState( (state,props) =>({
         ...this.state,
         place : changedValue
    }));

    console.log(this.state.place);
}

render(){

return (
    <div>
        <form>
            <input type='text' value = {this.state.name}  onChange={this.handleNameChange}></input>
            <input type='text' value = {this.state.place}  onChange={this.handlePlaceChange}></input>


        </form>

        {this.props.render(this.state)}
    </div>
)

}



}


