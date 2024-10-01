import React, { createContext, useContext, useEffect, useState } from "react";

const GroupByContext = createContext();

export const GroupByProvider = ({ children }) => {
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem("groupBy") || "status"; // Default value
  });

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  return (
    <GroupByContext.Provider value={{ groupBy, setGroupBy }}>
      {children}
    </GroupByContext.Provider>
  );
};

export const useGroupBy = () => {
  return useContext(GroupByContext);
};
