import React from "react";
import Card from "../Card/Card";

const TicketList = ({ tickets, users, groupBy, sortBy }) => {
  const getUserById = (userId) => {
    return users?.find((user) => user.id === userId);
  };
  const sortedTickets = () => {
    if (sortBy === "priority") {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    } else if (sortBy === "title") {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  // Call the sorting function
  const sortedTicketsList = sortedTickets();

  return (
    <div className="ticket-list">
      {sortedTicketsList.map((ticket) => {
        const user = getUserById(ticket.userId);
        return (
          <Card key={ticket.id} ticket={ticket} user={user} groupBy={groupBy} />
        );
      })}
    </div>
  );
};

export default TicketList;
