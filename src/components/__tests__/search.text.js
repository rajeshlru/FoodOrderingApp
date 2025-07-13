// import { fireEvent, render, screen } from "@testing-library/react";
// import { act} from "react-dom/test-utils";
// import Body from "../Body";
// import "@testing-library/jest-dom";
// import { BrowserRouter } from "react-router-dom";
// import MOCK_DATA from "../mocks/mockResListData.json";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       Promise.resolve(MOCK_DATA);
//     },
//   });
// });

//  it("should search for reslist with k textinput", async () => {
//    await act(async () => {
//      render(
//        <BrowserRouter>
//          <Body />
//        </BrowserRouter>
//      );
//    });

//   const searchInput = screen.getByPlaceholderText("Search for restaurants");
//   expect(searchInput).toBeInTheDocument();

//   fireEvent.change(searchInput, { target: { value: "k" } });
//   const searchButton = screen.getByRole("button", { name: "Search" });
//   expect(searchButton).toBeInTheDocument();

//   fireEvent.click(searchButton);

//   const resList = await screen.findAllByTestId("res-list");
//   expect(resList.length).toBeGreaterThan(0);
// });

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";

// ✅ Corrected fetch mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should search for reslist with k textinput", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "🔍" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "k" } });

  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBeGreaterThan(0);
});
