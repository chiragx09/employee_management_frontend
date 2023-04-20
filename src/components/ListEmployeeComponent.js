import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService.js'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container m-2">
            {/* <h2 className = "text-center"> List Employees </h2> */}
            {/* <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link> */}
            <table className="table table-striped" border="1">
                <thead className="bg-primary text-white">
                <tr>
                    <th scope="col">Id</th>
					<th scope="col">Name</th>
					<th scope="col">Address</th>
					<th scope="col">Email</th>
					<th scope="col">Phone No</th>
					<th scope="col">Salary</th>
					<th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.name} </td>
                                <td>{employee.address}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phno}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/editemp/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent