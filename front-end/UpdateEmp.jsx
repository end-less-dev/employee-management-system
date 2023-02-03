import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const UpdateEmp = ()=>{
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[emailId,setEmailId] = useState("");
    const navigate = useNavigate("");

    let {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:1024/api/v1/employees/${id}`)
        .then((res)=>{
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmailId(res.data.emailId);
        })
    },[id])

    const fristNameFunc = (event)=>{
        setFirstName(event.target.value)
        console.log(event.target.value)
    }
    const lastNameFunc = (event)=>{
        setLastName(event.target.value)
        console.log(event.target.value)
    }
    const emailFunc = (event)=>{
        setEmailId(event.target.value);
        console.log(event.target.value);
    }

    const updateEmp = (e)=>{
        e.preventDefault();
        const employee = {firstName,lastName,emailId};
        //console.log(JSON.stringify(employee))
        const datas = JSON.stringify(employee)
        console.log(datas)
        const headers = {'Content-Type':'application/json'}
        axios(`http://localhost:1024/api/v1/employees/${id}`,{
            method:'PUT',
            headers,
            data:datas
        }).then((response)=>{
            navigate("/employees")
        }).catch((error)=>console.log(error))
    }
    const cancelEmp = ()=>{
        navigate("/employees")
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder="First Name" className="form-control" value={firstName} onChange={fristNameFunc} required/>

                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder="Last Name" className="form-control" value={lastName} onChange={lastNameFunc} required/>

                                <label htmlFor="">Email Address</label>
                                <input type="email" placeholder="name@gmail.com" className="form-control" value={emailId} onChange={emailFunc} required/>
                            </div>
                            <br />
                            <button className="btn btn-success" onClick={updateEmp}>Update</button>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={cancelEmp}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UpdateEmp;