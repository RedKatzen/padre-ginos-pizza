import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../components/Cart";

// snapshot test for Cart component
// if component is rendered exacly the same as before, the test will pass
test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
