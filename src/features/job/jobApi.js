// A mock function to mimic making an async request for data
import axios from 'axios';
import https from '../../https/https';


export const fetchJobs = async () => {

    let response = await axios.get(`${https}`)
    return response.data
}

export const addJob = async (data) => {

    let response = await axios.post(`${https}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}
export const deleteJob = async (id) => {
    let response = await axios.delete(`${https}/${id}`)
    return response.data
}

export const getSingleJob = async (id) => {
    let response = await axios.get(`${https}/${id}`)
    return response.data
}

export const updateJob = async ({ id, ...data }) => {
    console.log(id, data)
    let response = await axios.patch(`${https}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}