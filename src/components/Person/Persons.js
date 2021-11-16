import React, { useEffect, useState } from 'react';
import Person from './Person';

const Persons = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
       fetch('./information.json')
       .then(res => res.json())
       .then(data => setInfo(data))
    }, [])
    console.log(info)
    return (
        <div>
            <h2>Showing information</h2>
            {
                info.map(p => <Person key={p._id} info={p}></Person>)
            }
        </div>
    );
};

export default Persons;