import React from "react";
import { render, screen, within } from "@testing-library/react";
import { PizzaShopApp } from "../App";
import userEvent from "@testing-library/user-event";

describe("Code Oven Application", () => {
  it("renders application heading", () => {
    render(<PizzaShopApp />);
    const heading = screen.getByText("The Code Oven");
    expect(heading).toBeInTheDocument();
  });

  it("renders menu list", () => {
    render(<PizzaShopApp />);
    const menuList = screen.getByTestId("menu-list");
    const menuItems = within(menuList).getAllByRole("listitem");

    expect(menuItems.length).toEqual(8);
    expect(
      within(menuItems[0]).getByText("Margherita Pizza"),
    ).toBeInTheDocument();
    expect(
      within(menuItems[1]).getByText("Pepperoni Pizza"),
    ).toBeInTheDocument();
    expect(
      within(menuItems[2]).getByText("Veggie Supreme Pizza"),
    ).toBeInTheDocument();
  });

  it("renders a shopping cart", () => {
    render(<PizzaShopApp />);
    const cart = screen.getByTestId("shopping-cart");
    const placeOrderButton = within(cart).getByRole("button");

    expect(placeOrderButton).toBeInTheDocument();
    expect(placeOrderButton).toBeDisabled();
    expect(placeOrderButton).toHaveTextContent("Place my order");
  });

  it("adds menu items to shopping cart", async () => {
    render(<PizzaShopApp />);

    const menuList = screen.getByTestId("menu-list");
    const menuItems = within(menuList).getAllByRole("listitem");

    const addButton = within(menuItems[0]).getByRole("button");
    await userEvent.click(addButton);

    const cart = screen.getByTestId("shopping-cart");
    const placeOrderButton = within(cart).getByRole("button");

    expect(within(cart).getByText("Margherita Pizza")).toBeInTheDocument();
    expect(placeOrderButton).toBeEnabled();
  });
});
