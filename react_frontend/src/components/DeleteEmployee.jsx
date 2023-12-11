import axios from 'axios';
import React, { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DeleteEmployee = ()=>{
    const idEmployee = useParams().id;

    const employeeDataEndpoint = 'http://localhost:6969/api/v1/employee/get';
    const deleteEmployeeEndpoint = 'http://localhost:6969/api/v1/employee/delete';

    let employeeFirstName = "";
    let employeeLastName = "";
    let employeeEmail = "";

    ()=>{
        getEmployeeDataFunction(idEmployee);
    }

    useEffect(() =>{
        getEmployeeDataFunction(idEmployee);
    }, [])
    async function getEmployeeDataFunction(idEmployee){
        try{
            const getEmployeeDataResponse = await axios.get(`${employeeDataEndpoint}/${idEmployee}`);
            employeeFirstName = getEmployeeDataResponse.data.first_name;
            employeeLastName = getEmployeeDataResponse.data.last_name;
            employeeEmail = getEmployeeDataResponse.data.email;
            return getEmployeeDataResponse.data;
        }catch(error){
            console.log("Error during getEmployeeDataFunction: "+error);
            throw error;
        }
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Delete Employee v2.0</h3>
                        <div className="card-body">
                            <h2>Are you sure to delete following employee?</h2>
                            <div>
                                <span>{employeeFirstName} {employeeLastName}</span><br/><span>{employeeEmail}</span>
                            </div>
                            <div className="flex flex-row">
                                <button onClick={getEmployeeDataFunction(idEmployee)}>Yes</button>
                                <button>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteEmployee;