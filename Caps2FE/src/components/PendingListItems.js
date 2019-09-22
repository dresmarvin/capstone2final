import React from 'react';

let PendingListItems = (props) => {
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

			<button onClick={() => props.setToaccept(props.product.id)}>
				Approve
			</button>
			
			<button onClick={() => props.setTodeclined(props.product.id)}>
				Decline
			</button>

			</td>
		</tr>
	);
}

export default PendingListItems;
			