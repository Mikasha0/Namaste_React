import { render, waitFor, screen} from "@testing-library/react";
import { Body } from "../Body";
import { RestaurantList_Data } from "./restaurantListMockData.json";
import "@testing-library/jest-dom"
import { act } from "react";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantList_Data);
    },
  });
});

it("Should render the Body Component with Search", async () => {
  act(async() => render(<Body />)) 

  const buttons = screen.getByText("Search");

  expect(buttons).toBeInTheDocument();
});
