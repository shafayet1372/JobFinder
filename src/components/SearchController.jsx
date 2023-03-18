import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setSearch } from '../features/job/jobSlice'
export default function SearchController() {
const dispatch=useDispatch()
const {search}=useSelector(state=>state.jobs)
const searchHandler=(e)=>{
    const value=e.target.value
    dispatch(setSearch(value))
}
  return <div className="search-field group flex-1">
  <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
  <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={search}
  onChange={searchHandler}
  />
</div>
}
