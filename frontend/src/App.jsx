import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CreatePersonPage from "./pages/create-person-page/CreatePersonPage";
import SearchPersonPage from "./pages/search-person-page/SearchPersonPage";
import UpdatePersonPage from "./pages/update-person-page/UpdatePersonPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="createPerson" element={<CreatePersonPage />} />
        <Route path="searchPerson" element={<SearchPersonPage />} />
        <Route path=":personId" element={<UpdatePersonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
