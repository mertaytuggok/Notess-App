import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Textarea } from "./Components/Textarea/Textarea";
import { NoteList } from "./Components/NoteList/NoteList";

function App() {
  return (
    <div className="Main">
      <Header />
      <Search />
      <Textarea />
      <NoteList />
    </div>
  );
}

export default App;
