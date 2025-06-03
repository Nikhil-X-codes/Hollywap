import React, { createContext, useState, useContext, useEffect } from 'react';

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favItems, setFavItems] = useState(() => {
    // Load from localStorage on first render
    const storedFavs = localStorage.getItem('favItems');
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever favItems changes
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems]);

  const addToFav = (movie) => {
    if (!movie.Title) {
      console.error('Movie is missing Title:', movie);
      return;
    }

    setFavItems((prev) => {
      if (prev.some(item => item.Title === movie.Title)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const removeFromFav = (title) => {
    setFavItems((prev) => prev.filter((movie) => movie.Title !== title));
  };

  const isFav = (title) => {
    return favItems.some((movie) => movie.Title === title);
  };

  return (
    <FavContext.Provider value={{ favItems, addToFav, removeFromFav, isFav }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFav = () => useContext(FavContext);
