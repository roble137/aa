import React, { Component } from "react";
import "./SendMessage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SendMessage extends Component {
  render() {
    return (
      <div className="sendmessage_container">
        <label htmlFor="input" />
        <input
          id="input"
          className="sendmessage__input"
          onChange={this.props.inputSendMessage}
        />
        <button className="sendmessage_button">
          <FontAwesomeIcon icon="paper-plane" className="paperplane__styles" />
        </button>
      </div>
    );
  }
}

export default SendMessage;
