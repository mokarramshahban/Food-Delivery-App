import { render, screen } from "@testing-library/react";
import { RestaurantCard, IsOpenRestaurant } from "../RestaurantCard";
import mockData from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card with name in it", () => {
  render(<RestaurantCard resData={mockData} />);

  const name = screen.getByText("Pizza Hut");

  //Assertion
  expect(name).toBeInTheDocument();
});

it("Should render restaurant card with open label", () => {
  const RestaurantOpenCard = IsOpenRestaurant(RestaurantCard);

  render(<RestaurantOpenCard resData={mockData} />);

  const open = screen.getByText("Restaurant is now Open");

  expect(open).toBeInTheDocument();
});
