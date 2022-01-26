import login from "../../login/login.html";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}
	// async handleSubmit(event) {
	// 	const id = event.target[0].value
	// 	const password = event.target[1].value

	// 	const response = await fetch('/login',{
	// 		headers: {
	//         	'Content-Type':'application/json',
	//         	'Accept':'application/json'
	//     	},
	// 		method:'POST',
	// 		body: JSON.stringify({id:id,password:password }) 
	// 	});

	// 	if ( response.status == 200 )
	// 	{
	// 		props.history.push('/home');		  
	// 	}
	// 	else 
	// 	{
	// 	  const err = await response.text();
	// 	  alert( err );
	// 	}		
	// }


	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(ReactButton, { name: 'Posts' }),
			React.createElement(ReactButton, { name: 'Messages' }),
			React.createElement(ReactButton, { name: 'Logout' })
		);
	}
}

class ReactButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.name };
		//this.handle_click = this.handle_click.bind( this ); 
	}

	// handle_click()
	// {
	// 	props.history.push(login);
	// }

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'button',
				{ type: 'button', 'class': 'btn btn-primary' },
				this.state.name
			)
		);
	}
}