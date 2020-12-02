import React from "react";
import d from "./Dialogs.module.css";
import FriendDialog from "./FriendDialog";
import Message from "./Message";

const Dialogs = (props) => {
  let friendList = props.state.friends.map((n) => <FriendDialog name={n.name} id={n.id} />);
  let messageList = props.state.messages.map((m) => <Message text={m.text} />);

  let onAddNewMessage = () => props.addNewMessage();
  let onEditMessage  = (e) => props.editMessage(e.target.value);

    return (
    <div className={d.content}>
      <div className={d.friendList}>{friendList}</div>
      <div className={d.message}>
          {messageList}
          <textarea onChange={onEditMessage} value={props.state.currentMessageText}/>
          <button onClick={onAddNewMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
