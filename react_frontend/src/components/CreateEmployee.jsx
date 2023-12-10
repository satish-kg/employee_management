import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';


const CreateEmployee = () => {
    const navigate = new useNavigate();

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

    const saveEmployee = (e) => {
        e.preventDefault();
        // const employee = {firstName, lastName, emailId};
        const employee = {first_name: firstName, last_name: lastName, email: emailId};
        console.log('employee => ' + JSON.stringify(employee));
        sendEmployeeObject(employee);
    }

    const sendEmployeeObject = async (employee) => {
        try {
            const response = await axios.post('http://localhost:6969/api/v1/employee/create', employee);
            console.log('Data sent:', response.data);
            // Handle success (e.g., show success message)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        }
    }

    // const [formData, setFormData] = useState({
    //     first_name: '',
    //     last_name: '',
    //     email: '',
    //   });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await axios.post('http://localhost:5173/api/v1/employees/create', formData);
    //         console.log('Data sent:', response.data);
    //         // Handle success (e.g., show success message)
    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle error (e.g., show error message)
    //     }
    // };

    const cancel = () => {
        return navigate('/employee/getAll');
    }

    return (
        <div>
            {/* <h1>Create Employee Page react v6.20</h1> */}
            <div className="container">
                <div className="row">
                    <div className="card col-6 col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
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
                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                <button className='btn btn-danger' onClick={cancel}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployee;