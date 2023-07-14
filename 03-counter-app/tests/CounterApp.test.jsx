import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Tests in the counter app component", () => {
  const value = 100;

  test("Must match wit the snapshot", () => {
    const { container } = render(<CounterApp value={value}></CounterApp>);

    expect(container).toMatchSnapshot();
  });

  test("Must show a 100 value", () => {
    render(<CounterApp value={value}></CounterApp>);

    expect(screen.getByText(value)).toBeTruthy();
  });

  test("Must increment +1", () => {
    render(<CounterApp value={value}></CounterApp>);
    fireEvent.click(screen.getByText("+1"), {});

    screen.debug(); //show us teh screen
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("Must decrement -1", () => {
    render(<CounterApp value={value}></CounterApp>);
    fireEvent.click(screen.getByText("-1"), {});

    screen.debug(); //show us teh screen
    expect(screen.getByText("99")).toBeTruthy();
  });

  test('Must reset the counter', ()=>{
    render(<CounterApp value={value}></CounterApp>);

    fireEvent.click(screen.getByText("-1"), {});
    fireEvent.click(screen.getByText("-1"), {});
    fireEvent.click(screen.getByText("-1"), {});

    expect(screen.getByText("97")).toBeTruthy();

    fireEvent.click(screen.getByText("Reset"), {});

    expect(screen.getByText("100")).toBeTruthy();

  });
});
