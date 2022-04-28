import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import MainPage from "./MainPage";
import CreateArticle from "./CreateDocument";
import ArticleDetails from "./ArticleDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
      <Route path="/CreateArticle" element={<CreateArticle />} />
    </Routes>
  );
}

export default App;
