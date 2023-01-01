import axios from "axios";

export const fetchComplaints = async () => {
    const response = await axios.get('/complaints');
    return response.data;
};

export const addComplaint = async (complaint) => {
    await axios.post('/complaints', complaint);
};