import React from 'react'
import { useDispatch } from 'react-redux'
import { deletedJobAsync } from '../features/job/jobSlice'
import { Link, useNavigate } from 'react-router-dom'
export default function SingleJob({ job }) {
    const { id, title, type, salary, deadline } = job
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const typeColor = () => {
        if (type === 'Internship') {
            return '!text-[#FF5757]'
        }
        if (type === 'Full Time') {
            return '!text-[#FF8A00]'
        }
        if (type === 'Remote') {
            return '!text-[#56E5C4]'
        }
    }

    const deleteHandler = () => {
        dispatch(deletedJobAsync(id))
    }

    const editHandler = () => {
        navigate(`/edit/${id}`)
    }
    return <div className="lws-single-job">
        <div className="flex-1 min-w-0">
            <h2 className="lws-title">{title}</h2>
            <div className="job-footers">
                <div className="lws-type">

                    <i className={`fa-solid fa-stop ${typeColor()} text-lg mr-1.5`}></i>
                    {type}
                </div>
                <div className="lws-salary">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                    BDT {Number(salary).toLocaleString('en-BD')}
                </div>
                <div className="lws-deadline">
                    <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                    Closing on {deadline}
                </div>
            </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
                <button type="button" className="lws-edit btn btn-primary" onClick={editHandler}>
                    <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                    Edit
                </button>
            </span>

            <span className="sm:ml-3">
                <button type="button" className="lws-delete btn btn-danger " onClick={deleteHandler}>
                    <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" ></i>
                    Delete
                </button>
            </span>
        </div>
    </div>
}
