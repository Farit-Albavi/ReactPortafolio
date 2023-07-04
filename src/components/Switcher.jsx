import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../functions/useDarkSide";
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

export default function Switcher() {

	const { themeEvent } = useContext(ThemeContext);

	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	themeEvent(darkSide)
	return (
		<>
			<DarkModeSwitch
				style={{ marginBottom: "0rem", marginTop: "0rem", marginRight: "1rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}
