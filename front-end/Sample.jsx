import axios from "axios";
import { useEffect, useState } from "react";

const Sample = ()=>{
    const[content, setContent] = useState([])
    const[data, setData] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:1024/api/v1/employees")
        .then((response)=>{
            console.log(response.data)
            setContent(response.data)
        })
        .catch((error)=>console.log(error))
    },[])

    const Check = (e)=>{

    }
    return(
        <>
        {/* {content.map((data)=>{
            return(
                <ul>
                    <li>{data.id}</li>
                    <li>{data.firstName} {data.lastName}</li>
                    <li>{data.emailId}</li>
                </ul>
            )
        })} */}

        <input type="email" value={one}/>
        <button onClick={Check()}>Click</button>
        </>
    )
}
export default Sample;