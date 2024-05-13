import React from 'react';
import './App.css';
import AddTask from './AddTask';
import ListTask from './ListTask';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Management</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;