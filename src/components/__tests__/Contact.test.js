import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component Test Case", () => {
  it("Should load heading element inside contact element", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load send message button inside contact component", () => {
    render(<Contact />);

    const sendMessageBtn = screen.getByText("Send Message");
    //Assertion
    expect(sendMessageBtn).toBeInTheDocument();
  });

  it("Should load all input element inside contact component", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    //Assertion
    expect(inputs.length).toBe(3);
  });
});
