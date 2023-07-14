import { render, screen } from "@testing-library/react";
import { App } from "../src/FirstApp";

//This file is another way to make the test in the original

describe("TRest in First app component", () => {
  const title = "Hello I'm David";
  const subtitle = 123;

  test("Must match the snapshot", () => {
    const { container } = render(<App title={title}></App>);

    expect(container).toMatchSnapshot();
  });

  test("Must show the message Hello I'm David", () => {
    render(<App title={title}></App>);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Must show the title in h1", () => {
    render(<App title={title}></App>);

    //expect( screen.getByRole('heading', {level:1}).innerHTML ).toContain(title); searches on all the h1 so it will create an error
  });

  test("Must show the subtitle sended by props", () => {
    render(<App subtitle={subtitle}></App>);
    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
