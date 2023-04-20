import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService.js";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';

const AddEmployeeComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [salary, setSalary] = useState("");
  const [value, setValue] = useState();

  // const [id, setId] = useState('')
  const history = useNavigate();
  const { id } = useParams();

  const validate = () => {
    if (name.length < 3) {
        toast.error("Name must be of minimum 3 charecter")
      return false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        toast.error("Please enter valid email")
      return false;
    } else if (address == "") {
        toast.error("Please enter valid address")
      return false;
    } else if (phno.length < 13) {
        toast.error("Please enter valid phone number")
      return false;
    } else if (salary == "") {
        toast.error("Please enter valid salary")
      return false;
    }
    return true;
  };

  const saveOrUpdateEmployee = (e) => {
    //const notify = () => toast("Wow so easy!");
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const employee = { name, address, email, phno, salary };
    const editEmployee = { id, name, address, email, phno, salary };

    if (id) {
      EmployeeService.updateEmployee(editEmployee)
        .then((response) => {
          history("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);

          history("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setPhno(response.data.phno);
        setSalary(response.data.salary);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h4 className="text-center text-primary">Update Emp</h4>;
    } else {
      return <h4 className="text-center text-primary">Add Emp</h4>;
    }
  };

  return (
    <div>
        <div><Toaster/></div>
      <div className="container m-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Enter Full Name :</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Enter Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Enter Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Enter Phone No</label>
                  {/* <input
                                        type = "number"
                                        name = "phno"
                                        className = "form-control"
                                        value = {phno}
                                        onChange = {(e) => setPhno(e.target.value)}
                                        required
                                    >
                                    </input> */}
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phno}
                    onChange={setPhno}
                    required
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Enter Salary</label>
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  ></input>
                </div>

                <div className="d-grid gap-2 pt-2">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => saveOrUpdateEmployee(e)}
                  ></input>
                  {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
