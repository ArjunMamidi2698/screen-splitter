import { Splitter } from "./components/Splitter";
import { Grid } from "@mui/material";

function App() {
	return (
		<div className="App">
			<Grid container spacing={0}>
				<Grid item xs={12} height="100vh">
					<Splitter screenHeight="100vh" />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
