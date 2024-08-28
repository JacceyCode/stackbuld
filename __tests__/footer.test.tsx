import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  beforeEach(() => render(<Footer />));

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
});
