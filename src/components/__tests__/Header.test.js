import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

describe("Test Cases for Header Component", () => {
  it("Should render header with login button in it", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "login" });

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render header component with cart 0 item in it", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cartItemsZero = screen.getByText("Cart - [0]");

    //Assertion
    expect(cartItemsZero).toBeInTheDocument();
  });

  it("Should render header component with cart in it", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cartItems = screen.getByText(/Cart/);

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render signup button onClick on login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "logOut" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
