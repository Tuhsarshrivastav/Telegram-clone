import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Message.css";
const Message = forwardRef(
  (
    { id, data: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && `message__sender`}`}
      >
        <Avatar src={photo} className="message__photo" />

        <div className="message__contents">
          <p className="message__content">{message}</p>

          <small className="message__timestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </small>
        </div>
      </div>
    );
  }
);

export default Message;
