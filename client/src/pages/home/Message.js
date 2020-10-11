import React from "react";
import { useAuthState } from "../../context/auth";
import classNames from "classnames";

export default function Message({ message }) {
  const { user } = useAuthState();
  const sent = message.from === user.username;
  const recieved = !sent;

  return (
    <div
      className={classNames("d-flex my-2", {
        "ml-auto": sent,
        "mr-auto": recieved,
      })}>
      <div
        className={classNames("py-2 px-3 rounded-pill", {
          "bg-primary": sent,
          "bg-secondary ": recieved,
        })}>
        <p className={classNames({ "text-white": sent })} key={message.uuid}>
          {message.content}
        </p>
      </div>
    </div>
  );
}
