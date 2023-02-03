import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
const Emplist = ()=>{
    const[content, setContent] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:1024/api/v1/employees")
        .then((response)=>{
            console.log(response.data)
            setContent(response.data)
        })
        .catch((error)=>console.log(error))
    },[])
    const addEmp = ()=>{
        navigate('/add-employees')
    }
    const editEmp = (id)=>{
        navigate(`/update-employees/${id}`);
    }
    const deleteEmp = (id)=>{
        axios.delete(`http://localhost:1024/api/v1/employees/${id}`)
        .then(()=>{
            window.location.reload();
        })
    }
    const view = (id)=>{
        navigate(`/view-employee/${id}`)
    }
    return(
        <>
        <h1 className="text-center">Employee List</h1>
        <button className="btn btn-primary btn-lg" onClick={addEmp} style={{marginLeft:"20px"}}>Add Employee</button>
        <br /><br />
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Employee First Name</th>
                        <th className="text-center">Employee Last Name</th>
                        <th className="text-center">Employee Email Id</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((employee)=>{
                        return(
                            <tr className="text-center" key={employee.id}>
                                <td className="text-center">{employee.firstName}</td>
                                <td className="text-center">{employee.lastName}</td>
                                <td className="text-center">{employee.emailId}</td>
                                <td className="text-center">
                                    <button className="btn btn-info" onClick={()=>{editEmp(employee.id)}}>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>{deleteEmp(employee.id)}}>Delete</button>
                                    <button className="btn btn-info" style={{marginLeft:"10px"}} onClick={()=>{view(employee.id)}}>View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Emplist;