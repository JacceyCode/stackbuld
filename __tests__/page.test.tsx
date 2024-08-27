import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

beforeAll(() => render(<Page />));

describe("Home Page", () => {
  test("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
