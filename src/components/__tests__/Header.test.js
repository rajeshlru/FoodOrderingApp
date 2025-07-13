import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
test("Should load componenet with login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByText(/Login/i);
  const login2 = screen.getByText("Login");
  const login3 = screen.getByRole("button", { name: /Login/i });
  expect(login).toBeInTheDocument();
  expect(login2).toBeInTheDocument();
  expect(login3).toBeInTheDocument();
});

test("Should load componenet with Home", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const home = screen.getByText("Home");

  expect(home).toBeInTheDocument();
});

test("Should load componenet with About", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const About = screen.getByText("About");

  expect(About).toBeInTheDocument();
});

test("Should load componenet with click event", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button", { name: /Login/i });
  fireEvent.click(loginbutton);
  const logout = screen.getByText("Logout");
  expect(logout).toBeInTheDocument();
});
