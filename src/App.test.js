import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Enzyme setup
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// Mock your getData module
let mockPromise;
jest.mock("./getData", () => {
  return jest.fn(() => {
    mockPromise = Promise.resolve({ name: "Spider man" });
    return mockPromise;
  });
});

it("renders without crashing", () => {
  const wrapper = shallow(<App />);

  // You can return promises in your tests, and Jest will wait for the promise to complete
  // https://facebook.github.io/jest/docs/en/asynchronous.html#promises
  return mockPromise.then((a) => {
    // force component to re-render
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
    wrapper.update();
    
    expect(wrapper.html()).toEqual(`<h1>Name: Spider man</h1>`);
  });
});
