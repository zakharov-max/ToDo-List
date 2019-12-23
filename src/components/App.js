import React from 'react';

import HeaderTodoComponent from "./header/HeaderTodoComponent";
import MainComponent from "./todos/MainComponent";
import Main from './main/main';
import '../css/styles.css';

// ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
function App() {
  return (
    <>
      <HeaderTodoComponent />
      <MainComponent />
      {/* <Main /> */}
    </>
  );
}

export default App;
