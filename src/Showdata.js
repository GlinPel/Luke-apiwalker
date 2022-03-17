import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Showdata = ({optionSelected, idSearch, setSearchData, searchData}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(!searchData){
            return;
        }
        setLoading(true);
        axios.get(`https://swapi.dev/api/${optionSelected}/${idSearch}/`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);
            setSearchData(false);
        })
        .catch( err => {
            console.log(err);
            setLoading(false);
            setData(null);
            setSearchData(false);
        }) 
    }, [searchData])
    return (
        <div>
            {loading ? <h2>Cargando data...</h2> : 
                data &&
                <>
                    <h2>{data.name ? data.name : data.title}</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </>
            }
        </div>
    )
}

export default Showdata