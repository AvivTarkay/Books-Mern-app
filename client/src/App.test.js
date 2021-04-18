import { render, screen } from "@testing-library/react";
import App, { getAverage } from "./App";

// test("renders learn react link", () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });
test("should return average", () => {
	expect(getAverage(4, 5, 6)).toBe(5);
});
