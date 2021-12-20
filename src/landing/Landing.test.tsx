import React from "react";
import { render } from "@testing-library/react";
import Landing from "./Landing";

test("dummy test runs successfully", () => {
  render(<Landing />);
  expect(true).toBeTruthy();
});
