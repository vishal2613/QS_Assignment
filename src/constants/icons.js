import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";
import user5 from "../assets/images/user5.png";

import lowPriorityIcon from "../assets/icons/priority/low-priority.svg";
import mediumPriorityIcon from "../assets/icons/priority/medium-priority.svg";
import highPriorityIcon from "../assets/icons/priority/high-priority.svg";
import noPriorityIcon from "../assets/icons/priority/no-priority.svg";
import urgentPriorityIcon from "../assets/icons/priority/urgent-priority-gray.svg";

import backlogIcon from "../assets/icons/status/Backlog.svg";
import todoIcon from "../assets/icons/status/To-do.svg";
import inProgressIcon from "../assets/icons/status/in-progress.svg";
import doneIcon from "../assets/icons/status/Done.svg";
import cancelledIcon from "../assets/icons/status/Cancelled.svg";

export const priorityIcons = {
  0: noPriorityIcon,
  1: lowPriorityIcon,
  2: mediumPriorityIcon,
  3: highPriorityIcon,
  4: urgentPriorityIcon,
};

export const statusIcons = {
  Backlog: backlogIcon,
  Todo: todoIcon,
  "In progress": inProgressIcon,
  Done: doneIcon,
  Cancelled: cancelledIcon,
};

export const userImages = {
  "usr-1": user1,
  "usr-2": user2,
  "usr-3": user3,
  "usr-4": user4,
  "usr-5": user5,
};
