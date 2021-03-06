import React, { useEffect, useState } from 'react';
import './Body.css'
import Cart from './Cart/Cart';
import ScientistCard from './ScientistCard/ScientistCard';

const Body = () => {

    // State Effect and function for api call 
    const [ScientistData, setScientistData] = useState([]);
    useEffect(() => {
        fetch('./scientist.json')
            .then(res => res.json())
            .then(data => setScientistData(data))
    }, [])

    // State and function for Count and Show name on cart 
    const [ScientistCount, setScientistCount] = useState(0)
    const [AddScientistToCart, setAddScientistToCart] = useState([]);

    const unique = [];
    for (const key of AddScientistToCart) {
        unique.push(key.key);
    }
    function addScientist(scientist) {
        if (unique.includes(scientist.key)) {
            return;
        }
        else {
            const addedScientist = [...AddScientistToCart, scientist]
            setAddScientistToCart(addedScientist)
            const count = ScientistCount + 1;
            setScientistCount(count)
        }

    }

    return (
        <div className='body'>
            <div className='all-cards'>
                {
                    ScientistData.map(scientist => <ScientistCard addScientist={addScientist} data={scientist} key={scientist.key}></ScientistCard>)
                }
            </div>
            <div className='cart-wrapper'>
                <h3><i className="fas fa-users"></i> Scientist Added: {ScientistCount}</h3>
                <Cart data={AddScientistToCart}></Cart>
            </div>
        </div>
    );
};

export default Body;