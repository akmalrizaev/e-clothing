import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

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
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
