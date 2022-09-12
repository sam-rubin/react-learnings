import React from "react";
import Employee from "./Employee";
import EmployeePrinter from "./EmployeePrinter";


export default class Printer extends React.Component{

    constructor(props){
        super(props);
    }


    handleEmployeeRenderProp(employee){

        return(
            <EmployeePrinter employee={employee}></EmployeePrinter>
        )

    }

    render(){

return (

    <Employee render = {this.handleEmployeeRenderProp}></Employee>

)

    }

}