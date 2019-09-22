import React from 'react';

let CartItem = (props) => {

	return(

		<tr>
			<td>{props.product.name}</td>
			<td>{props.product.price}</td>
			<td>{props.product.quantity}</td>
			<td>{(props.product.quantity * props.product.price).toLocaleString()}</td>
			<td><button onClick={() => props.removeFromCartItems(props.product.id)} >Remove</button></td>

			<td></td>
			
		</tr>
	);
}

export default CartItem;

	