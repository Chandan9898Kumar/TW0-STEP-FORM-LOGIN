import { render, screen, unmountComponentAtNode } from "@testing-library/react";
import App from "./App";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
describe("App component Testing", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    // unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("Verify two step  text", () => {
    act(() => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>,
        container
      );
    });
    const linkElement = screen.getByText(/TwoStep/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("Verify Login  text", () => {
    act(() => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>,
        container
      );
    });
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });
});
