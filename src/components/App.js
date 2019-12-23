import React from 'react';

import HeaderTodoComponent from "./header/HeaderTodoComponent";
import MainComponent from "./todos/MainComponent";
import '../css/styles.css';

// ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
function App() {
  return (
    <>
      <HeaderTodoComponent />
      <MainComponent />
    </>
  );
}

export default App;
