
class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	async handle_logout() {
		const response = await fetch('/logout', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			method: 'POST'
		});
		console.log(response);
		if (response.status == 200) {
			console.log("sucesss");
			window.location.replace('/login/index.html');
		} else {
			alert(response.message);
		}
	}

	handle_home() {
		window.location.replace('/home/index.html');
	}
	handle_messages() {
		window.location.replace('/messages/index.html');
	}
	handle_about() {
		window.location.replace('/about/index.html');
	}

	render() {
		return React.createElement(
			'div',
			{ style: { backgroundColor: '#F5F5F5', padding: '0.5rem' } },
			React.createElement(
				'div',
				{ 'class': 'btn-group btn-group-lg', role: 'group', 'aria-label': 'Basic outlined example' },
				React.createElement(
					'button',
					{ onClick: this.handle_home, type: 'button', 'class': 'btn btn-outline-dark' },
					'Home'
				),
				React.createElement(
					'button',
					{ onClick: this.handle_messages, type: 'button', 'class': 'btn btn-outline-dark' },
					'Messages'
				),
				React.createElement(
					'button',
					{ onClick: this.handle_logout, type: 'button', 'class': 'btn btn-outline-dark' },
					'Logout'
				),
				React.createElement(
					'button',
					{ onClick: this.handle_about, type: 'button', 'class': 'btn btn-outline-dark' },
					'About'
				)
			)
		);
	}
}

//export default NavBar