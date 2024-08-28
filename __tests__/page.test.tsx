import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/(Home)/page";

describe("Home Page", () => {
  test("renders a heading", () => {
    render(<Page />);
    const heading = screen.getAllByRole("heading", { level: 3 });
    const image = screen.getAllByAltText(/product image/i);

    expect(heading[0]).toBeInTheDocument();
    expect(heading.length).toBeGreaterThan(5);
    expect(image[0]).toBeInTheDocument();
    expect(image.length).toBeGreaterThan(5);
  });
});
