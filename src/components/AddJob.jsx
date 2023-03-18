import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJobAsync } from '../features/job/jobSlice'
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificjobAsync, updateJobAsync } from '../features/job/jobSlice';
import { resetEditedJob, setJobType } from '../features/job/jobSlice';
import uuid from '../utils/uuid'
const initialValue = {
    lwsJobTitle: '',
    lwsJobType: '',
    lwsJobSalary: '',
    lwsJobDeadline: ''

}
export default function AddJob() {

    const [values, setValues] = useState(initialValue)
    const { jobs, editedJob } = useSelector(state => state.jobs)
    const [editedMode, setEditedMode] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(editedMode)
    useEffect(() => {
        if (id) {
            dispatch(getSpecificjobAsync(id))
        }

        if (!id && editedMode) {
            setValues(initialValue)
            setEditedMode(false)
            dispatch(resetEditedJob())
        }


    }, [dispatch, id])
    useEffect(() => {
        if (editedJob?.id) {
            setEditedMode(true)
            const { title, type, salary, deadline } = editedJob
            setValues({
                lwsJobTitle: title,
                lwsJobSalary: salary,
                lwsJobType: type,
                lwsJobDeadline: deadline
            })

        }
    }, [editedJob])
    const changeHandler = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addJobAsync({
            id: uuid(jobs),
            title: values.lwsJobTitle,
            type: values.lwsJobType,
            salary: values.lwsJobSalary,
            deadline: values.lwsJobDeadline
        }))
        setValues(initialValue)
        dispatch(setJobType('All'))
        navigate('/')
    }


    const updateHandler = (e) => {
        e.preventDefault()
        dispatch(updateJobAsync({
            id,
            title: values.lwsJobTitle,
            type: values.lwsJobType,
            salary: values.lwsJobSalary,
            deadline: values.lwsJobDeadline
        }))
        setValues(initialValue)
        dispatch(setJobType('All'))
        dispatch(resetEditedJob())
        navigate('/')
    }
    return <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">

        <div className="lg:pl-[14rem] mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <h1 className="mb-10 text-center lws-section-title">{!editedMode ? 'Add New Job' : 'Update Job'}</h1>

                <div className="max-w-3xl mx-auto">
                    <form className="space-y-6" onSubmit={!editedMode ? submitHandler : updateHandler}>
                        <div className="fieldContainer">
                            <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                            <select id="lws-JobTitle" value={values.lwsJobTitle} name="lwsJobTitle" required onChange={changeHandler}>
                                <option hidden selected>Select Job</option>
                                <option>Software Engineer</option>
                                <option>Software Developer</option>
                                <option>Full Stack Developer</option>
                                <option>MERN Stack Developer</option>
                                <option>DevOps Engineer</option>
                                <option>QA Engineer</option>
                                <option>Product Manager</option>
                                <option>Social Media Manager</option>
                                <option>Senior Executive</option>
                                <option>Junior Executive</option>
                                <option>Android App Developer</option>
                                <option>IOS App Developer</option>
                                <option>Frontend Developer</option>
                                <option>Frontend Engineer</option>
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label for="lws-JobType">Job Type</label>
                            <select id="lws-JobType" value={values.lwsJobType} name="lwsJobType" required onChange={changeHandler}>
                                <option hidden selected>Select Job Type</option>
                                <option>Full Time</option>
                                <option>Internship</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div className="fieldContainer">
                            <label for="lws-JobSalary">Salary</label>
                            <div className="flex border rounded-md shadow-sm border-slate-600">
                                <span className="input-tag">BDT</span>
                                <input type="number" value={values.lwsJobSalary} name="lwsJobSalary" onChange={changeHandler} id="lws-JobSalary" required className="!rounded-l-none !border-0"
                                    placeholder="20,00,000" />
                            </div>
                        </div>

                        <div className="fieldContainer">
                            <label for="lws-JobDeadline" >Deadline</label>
                            <input type="date" value={values.lwsJobDeadline} name="lwsJobDeadline" onChange={changeHandler} id="lws-JobDeadline" required />
                        </div>

                        <div className="text-right">
                            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                                {!editedMode ? 'Submit' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </div>
}
