import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search';
import Showdata from './Showdata';

const Starwars = () => {
    const params = useParams();
    const [optionSelected, setOptionSelected] = useState("");
    const [idSearch, setIdSearch] = useState("");
    const [searchData, setSearchData] = useState(false);

    useEffect(() => {
        if(params.id && !isNaN(params.id)){
            setIdSearch(params.id);
            setOptionSelected("people");
            setSearchData(true);
        }
    }, [])
    
    
    return (
        <div className="container">
            <Search 
                setOptionSelected={setOptionSelected}
                setSearchData={setSearchData}
                setIdSearch={setIdSearch}
            /> 
            <Showdata 
                optionSelected={optionSelected}
                idSearch={idSearch}
                setSearchData={setSearchData}
                searchData={searchData}
            />
        </div>
    )
}

export default Starwars