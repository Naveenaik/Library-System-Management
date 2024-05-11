import axios from "axios";

const baseUrl = "http://localhost:5000";

const fetchBook = async(setBooks)=>{
    try{
        const response = await axios.get(`${baseUrl}/book`)    
        setBooks(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
}

const addBooks=async(book)=>{
    try{
        const response = await axios.post(`${baseUrl}/book/save`,book)
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

const updateBooks = async(bookId,newBook)=>{
    try{
        console.log(bookId);
        
        const response = await axios.put(`${baseUrl}/book/update/${bookId}`,newBook)
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

const deleteBooks = async(bookId)=>{
    try{
        const response = await axios.delete(`${baseUrl}/book/delete/${bookId}`)
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

export {fetchBook,addBooks,updateBooks,deleteBooks}