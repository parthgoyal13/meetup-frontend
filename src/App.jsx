import React,{useState} from "react"
import ListingPage from "./pages/ListingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  const [searchTitleOrTag, setSearchTitleOrTag] = useState("");

  const handleSearch = (query) => {
    setSearchTitleOrTag(query);
  };
  return (
    <>
    <Header onSearch={handleSearch} />
    <ListingPage searchTitleOrTag={searchTitleOrTag} />
    </>
  )
}

export default App
