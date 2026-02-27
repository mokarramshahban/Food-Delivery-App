import { act, screen, render } from "@testing-library/react";
import MOCK_DATA from "../__mocks__/mockResListData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render 20 cards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsButtonSearch = screen.getAllByTestId("resCard");
  expect(cardsButtonSearch.length).toBe(20)

});
