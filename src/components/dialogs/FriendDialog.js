import React from "react";
import fr from "./FriendDialog.module.css";
import { NavLink } from "react-router-dom";

const FriendDialog = (props) => {
  return (
    <div className={fr.friend}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default FriendDialog;
