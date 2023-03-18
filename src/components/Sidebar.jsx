import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux/es/exports';
import { setJobType, resetEditedJob } from '../features/job/jobSlice';
export default function Sidebar() {

    const dispatch = useDispatch()


    const selectJobType = (value) => {
        dispatch(setJobType(value))
        dispatch(resetEditedJob())
    }

    return <div className="sidebar">
        <nav>
            <ul className="space-y-4">
                <li>
                    <Link to="/" className="main-menu menu-active" id="lws-alljobs-menu" onClick={() => selectJobType('All')}>
                        <i className="fa-solid fa-briefcase"></i>
                        <span> All Available Jobs</span>
                    </Link>
                    <ul className="space-y-6 lg:space-y-2 ">
                        <li>
                            <Link className="sub-menu" to="/" id="lws-internship-menu" onClick={() => selectJobType('Internship')}>
                                <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                Internship
                            </Link>
                        </li>
                        <li>
                            <Link className="sub-menu" to="/" id="lws-fulltime-menu" onClick={() => selectJobType('Full Time')}>
                                <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                Full Time
                            </Link>
                        </li>
                        <li>
                            <Link className="sub-menu" to="/" id="lws-remote-menu" onClick={() => selectJobType('Remote')}>
                                <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                Remote
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/jobs" className="main-menu" id="lws-addJob-menu" >
                        <i className="fa-solid fa-file-circle-plus"></i>
                        <span>Add NewJob</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}
