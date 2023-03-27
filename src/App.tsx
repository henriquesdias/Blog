import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ResetStyle } from "./styles/Reset";
import MainPage from "./pages/MainPage";
import Article from "./pages/Article";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comments/:postId" element={<Article />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
