import { useState } from "react";
import "./App.css";
import JavaScriptLogo from "./components/JavaScriptLogo";
import { Container, Stack, Typography } from "@mui/material";

function App() {
	return (
		<main>
			<Container maxWidth="sm">
				<Stack direction="row" gap={2} alignItems={"center"} justifyContent={"center"}>
					<JavaScriptLogo />
					<Typography variant="h2" component="h1">
						JavaScript Quiz
					</Typography>
				</Stack>
			</Container>
		</main>
	);
}

export default App;
