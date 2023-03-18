import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobsAsync } from '../features/job/jobSlice'
import SingleJob from './SingleJob'
import SearchController from './SearchController'
import SalaryFilter from './SalaryFilter'
export default function AllJobs() {
    const { jobs = [], jobType, search, sortingType } = useSelector(state => state.jobs)


    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchJobsAsync())
    }, [dispatch])


    const filterByJobType = (jobs) => {

        if (jobType == 'Internship') {
            return jobs.filter(job => job.type === 'Internship')
        } else if (jobType == 'Full Time') {
            return jobs.filter(job => job.type === 'Full Time')
        } else if (jobType == 'Remote') {
            return jobs.filter(job => job.type === 'Remote')
        }
        return jobs
    }
    const searchJobsByTitle = (jobs) => {
        return jobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()))
    }

    const sortJobsBySalary = (jobs) => {
        console.log(sortingType)
        if (sortingType === 'All') {
            return jobs
        }
        if (sortingType === 'Asc') {
            return jobs.sort((a, b) => parseInt(a.salary) - parseInt(b.salary))
        }
        if (sortingType === 'Dsc') {
            return jobs.sort((a, b) => parseInt(b.salary) - parseInt(a.salary))
        }
    }
    const showAllJobs = () => {
        const allJobs = sortJobsBySalary(searchJobsByTitle(filterByJobType(jobs)))

        return allJobs?.length > 0 && allJobs.map(job => (<SingleJob key={job.id} job={job} />))

    }
    return <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                <h1 className="lws-section-title">{jobType != 'All' ? jobType : 'All Available Jobs'}</h1>
                <div className="flex gap-4">
                    <SearchController />
                    <SalaryFilter />
                </div>
            </div>

            <div className="jobs-list">
                {showAllJobs()}
            </div>
        </main>
    </div>
}
