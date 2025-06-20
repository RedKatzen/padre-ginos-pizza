import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../components/Pizza";

test("alt test renders on Pizza image", async () => {
  const name = "My favourite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="super cool" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
