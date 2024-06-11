const COLORS = {
	green: {
		bg: "#ECF7D4",
		badge: "#D6F497",
	},
	orange: {
		bg: "#F9EFE1",
		badge: "#F7E0B8",
	},
	red: {
		bg: "#FBE5E7",
		badge: "#FDC6C7",
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};
