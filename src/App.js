import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am a Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1>I am Shop component</h1>;
};

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/n1JnY9y/hats.jpg',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/MpxmYjQ/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/ZgmL5tD/womens.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/Lx0QNQk/mens.jpg',
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
