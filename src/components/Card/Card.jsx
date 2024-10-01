import "./Card.css";
import { priorityIcons, statusIcons } from "../../constants/icons";
import { userImages } from "../../constants/icons";

function Card({ ticket, user, groupBy }) {
  if (!ticket) {
    return null;
  }

  return (
    <>
      {groupBy === "status" && (
        <div className="card">
          <div className="header">
            <span className="id-tag">{ticket.id}</span>
            <span className="avatar">
              <img src={userImages[user.id]} alt="user" />
              <span
                className={`status-dot ${
                  user.available ? "online" : "offline"
                }`}
              ></span>
            </span>
          </div>
          <div className="content">
            <h3>{ticket.title}</h3>
          </div>
          <div className="footer">
            <span className="priority">
              <img src={priorityIcons[ticket.priority]} alt={ticket.priority} />
            </span>
            {ticket.tag.map((tagname) => (
              <span className="status" key={tagname}>
                <i className="icon-alert"></i> {tagname}
              </span>
            ))}
          </div>
        </div>
      )}
      {groupBy === "user" && (
        <div className="card">
          <div className="header">
            <span className="id-tag">{ticket.id}</span>
          </div>
          <div className="content">
            <div className="ticket-title">
              <img src={statusIcons[ticket.status]} alt={ticket.status} />
              <h3>{ticket.title}</h3>
            </div>
          </div>
          <div className="footer">
            <span className="priority">
              <img src={priorityIcons[ticket.priority]} alt={ticket.priority} />
            </span>
            {ticket.tag.map((tagname) => (
              <span className="status" key={tagname}>
                <i className="icon-alert"></i> {tagname}
              </span>
            ))}
          </div>
        </div>
      )}
      {groupBy === "priority" && (
        <div className="card">
          <div className="header">
            <span className="id-tag">{ticket.id}</span>
            <span className="avatar">
              <img src={userImages[user.id]} alt="user" />
              <span
                className={`status-dot ${
                  user.available ? "online" : "offline"
                }`}
              ></span>
            </span>
          </div>
          <div className="content">
            <div className="ticket-title">
              <img src={statusIcons[ticket.status]} alt={ticket.status} />
              <h3>{ticket.title}</h3>
            </div>
          </div>
          <div className="footer">
            {ticket.tag.map((tagname) => (
              <span className="status" key={tagname}>
                <i className="icon-alert"></i> {tagname}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
