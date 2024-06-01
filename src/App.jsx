/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;