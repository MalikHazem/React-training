import { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import AddItemPage from './pages/add-item/add-item.page';
import ViewItemsPage from './pages/view-items/view-items.page';
import NotFound from './pages/not-found/not-found.component';

const ReadItems = () => JSON.parse(localStorage.getItem('todoList') || '[]');

function App() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");

    setTimeout(() => {
      const items = ReadItems();
      setItems(items);
      setLoading(false);
    }, 1000);

  }, []);

  useEffect(() => {
    if (items !== null) {
      console.log("Items has changed!");
      localStorage.setItem('todoList', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  }

  const deleteItem = (id) => {
    setItems(items?.filter(item => item.id !== id));
  }

  const finishItem = (id) => {
    setItems(items?.map(item => item.id === id ? { ...item, isDone: true } : item));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/add" element={<AddItemPage addItem={addItem} />} />
            <Route
              path="/view"
              element={
                <ViewItemsPage
                  items={items || []}
                  deleteItem={deleteItem}
                  finishItem={finishItem}
                  loading={loading}
                />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
