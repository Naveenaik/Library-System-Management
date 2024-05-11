import axios from "axios";

const baseUrl = "http://localhost:5000";

const getTeacherId = async(Dept,setTeacherId)=>{
    try{
        const response = await axios.get(`${baseUrl}/getteacher/${Dept}`)    
        setTeacherId(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const fetchBook = async(setFetchBook)=>{
    try{
        const response = await axios.get(`${baseUrl}/getbooks`);
        setFetchBook(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const addTeachB=async(newTeacher)=>{
    try{
        await axios.post(`${baseUrl}/t-borrowed/save`,newTeacher)
    }
    catch(error){
         console.log(error);   
         alert(error.response.data.message);
         
    }
    window.location.reload();
}

const fetchTeachers1 = async(setStudents1)=>{
    try{
        const response = await axios.get(`${baseUrl}/t-borrowed1`)    
        setStudents1(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers2 = async(setStudents2)=>{
    try{
        const response = await axios.get(`${baseUrl}/t-borrowed2`)    
        setStudents2(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers3 = async(setStudents3)=>{
    try{
        const response = await axios.get(`${baseUrl}/t-borrowed3`)    
        setStudents3(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers4 = async(setStudents4)=>{
    try{
        const response = await axios.get(`${baseUrl}/t-borrowed4`)    
        setStudents4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchTeachers5 = async(setStudents4)=>{
    try{
        const response = await axios.get(`${baseUrl}/t-borrowed5`)    
        setStudents4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const updateTeachers = async(TeachId,Book_id,newStudent)=>{
    try{
        
        const response = await axios.put(`${baseUrl}/t-borrowed/update/${TeachId}/${Book_id}`,newStudent)
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

const deleteTeachers = async(TeachId,Book_id)=>{
    try{
        const response = await axios.delete(`${baseUrl}/t-borrowed/delete/${TeachId}/${Book_id}`)
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

export {getTeacherId,fetchBook,addTeachB,fetchTeachers1,fetchTeachers2,fetchTeachers3,fetchTeachers4,fetchTeachers5,updateTeachers,deleteTeachers};