import { render } from "@testing-library/react";
import { App } from "../src/FirstApp";

describe("TRest in First app component", () => {
  test("Must match the snapshot", () => {
    //This means that at the moment tha teh component is render it must match the OG snapshot

    const title = "Hello I'm a test";
    const { container } = render(<App title={title}></App>);
  
    expect(container).toMatchSnapshot();//the first time is render an snapshot will be crated in the folder with the same name
  });

  test("Must show the title", ()=>{
    const title = "Hello I'm a test";
    const { getByText, getByTestId } = render(<App title={title}></App>);

    expect( getByText("Hello I'm a test") ).toBeTruthy();

    expect ( getByTestId('testTitle').innerHTML ).toContain(title)

  });

  test('Must show the subtitle sended by props',() => {
    const subtitle = 123;
    const { getByText } = render(<App subtitle={subtitle}></App>);

    expect( getByText(subtitle) ).toBeTruthy();

  });



});
