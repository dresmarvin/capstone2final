import React from 'react';

let DeclinedListItems = (props) => {
		console.log(props)
	return(
			
		<tr>
			<td></td>
			<td>{props.product.orderDetailProduct.name}</td>
			<td>{props.product.orderDetailProduct.price}</td>
			<td>{props.product.quantity}</td>
			<td>{(props.product.orderDetailProduct.price * props.product.quantity).toLocaleString()}</td>
			<td>{props.product.orderDetailOrder.date} </td>
			<td>

			</td>
		</tr>
	);
}

export default DeclinedListItems;
			// <td><button onClick={() => props.removeFromCartItems(props.product.id)} >Remove</button></td>