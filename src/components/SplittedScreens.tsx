import { Grid } from "@mui/material";
import { Props, Splitter } from "./Splitter";

export const SplittedScreens = ({ screenHeight }: Props) => {
	const splitHeight = `calc( ${screenHeight} / 2 )`;
	return (
		<Grid container spacing={0}>
			{Array(4)
				.fill(1)
				.map((e, index) => (
					<Grid
						item
						xs={6}
						height={splitHeight}
						key={`grid-item-${e}-${splitHeight}-${index}`}
					>
						<Splitter screenHeight={splitHeight} />
					</Grid>
				))}
		</Grid>
	);
};
