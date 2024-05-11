import axios from "axios";

const baseUrl = "http://localhost:5000";

const fetchTeachers1 = async(setTeachers1)=>{
    try{
        const response = await axios.get(`${baseUrl}/teacher1`)    
        setTeachers1(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers2 = async(setTeachers2)=>{
    try{
        const response = await axios.get(`${baseUrl}/teacher2`)    
        setTeachers2(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers3 = async(setTeachers3)=>{
    try{
        const response = await axios.get(`${baseUrl}/teacher3`)    
        setTeachers3(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers4 = async(setTeachers4)=>{
    try{
        const response = await axios.get(`${baseUrl}/teacher4`)    
        setTeachers4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers5 = async(setTeachers5)=>{
    try{
        const response = await axios.get(`${baseUrl}/teacher5`)    
        setTeachers5(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}



const addTeachers=async(newTeacher)=>{
    try{
        await axios.post(`${baseUrl}/teacher/save`,newTeacher)
    }
    catch(error){
         console.log(error); 
         alert(error.response.data.message);  
    }
    window.location.reload();
}

const updateTeachers = async(TeachId,updateTeacher)=>{
    try{
        // console.log(bookId);
        
        const response = await axios.put(`${baseUrl}/teacher/update/${TeachId}`,updateTeacher)
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

const deleteTeachers = async(TeachId)=>{
    try{
        const response = await axios.delete(`${baseUrl}/teacher/delete/${TeachId}`)
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

export {fetchTeachers1,fetchTeachers2,fetchTeachers3,fetchTeachers4,fetchTeachers5,addTeachers,updateTeachers,deleteTeachers}