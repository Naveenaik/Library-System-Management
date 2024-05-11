import axios from "axios";

const baseUrl = "http://localhost:5000";

const fetchPublishers = async (setPublishers) => {
  try {
    const response = await axios.get(`${baseUrl}/publisher`);
    setPublishers(response.data);
  } catch (error) {
    console.log(error);
  }
};

const addPublishers = async (newPublisher) => {
  try {
    await axios.post(`${baseUrl}/publisher/save`, newPublisher);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
  window.location.reload();
};

const updatePublishers = async (Name, updatePublisher) => {
  try {
    // console.log(bookId);

    const response = await axios
      .put(`${baseUrl}/publisher/update/${Name}`, updatePublisher)
      .then(({ data }) => {
        console.log(data);
      });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
};

const deletePublishers = async (Pname) => {
  try {
    const response = await axios
      .delete(`${baseUrl}/publisher/delete/${Pname}`)
      .then(({ data }) => {
        console.log(data);
      });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchPublishers, addPublishers, updatePublishers, deletePublishers };
