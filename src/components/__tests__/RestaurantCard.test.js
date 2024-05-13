import { render, screen } from "@testing-library/react";
import { RestaurantCard, withHighRatings } from "../RestaurantCard";
import MOCK_DATA from "./mockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with Props", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
});
it("Should render RestaurantCard with restaurant name", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const name = screen.getByText("UBQ by Barbeque Nation");

  //Assertion
  expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card with High rated on it", () => {
  const RestaurantCardWithHighRating = withHighRatings(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardWithHighRating resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const highRated = screen.getByText("High Rated");

  //Assertion
  expect(highRated).toBeInTheDocument();
});
