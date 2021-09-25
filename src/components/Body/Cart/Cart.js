import React from 'react';
import './Cart.css'

const Cart = props => {
    let totalCost = 0;
    for (const scientist of props.data) {
        totalCost += scientist.researchCost;
    }
    return (
        <div className='cart'>
            <p>Total Cost: <b>${totalCost}</b></p>
            {props.data.map(scientist => <ShowName scientist={scientist} key={scientist.key} ></ShowName>)}
        </div>
    );
};
function ShowName(props) {
    const { name } = props.scientist;
    return (
        <div>
            <li>{name}</li>
        </div>
    )
}
export default Cart;