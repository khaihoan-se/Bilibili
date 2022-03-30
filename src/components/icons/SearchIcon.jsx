import React from 'react'
import SearchPng from '../../asset/icon_search.png'

const SearchIcon = ({ className }) => {
  return (
    <img className={className} src={SearchPng} alt="Search Icon" />
  )
}

export default SearchIcon