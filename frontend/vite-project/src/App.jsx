import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await getItems();
      console.log('GET ITEMS SUCCESS:', res.data);
      setItems(res.data);
    } catch (error) {
      console.error('GET ITEMS ERROR:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item Manager</h1>
      <ItemForm onItemAdded={fetchItems} />
      <ItemList items={items} onRefresh={fetchItems} />
    </div>
  );
}

export default App;