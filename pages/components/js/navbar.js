
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			indicator: false
		};
	}

	async componentDidMount() {
		const response = await fetch('/api/is_admin');

		if (response.status != 200) throw new Error('Error in user token');

		let res = await response.json();
		this.setState({ indicator: res });
	}

	async handle_logout() {
		const response = await fetch('/api/logout', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			method: 'POST'
		});
		console.log(response);
		if (response.status == 200) {
			console.log("sucesss");
			window.location.replace('/');
		} else {
			alert(response.message);
		}
	}

	handle_home() {
		window.location.replace('/home/');
	}
	handle_messages() {
		window.location.replace('/messages/');
	}
	handle_about() {
		window.location.replace('/about/');
	}
	handle_admin() {
		window.location.replace('/admin/');
	}

	render() {
		return React.createElement(
			'div',
			{ style: { backgroundColor: '#F5F5F5', padding: '0.5rem', textAlign: 'center' } },
			React.createElement(
				'div',
				{ 'class': 'btn-group btn-group-lg', role: 'group', 'aria-label': 'Basic outlined example' },
				React.createElement(
					'button',
					{ onClick: this.handle_admin, type: 'button', 'class': 'btn btn-outline-dark',
						style: this.state.indicator ? {} : { display: 'none' } },
					'Admin'
				),
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
					{ onClick: this.handle_about, type: 'button', 'class': 'btn btn-outline-dark' },
					'About'
				),
				React.createElement(
					'button',
					{ onClick: this.handle_logout, type: 'button', 'class': 'btn btn-outline-dark' },
					'Logout'
				)
			)
		);
	}
}