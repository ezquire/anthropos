import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';
import Navigation from './Nav';
import { addDonor, deleteDonor } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	addDonor() {
		this.props.addDonor(this.state.text);
	}

	deleteDonor(id) {
		this.props.deleteDonor(id);
	}

	renderDonors() {
		const { donors } = this.props;
		return (
			<ul className="list-group col-sm-4">
				{
					donors.map(donor => {
						return (
							<li key={donor.id} className="list-group-item">
								<div>{donor.text}</div>
								<div 
									className="list-item delete-button"
									onClick={() => this.deleteDonor(donor.id)} 
								>
									&#x2715;
								</div>
							</li>
						)
					})
				}
			</ul>
		);
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<input
					className="form-control"
					placeholder = "Add new donor"
					onChange={event => this.setState({text: event.target.value})}
				/>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => this.addDonor()}
					>Add Donor</button>
				{ this.renderDonors() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		donors: state
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addDonor, deleteDonor}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);