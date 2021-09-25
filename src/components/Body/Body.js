import React, { useEffect, useState } from 'react';
import './Body.css'
import Cart from './Cart/Cart';
import ScientistCard from './ScientistCard/ScientistCard';

const Body = () => {
    const [ScientistData, setScientistData] = useState([]);
    useEffect(() => {
        fetch('./scientist.json')
            .then(res => res.json())
            .then(data => setScientistData(data))
    }, [])
    const [ScientistCount, setScientistCount] = useState(0)
    const [AddScientistToCart, setAddScientistToCart] = useState([]);
    function addScientist(scientist) {
        const addedScientist = [...AddScientistToCart, scientist]
        setAddScientistToCart(addedScientist)


        const count = ScientistCount + 1;
        setScientistCount(count)
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