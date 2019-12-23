import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddTodoComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			titleValue: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.addTodo(this.state.titleValue);
		this.setState({ titleValue: '' });

	}

	handleChange(e) {
		this.setState({
			titleValue: e.target.value
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Grid container
					spacing={8}
					classes={{
						root: 'marginContainer'
					}}
				>
					<Grid item
						xs={9}
					>
						<TextField label="Title"
							value={this.state.titleValue}
							onChange={(e) => this.handleChange(e)}
							fullWidth
						/>
					</Grid>
					<Grid item
						xs={3}
						container
						justify="flex-end"
					>
						<Button color="primary"
							variant="contained"
							type="submit"
							size="large"
						>
							Add
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

export default AddTodoComponent;