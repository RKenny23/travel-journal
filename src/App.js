import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Data from './data';
import './style.css';

export default function App() {
  const cards = Data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}
