import React, { useState } from 'react'

const Search = ({handleSearch}) => {
    const [city, setCity]= useState('');
    return (
        <div>
            <div className='d-flex flex-column'>
                <input onChange={(e)=> setCity(e.target.value) } type="text" placeholder='Enter City...' className='form-control rounded-pill shoadow-sm w-auto' />
                <button onClick={()=> handleSearch(city)}  className='btn btn-primary'>Search</button>
            </div>
        </div>
    )
}

export default Search
