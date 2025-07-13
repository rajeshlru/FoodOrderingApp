import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Contact Component should render", () => {
//   render(<Contact />);

//   const heading = screen.getByRole("heading");
//   const button = screen.getByPlaceholderText("Name", "Message", "Submit");
//   expect(heading).toBeInTheDocument();
//   expect(button).toBeInTheDocument();
//   console.log(heading);

//   console.log(button);
// });

// test("checking input boxes", () => {
//   render(<Contact />);
//   const input = screen.getAllByRole("textbox");

//   expect(input.length).toBe(2);
//   expect(input.length).not.toBe(3);
//   expect(input[0]).toHaveAttribute("placeholder", "Name");
//   expect(input[1]).toHaveAttribute("placeholder", "Message");
//   console.log(input[0].placeholder);
//   console.log(input[1].placeholder);
// });

describe("Contact Component", () => {
  it("Contact Component should render", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    const button = screen.getByPlaceholderText("Name", "Message", "Submit");
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    console.log(heading);

    console.log(button);
  });

  test("checking input boxes", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
    expect(input.length).not.toBe(3);
    expect(input[0]).toHaveAttribute("placeholder", "Name");
    expect(input[1]).toHaveAttribute("placeholder", "Message");
    console.log(input[0].placeholder);
    console.log(input[1].placeholder);
  });
});
