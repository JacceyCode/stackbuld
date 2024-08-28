import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  beforeEach(() => render(<Header />));

  // 1. Test for logo
  test("Displays logo", () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  // 2. Test for Name
  test("Displays Name", () => {
    const name = screen.getByText(/ritstore/i);
    expect(name).toBeInTheDocument();
  });

  // 3. Test for page title
  test("Displays Page title", () => {
    const pageTitle = screen.getByRole("heading", {
      level: 1,
    });

    expect(pageTitle).toHaveTextContent(/product catalogue/i);
  });

  // 4. Test for add product button
  test("Displays Add Product Button", () => {
    const addProduct = screen.getByRole("button");

    expect(addProduct).toBeInTheDocument();
    expect(addProduct).toHaveTextContent(/add product/i);
  });
});
