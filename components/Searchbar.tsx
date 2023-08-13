"use client";
import React, { useState } from 'react'
import {SeachManufacturer} from '@/components'

const Searchbar = () => {
    const [manufacturer,setManufacturer]=useState('')
    const handleSearch=()=>{
    
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SeachManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default Searchbar