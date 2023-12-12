import React, { Component, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const idEmployee = useParams().id;
    // const axios = require('axios');

    const endpoint = 'http://localhost:6969/api/v1/employee/update'

    // const [formData, setFormData] = useState({
    //     id: idEmployee,
    //     first_name: '',
    //     last_name: '',
    //     email:''
    // });

    // const handleChange = (event) => {

    //     const {name, value} = event.target;
    //     setFormData({...formData, [name]: value});
    // }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    const debouncedEmailChangeHandler = _.debounce((value) =>{
        setEmailId(value);  
        console.log(value);
    } )

    const debouncedFirstNameChangeHandler = _.debounce((value) =>{
        setFirstName(value);
        console.log(value);
    } )

    const debouncedLastNameChangeHandler = _.debounce((value) =>{
        setLastName(value);
        console.log(value);
    } )


    const changeFirstNameHandler = (event) => {
        const {value} = event.target;
        debouncedFirstNameChangeHandler(value);
        // setFirstName(event.target.value);
        // console.log(firstName);
    }

    const changeLastNameHandler = (event) => {
        const {value} = event.target;
        debouncedLastNameChangeHandler(value);
        // setLastName(event.target.value);
        // console.log(lastName);
    }

    const changeEmailIdHandler = (event) => {
        const {value} = event.target;
        debouncedEmailChangeHandler(value);
        // setEmailId(event.target.value);
        // console.log(emailId);
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        const updateEmployeeObj = {id: idEmployee, first_name : firstName, last_name: lastName, email: emailId};
        console.log('updateEmployeeObjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj : ', updateEmployeeObj);
        updateEmployeeFunction(updateEmployeeObj);
        // sendUpdate({idEmployee}, employeeObj);
    }

    async function updateEmployeeFunction(employeeObj){
        try{
            const response = await axios.put(`${endpoint}`, employeeObj);
            console.log('Updated Employee', response.data);
            navigate('/employee/getAll');
            return response.data;
        }catch(error){
            console.log("Error encountered : ", error);
            throw error;
        }
    }
    // const sendUpdate = async (idEmployee, formData) => {
    //     // event.preventDefault();

    //     try {
    //         const response = await axios.put(`http://localhost:6969/api/v1/employees/update/${idEmployee}`, formData);
    //         console.log('Data updated:', response.data);
    //         // Handle success (e.g., show success message)
    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle error (e.g., show error message)
    //     }
    // };

    const cancel = () =>{
        navigate('/employee/getAll');
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-6 col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>
                                        First Name: 
                                        <input type="text" placeholder='First Name' className='form-control'
                                        name='firstName' value={firstName} onChange={changeFirstNameHandler} />
                                    </label>
                                    
                                </div>
                                <div className="form-group">
                                    <label>
                                        Last Name: 
                                        <input type="text" placeholder='Last Name' className='form-control'
                                        name='lastName' value={lastName} onChange={changeLastNameHandler} />    
                                    </label>
                                    
                                </div>
                                <div className="form-group">
                                    <label>
                                        Email Id: 
                                        <input type="email" placeholder='Email Id' className='form-control'
                                        name='emailId' value={emailId} onChange={changeEmailIdHandler} />
                                    </label>
                                    
                                </div>
                                <button className='btn btn-success' onClick={handleUpdate}>Update</button>
                                <button className='btn btn-danger' onClick={cancel}>Return</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
    
export default UpdateEmployee;