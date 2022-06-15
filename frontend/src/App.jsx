import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CreateClientPage from "./pages/create-client-page/CreateClientPage";
import SearchClientPage from "./pages/search-client-page/SearchClientPage";
import UpdateClientPage from "./pages/update-client-page/UpdateClientPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="createClient" element={<CreateClientPage />} />
        <Route path="searchClient" element={<SearchClientPage />} />
        <Route path=":clientId" element={<UpdateClientPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
