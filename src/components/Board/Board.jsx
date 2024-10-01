import React from "react";
import TicketList from "../TicketList/TicketList";
import { useFetchData } from "../../hooks/useFetch";
import { useGroupBy } from "../../utils/GroupByContext";
import { useSorting } from "../../utils/SortingContext";
import { priorityMap, statusMap } from "../../constants/map";
import { statusIcons, priorityIcons, userImages } from "../../constants/icons";
import AddIcon from "../../assets/icons/add.svg";
import DotsIcon from "../../assets/icons/3 dot menu.svg";
import "./Board.css";
import DisplayMenu from "../DisplayMenu/DisplayMenu";

const Board = () => {
  const { groupBy, setGroupBy } = useGroupBy();
  const { sortBy, setSortBy } = useSorting();

  const { data, error, loading } = useFetchData(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tickets = data?.tickets || [];
  const users = data?.users || [];

  const userMap = users.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  const groupTickets = (groupBy, sortBy) => {
    const groups = tickets.reduce((groups, ticket) => {
      let group;

      if (groupBy === "user") {
        group = ticket.userId || "Unknown User";
      } else {
        group = ticket[groupBy];
      }

      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(ticket);
      return groups;
    }, {});

    Object.keys(groups).forEach((groupTitle) => {
      groups[groupTitle].sort((a, b) => {
        if (sortBy === "priority") {
          return a.priority - b.priority;
        } else if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    return groups;
  };

  const groupedTickets = groupTickets(groupBy, sortBy);

  return (
    <div>
      <div className="controls">
        <DisplayMenu
          groupBy={groupBy}
          setGroupBy={setGroupBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="board">
        {groupBy === "priority"
          ? Object.keys(priorityMap).map((priority) => {
              const groupTitle = priorityMap[priority];
              const ticketsInGroup = groupedTickets[priority] || [];
              return (
                <div key={groupTitle} className="ticket-column">
                  <div className="group-header">
                    <div className="ticket-group-header">
                      <img src={priorityIcons[priority]} alt={groupTitle} />
                      <h3>{groupTitle}</h3>
                      <h3 className="ticket-count">{ticketsInGroup.length}</h3>
                    </div>
                    <div className="ticket-group-options">
                      <img src={AddIcon} alt="add" />
                      <img src={DotsIcon} alt="dots" />
                    </div>
                  </div>
                  <TicketList
                    tickets={ticketsInGroup}
                    users={users}
                    groupBy={groupBy}
                    sortBy={sortBy}
                  />
                </div>
              );
            })
          : groupBy === "status"
          ? Object.keys(statusMap).map((status) => {
              const groupTitle = statusMap[status];
              const ticketsInGroup = groupedTickets[status] || [];
              return (
                <div key={groupTitle} className="ticket-column">
                  <div className="group-header">
                    <div className="ticket-group-header">
                      <img src={statusIcons[status]} alt={groupTitle} />
                      <h3>{groupTitle}</h3>
                      <h3 className="ticket-count">{ticketsInGroup.length}</h3>
                    </div>
                    <div className="ticket-group-options">
                      <img src={AddIcon} alt="add" />
                      <img src={DotsIcon} alt="dots" />
                    </div>
                  </div>
                  <TicketList
                    tickets={ticketsInGroup}
                    users={users}
                    groupBy={groupBy}
                    sortBy={sortBy}
                  />
                </div>
              );
            })
          : Object.keys(groupedTickets).map((groupTitle) => {
              console.log(groupTitle);
              return (
                <div key={groupTitle} className="ticket-column">
                  <div className="group-header">
                    <div className="ticket-group-header">
                      <img src={userImages[groupTitle]} alt="user" />
                      <h3>{userMap[groupTitle]}</h3>
                      <h3 className="ticket-count">
                        {groupedTickets[groupTitle].length}
                      </h3>
                    </div>
                    <div className="ticket-group-options">
                      <img src={AddIcon} alt="add" />
                      <img src={DotsIcon} alt="dots" />
                    </div>
                  </div>
                  <TicketList
                    tickets={groupedTickets[groupTitle]}
                    users={users}
                    groupBy={groupBy}
                    sortBy={sortBy}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Board;
