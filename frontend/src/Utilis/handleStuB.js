import axios from "axios";

const baseUrl = "http://localhost:5000";

const getStudentUsn = async(Year,Dept,setStudentUsn)=>{
    try{
        const response = await axios.get(`${baseUrl}/getstudent/${Year}/${Dept}`)    
        setStudentUsn(response.data);
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

const addStuB=async(newStudent)=>{
    try{
        await axios.post(`${baseUrl}/borrowed/save`,newStudent)
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

const fetchStudents1 = async(setStudents1)=>{
    try{
        const response = await axios.get(`${baseUrl}/borrowed1`)    
        setStudents1(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents2 = async(setStudents2)=>{
    try{
        const response = await axios.get(`${baseUrl}/borrowed2`)    
        setStudents2(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents3 = async(setStudents3)=>{
    try{
        const response = await axios.get(`${baseUrl}/borrowed3`)    
        setStudents3(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}
const fetchStudents4 = async(setStudents4)=>{
    try{
        const response = await axios.get(`${baseUrl}/borrowed4`)    
        setStudents4(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const updateStudents = async(USN,Book_id,updateStudent)=>{
    try{
        
        const response = await axios.put(`${baseUrl}/borrowed/update/${USN}/${Book_id}`,updateStudent)
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

const deleteStudents = async(USN,Book_id)=>{
    try{
        console.log(USN,Book_id);
        const response = await axios.delete(`${baseUrl}/borrowed/delete/${USN}/${Book_id}`)
        .then(({data})=>{
            console.log(data);
        })
        console.log(response.data);
    }
    catch(error){
        console.log(error);
    }
    // window.location.reload();
}

export {getStudentUsn,fetchBook,addStuB,fetchStudents1,fetchStudents2,fetchStudents3,fetchStudents4,updateStudents,deleteStudents};