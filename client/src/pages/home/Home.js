import React, { Fragment } from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { useAuthDispatch } from "../../context/auth";

import Users from "./Users";
import Messages from "./Messages";

export default function Home({ history }) {
  const dispatch = useAuthDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <Row className='bg-white justify-content-around mb-1'>
        <Button className='ml-auto' variant='danger' onClick={logout}>
          Logout
        </Button>
      </Row>
      <Row className='bg-white'>
        <Users />
        <Messages />
      </Row>
    </Fragment>
  );
}
