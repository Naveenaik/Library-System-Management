import axios from "axios";

const baseUrl = "http://localhost:5000";

const fetchStudents1 = async(setStudents1)=>{
    try{
        const response = await axios.get(`${baseUrl}/due1`)    
        setStudents1(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents2 = async(setStudents2)=>{
    try{
        const response = await axios.get(`${baseUrl}/due2`)    
        setStudents2(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents3 = async(setStudents3)=>{
    try{
        const response = await axios.get(`${baseUrl}/due3`)    
        setStudents3(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents4 = async(setStudents4)=>{
    try{
        const response = await axios.get(`${baseUrl}/due4`)    
        setStudents4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

export {fetchStudents1,fetchStudents2,fetchStudents3,fetchStudents4}