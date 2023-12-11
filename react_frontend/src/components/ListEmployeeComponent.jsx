import { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getAllEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const goToAddEmployee = () => {
        navigate('/employee/create');
    };

    // const goToUpdateEmployee = () =>{
    //     navigate('/employee/update');
    // }

    const editEmployee = (id) =>{
        navigate(`/employee/update/${id}`);
    }

    return (
        <div>
            <h1 className='text-center'>Employees List:</h1>
            <div className="add-employee-btn">
                <button className='btn btn-primary' id='add-employee-btn' onClick={goToAddEmployee}>Add Employee</button>
                {/* <button className='btn btn-primary' id='update-employee-btn' onClick={goToUpdateEmployee}>Update Employee</button>; */}
            </div>
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.first_name}</td>
                                <td>{employee.last_name}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={()=> editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;






// class ListEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             employees: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//         // this.deleteEmployee = this.deleteEmployee.bind(this)
//     }

//     componentDidMount(){
//         EmployeeService.getAllEmployees().then((res) => {
//             this.setState({employees: res.data});
//         })
//     }

//     goToAddEmployee(){
//         const navigate = useNavigate();
//         navigate('/employee/add');
//     }


//     render() {
//         return (
//             <div>
//                 <h1 className='text-center'>Employees List : </h1>
//                 <div className="add-employee-btn">
//                     {/* <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button> */}
//                     <button className='btn btn-primary' onClick={() => goToAddEmployee()}>Add Employee</button>
//                 </div>
//                 <div className="row">
//                     <table className="table table-stripped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Employee First Name</th>
//                                 <th>Employee Last Name</th>
//                                 <th>Employee Email Id</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.employees.map(
//                                     employee =>
//                                     <tr key = {employee.id}>
//                                             <td>{employee.first_name}</td>
//                                             <td>{employee.last_name}</td>
//                                             <td>{employee.email}</td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ListEmployeeComponent;