import React from "react";
import { render } from "@testing-library/react";
import Site from "./Site";

test("dummy test runs successfully", () => {
  render(<Site />);
  expect(true).toBeTruthy();
});
