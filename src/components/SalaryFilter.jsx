import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSortingType } from '../features/job/jobSlice'
export default function SalaryFilter() {
  const dispatch = useDispatch()
  const { sortingType } = useSelector(state => state.jobs)

  const sortingHandler = (e) => {
    dispatch(setSortingType(e.target.value))
  }
  return <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1" value={sortingType} onChange={sortingHandler}>
    <option value="All">Default</option>
    <option value="Asc">Salary (Low to High)</option>
    <option value="Dsc">Salary (High to Low)</option>
  </select>
}
