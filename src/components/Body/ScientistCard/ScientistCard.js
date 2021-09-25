import React from 'react';
import './ScientistCard.css'

const ScientistCard = props => {

    // Destructuring for make cards
    const { name, university, age, nationality, photo, researchCost, subject } = props.data;

    return (
        <div className='scientist-card'>
            <img src={photo} alt="" />
            <div>
                <p><b>Name: </b>{name}</p>
                <p><b>Age: </b>{age}</p>
                <p><b>Country: </b>{nationality}</p>
                <p><b>University: </b>{university}</p>
                <p><b>Subject: </b>{subject}</p>
                <p><b>Research Cost: </b>${researchCost}</p>
            </div>
            <button onClick={() => props.addScientist(props.data)}><i className="fas fa-user-plus"></i>  Add Scientist</button>
        </div>
    );
};

export default ScientistCard;