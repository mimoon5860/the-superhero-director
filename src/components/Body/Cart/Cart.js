import React from 'react';
import './Cart.css'

const Cart = props => {

    // Total Research Cost calculation
    let totalCost = 0;
    for (const scientist of props.data) {
        totalCost += scientist.researchCost;
    }

    return (
        <div className='cart'>
            <p>Total Research Cost: <b>${totalCost}</b></p>
            {props.data.map(scientist => <ShowName scientist={scientist} key={scientist.key} ></ShowName>)}
        </div>
    );
};


// Component for Add name on cart 
function ShowName(props) {
    const { name } = props.scientist;
    return (
        <div className='name'>
            <li>{name}</li>
        </div>
    )
}
export default Cart;