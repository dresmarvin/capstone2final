import React from 'react';

let AcceptedListItems = (props) => {
		console.log(props)
	return(
			
		<tr>
			<td></td>
			<td>{props.product.orderDetailProduct.name}</td>
			<td>{props.product.orderDetailProduct.price}</td>
			<td>{props.product.quantity}</td>
			<td>{(props.product.orderDetailProduct.price * props.product.quantity).toLocaleString()}</td>
			<td>{props.product.orderDetailOrder.date} </td>
			<td>{props.product.confirm_date}</td>
		</tr>
	);
}

export default AcceptedListItems;
			// <td><button onClick={() => props.removeFromCartItems(props.product.id)} >Remove</button></td>