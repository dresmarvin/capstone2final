import React, {useState , useEffect} from 'react';

import PendingListItems from './PendingListItems';

let PendingList = () => {
	// let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

	let [pendingItems, setPendingItems] = useState([]);



	useEffect( () => {
		fetch("http://localhost:8080/status/pending")
		.then(res => res.json())
		.then(data => {
			setPendingItems(data);
		});
	}, []);

		// console.log(pendingItems)


	let displayCartItems = () =>
		pendingItems.map( product => 
			<PendingListItems 
			key={product.id} 
			product={product}
			setToaccept = {setToaccept}
			setTodeclined = {setTodeclined}
			/>
			)


	let setToaccept =(id,status) =>{
		fetch("http://localhost:8080/orderdetails/setstatus/"+ id + "/accepted", {
			method: 'put'
			
		})
		.then(res => 
			console.log(res)
		)

		let updatedLists = pendingItems.filter(stats => stats.id !== id);
		setPendingItems(updatedLists);
	}


		let setTodeclined =(id,status) =>{
		fetch("http://localhost:8080/orderdetails/setstatus/"+ id + "/declined", {
			method: 'put'
			
		})
		.then(res => 
			console.log(res)
		)

		let updatedLists = pendingItems.filter(stats => stats.id !== id);
		setPendingItems(updatedLists);
	}

	return(
		<div style={{ color: 'white' }}>
			<h1
				style={{ color: 'white', textAlign: 'center'}}>
				Pending Items
			</h1>
			<table className="table table-striped"  style={{backgroundColor: '#66e377'}}>
				<thead>
					<tr style={{ color: 'white' }}>
						<th>Member</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Time Ordered </th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{displayCartItems()}
				</tbody>

			</table>
		</div>

	);
}

export default PendingList;








// PendingList.js