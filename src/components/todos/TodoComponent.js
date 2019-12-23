import React from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Close from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

function TodoComponent(props) {
	console.log(props);
	const handleChange = event => {
		console.log(event.target.checked);
		props.onCheckTodo(props.id, event.target.checked);
	};

	const handleClick = () => {
		props.removeTodo(props.id);
	};

	return (
		<Grid item
			container
			xs={12}
			classes={{
				item: 'perfectTodo'
			}}
		>
			<Grid item
				xs={1}
				container
				alignItems="center"
			>
				<Checkbox checked={props.checked}
					onChange={handleChange}
				/>
			</Grid>

			<Grid item
				xs={9}
				container
				alignItems="center"
				style={{ wordBreak: 'break-all' }}
			>
				<Typography variant="h5"
					classes={{
						root: props.checked ? 'line' : 'defaultText'
					}}
				>
					{props.title}
				</Typography>
			</Grid>
			<Grid item
				xs={2}
			>
				<Fab onClick={handleClick}>
					<Close />
				</Fab>
			</Grid>
		</Grid>
	);
}

export default TodoComponent;
