import axios from "axios";

const baseUrl = "http://localhost:5000";

const fetchStudents1 = async(setStudents1)=>{
    try{
        const response = await axios.get(`${baseUrl}/student1`)    
        setStudents1(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents2 = async(setStudents2)=>{
    try{
        const response = await axios.get(`${baseUrl}/student2`)    
        setStudents2(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents3 = async(setStudents3)=>{
    try{
        const response = await axios.get(`${baseUrl}/student3`)    
        setStudents3(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents4 = async(setStudents4)=>{
    try{
        const response = await axios.get(`${baseUrl}/student4`)    
        setStudents4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const addStudents=async(addStudents)=>{
    try{
        await axios.post(`${baseUrl}/student/save`,addStudents)
        // .then(({data})=>{
        //     console.log(data);
        // })
        // console.log(response.data);
    }
    catch(error){
         console.log(error);   
         alert(error.response.data.message);
         
    }
    window.location.reload();
}

const updateStudents = async(USN,newStudent)=>{
    try{
        
        const response = await axios.put(`${baseUrl}/student/update/${USN}`,newStudent)
        .then(({data})=>{
            console.log(data);
        })
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
    window.location.reload();
}

const deleteStudents = async(USN)=>{
    try{
        const response = await axios.delete(`${baseUrl}/student/delete/${USN}`)
        .then(({data})=>{
            console.log(data);
        })
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
    window.location.reload();
}

export {fetchStudents1,fetchStudents2,fetchStudents3,fetchStudents4,addStudents,updateStudents,deleteStudents}