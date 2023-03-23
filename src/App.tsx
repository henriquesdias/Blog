import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
