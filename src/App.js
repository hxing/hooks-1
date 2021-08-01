import { useState, useEffect } from "react";
import "./styles.css";

function useClock() {
	const [timer, setTimer] = useState();
	useEffect(() => {
		setInterval(() => {
			setTimer(new Date().toLocaleTimeString());
		}, 1000);
	}, []);
	return timer;
}

export default function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>add</button>
			<div>{useClock()}</div>
		</div>
	);
}
