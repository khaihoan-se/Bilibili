import React from 'react'
import SearchPng from '../icon_search.png'

const SearchIcon = ({ className }) => {
  return (
    <img className={className} src={SearchPng} alt="Search Icon" />
  )
}

export default SearchIcon