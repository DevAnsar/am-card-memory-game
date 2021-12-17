import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import {Game} from "../lib";

test("sample test", () => {
  jest.useFakeTimers();

  render(<Game />);

  const react1 = screen.getByTestId("11");
  const react2 = screen.getByTestId("12");
  const vue1 = screen.getByTestId("7");

  fireEvent.click(react1);

  expect(react1).toHaveClass("flip");

  fireEvent.click(vue1);

  act(() => jest.advanceTimersByTime(1600));

  expect(react1).not.toHaveClass("flip");
  expect(vue1).not.toHaveClass("flip");

  fireEvent.click(react1);
  fireEvent.click(react2);

  act(() => jest.advanceTimersByTime(1600));

  expect(react1).toHaveClass("flip");
  expect(react2).toHaveClass("flip");
});
