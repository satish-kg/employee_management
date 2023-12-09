import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:6969/api/v1/employees/getAll";

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();