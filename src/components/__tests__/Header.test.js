import { Provider } from "react-redux";
import { Header } from "../Header";
import { render } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("Should render Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );
  const cartText = screen.getByText("Cart -(0 items)");

  //Assertion
  expect(cartText).toBeInTheDocument()

});
