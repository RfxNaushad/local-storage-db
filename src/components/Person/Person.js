import React from 'react';
import { addToDb, deleteDb } from '../../Utilities/fakedb';

const Person = (props) => {
     const {name, email, _id, company} = props.info
     
     const handleSend = (id) => {
         console.log(id)
        //  calling fake data base and sending id to the fakedb
         addToDb(id);
     } 
     const handleDelete = id => {
         deleteDb(id);
     }
    return (
        <div style= {{border: "2px solid gray", width: " 50%", margin: "5px auto"}}>
            <h1> Name : {name}</h1>
            <h3>Works At: {company}</h3>
            <p> Email : {email}</p>

            <button onClick={() => handleSend(_id)}>Send</button>
            <button onClick={() => handleDelete(_id)}>remove</button>
        </div>
    );
};

export default Person;