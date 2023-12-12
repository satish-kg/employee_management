import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteEmployee = ()=>{
    const idEmployee = useParams().id;
    const navigate = useNavigate();

    const employeeDataEndpoint = 'http://localhost:6969/api/v1/employee/get';
    const deleteEmployeeEndpoint = 'http://localhost:6969/api/v1/employee/delete';

    const [employeeFirstName, setEmployeeFirstName] = useState("");
    const [employeeLastName, setEmployeeLastName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [oneTime, setOneTime] = useState(0);

    useEffect(()=>{
        const employeeDataFetch = async () =>{
            try{
                const fetchEmployeeData = await axios.get(`${employeeDataEndpoint}/${idEmployee}`);
                setEmployeeFirstName(fetchEmployeeData.data.first_name);
                setEmployeeLastName(fetchEmployeeData.data.last_name);
                setEmployeeEmail(fetchEmployeeData.data.email);
                console.log("employeeFirstNameeeee: "+employeeFirstName);
                console.log("employeeLastNameeeeeee: "+employeeLastName);
                console.log("employeeEmailllllll: "+employeeEmail);
                setOneTime(1);
            }catch(error){
                console.log("Error during getEmployeeDataFunction: "+error);
                throw error;
            }
        };
        employeeDataFetch();
    },[idEmployee]);
    const cancel = () =>{
        navigate("/employee/getAll");
    }
    
    const deleteEmployeeFunction = async ()=>{
        try{
            const deleteEmployeeResponse = await axios.delete(`${deleteEmployeeEndpoint}/${idEmployee}`);
            navigate("/employee/getAll");
            return deleteEmployeeResponse.data;
        }catch(error){
            console.log("Error during deleteEmployeeFunction: "+error);
            throw error;
        }
    }

    // const employeeDataResponse = getEmployeeDataFunction(idEmployee);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Delete Employee</h3>
                        <div className="card-body">
                            <h2>Are you sure to delete following employee?</h2>
                            <div>
                                <p>Name : {employeeFirstName} {employeeLastName}</p>
                                <p>Email : {employeeEmail}</p>
                                {/* <p>{oneTime}</p> */}
                                {/* <span>{employeeDataResponse.data.first_name}</span>
                                <span>{employeeDataResponse.data.last_name}</span> */}

                            </div>
                            <div className="flex flex-row">
                                <button onClick={deleteEmployeeFunction}>Yes</button>
                                {/* <button onClick={getEmployeeDataFunction(idEmployee)}>Yes</button> */}
                                <button onClick={cancel}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteEmployee;