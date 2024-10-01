import React, { createContext, useContext, useState, useEffect } from "react";

const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState(() => {
    const savedSortBy = localStorage.getItem("sortBy");
    return savedSortBy ? JSON.parse(savedSortBy) : "priority";
  });

  useEffect(() => {
    localStorage.setItem("sortBy", JSON.stringify(sortBy));
  }, [sortBy]);

  return (
    <SortingContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortingContext.Provider>
  );
};

export const useSorting = () => {
  return useContext(SortingContext);
};
