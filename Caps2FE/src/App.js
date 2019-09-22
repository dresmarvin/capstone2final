import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Product from './components/Product';
import Products from './components/Products';
import ProductUser from './components/ProductUser';
import ProductsUser from './components/ProductsUser';
import Cart from './components/Cart';
import AddProductStatusForm from './components/AddProductStatusForm';
import UploadImage from './components/UploadImage';
import AdminLogin from './components/AdminLogin';
import PendingList from './components/PendingList';
import AcceptedList from './components/AcceptedList';
import DeclinedList from './components/DeclinedList';

function App() {
	let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username") ? true : false)
	let [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") ==="true" ? true : false)
	console.log(localStorage.getItem("isAdmin"))

	// let [isAdmin,setIsAdmin]= useState(localStorage.getItem("isAdmin") ? true : false)
	// console.log(isLoggedIn,isAdmin)

	let renderRegisterForm = () => 
		<RegisterForm setIsLoggedIn={setIsLoggedIn} />

	let renderLoginForm = () => 
		<LoginForm setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin}/>


	let renderAdminLogin = () => 
		<AdminLogin setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />

	let logoutClickHandler = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("isAdmin");
		localStorage.removeItem("userId")
		setIsLoggedIn(false);
	}



	// let renderAddProductStatus = () => 
	// 	<AddProductStatusForm setIsLoggedIn={setIsLoggedIn} />

	// let displayAdminAddProductStatus = ()=>
	// 	<AddProductStatusForm/>

	// let displayProducts = ()=>
	// 	<AddProductStatusForm/>

let display = () => {
if(isLoggedIn !== true) {
	return(
		<React.Fragment>
		<nav className="navbar navbar-expand-sm bg-light justify-content-center">
 			<ul className="navbar-nav">
   				<li className="nav-item">
	<Link className="nav-link" to="/register">Sign Up</Link>
   				</li>
   				<li className="nav-item">
	<Link className="nav-link" to="/login">Member</Link>
  		 		</li>
   
    			<li className="nav-item">
    <Link className="nav-link" to="/login/admin">Admin</Link>
  				 </li>
 			</ul>
		</nav>

<Route path="/register" exact render={renderRegisterForm}/>
<Route path="/login" exact render={renderLoginForm}/>
<Route path="/login/admin" exact render={renderAdminLogin}/>

</React.Fragment>) 


} else if(isLoggedIn === true && isAdmin === false)  {

return(
<React.Fragment>
	<nav className="navbar navbar-expand-sm bg-light justify-content-center">
 		<ul className="navbar-nav">
   			<li className="nav-item">
	<Link className="nav-link" to="/productuser">Products</Link>
   			</li>
   			<li className="nav-item">
	<Link className="nav-link" to="/mycart">My Cart</Link>
   			</li>
   			<li className="nav-item">
<button onClick={logoutClickHandler} className="btn btn-default">Logout</button>
   			</li>
 		</ul>
	</nav>

<Route path="/productuser" exact component={ProductsUser}/>
<Route path="/mycart" exact component={Cart}/>
</React.Fragment>
)


}else if(isLoggedIn === true && isAdmin === true)  {

return(
<React.Fragment>
	<nav className="navbar navbar-expand-sm bg-light justify-content-center">
 			  <ul className="navbar-nav">


 			    <li className="nav-item">
 					<Link className="nav-link" to="/productdetails/">Products</Link>
 			    </li>
 			    <li className="nav-item">
 					<Link className="nav-link" to="/productupdate/">Add Products</Link>
 			    </li>
 			    <li className="nav-item">
					<Link className="nav-link" to="/pending">Pending Items</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/accepted">Accepted Items</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/decline">Declined Items</Link>
				</li>
 			    <li className="nav-item">
 					<button onClick={logoutClickHandler} className="btn btn-default">Logout</button>
 			    </li>
 			  </ul>
 			</nav>

 			<Route path="/productdetails/" exact component={Products}/>
 			<Route path="/pending" exact component={PendingList}/>
			<Route path="/accepted" exact component={AcceptedList}/>
			<Route path="/decline" exact component={DeclinedList}/>
			<Route path="/productupdate/" exact component={AddProductStatusForm}/>
</React.Fragment>
		)


	}

}

   return (
  	<BrowserRouter>
	    <div className="App container-fluid">
	    	<div className="row">
	    		<div className="col-12 col-md-8 offset-md-2">
	    			{ display() }
	    		</div>
	    	</div>
	    </div>
	</BrowserRouter>
  );
}

export default App;




