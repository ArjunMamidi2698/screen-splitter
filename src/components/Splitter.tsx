import { Box } from "@mui/material";
import randomColor from "randomcolor";
import { useState } from "react";
import { SplittedScreens } from "./SplittedScreens";
export type Props = {
	screenHeight: string;
};
export const Splitter = ({ screenHeight }: Props) => {
	const [spitScreen, setSplitScreen] = useState(false);
	return (
		<>
			{!spitScreen ? (
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					sx={{
						background: randomColor(),
					}}
					onClick={() => setSplitScreen(true)}
					height="100%"
					width="100%"
				>
				</Box>
			) : (
				<SplittedScreens screenHeight={screenHeight} />
			)}
		</>
	);
};
