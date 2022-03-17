import React, { useState } from 'react'

const Search = ({setOptionSelected, setSearchData, setIdSearch}) => {
    const [options] = useState([ "people", "planets", "films", "species"]);
    const [selected, setSelected] = useState("");
    const [id, setid] = useState("");
    function search(e){
        e.preventDefault();
        console.log(selected);
        console.log(id);
        if(selected === "" || id === ""){
            return;
        }
        setOptionSelected(selected);
        setIdSearch(id);
        setSearchData(true);
    }
    return (
        <div className="row mt-5">
            <div className="col-6">
                <div className="row g-3">
                    <div className="col-auto">
                        <label>Search for</label>
                    </div>
                    <div className="col-auto">
                        <select className="form-select" onChange={ e => setSelected(e.target.value)}>
                            <option value="">Escoge una opcion</option>
                            {options.map( e => (
                                <option key={e} value={e}>{e}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <form className="row g-3">
                    <div className="col-auto">
                        <label>Id</label>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control" onChange={ e => setid(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary mb-3" onClick={search}>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search