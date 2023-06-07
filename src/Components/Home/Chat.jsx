import React, { useContext, useEffect, useState } from "react";

import Cam from "../Images/cam.png";
import Add1 from "../Images/add1.png";
import More from "..//Images/more.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../../Context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="Chat">
      <div className="Chatinfo">
        <span>{data.user?.displayName}</span>
        <div className="Chaticons">
          <img src={Cam} alt="" />
          <img src={Add1} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
