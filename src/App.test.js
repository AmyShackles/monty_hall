import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Monty Hall Problem", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Monty Hall Problem/i);
  expect(title).toBeInTheDocument();
});
