import React from "react";


export default class EmployeePrinter extends React.Component{
    
    constructor(props){
        super(props);
    
    }

    render(){

        const employee =this.props.employee;
        return (
            <><h1>Personal Information are printed below</h1>
             <p>{employee.name} {employee.place}</p>
             </>
        )
    }


}