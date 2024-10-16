import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBookComponent from './components/AddBookComponent';
import EditBookComponent from './components/EditBookComponent';
import ListBooksComponent from './components/ListBooksComponent';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ListBooksComponent />} />   
        <Route path="/AddBook" element={<AddBookComponent />} />
        <Route path="/EditBook" element={<EditBookComponent />} />

      </Routes>
    </Router></>
  );
}

export default App;
