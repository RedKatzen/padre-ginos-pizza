import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../components/Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", () => {
  const name = "My favourite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="super cool" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", () => {
  const screen = render(
    <Pizza name={"something else"} description="super cool" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
