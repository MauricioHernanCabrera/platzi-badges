import React from "react";
import md5 from "md5";

export default ({ email, className }) => (
  <img
    className={className}
    src={`https://s.gravatar.com/avatar/${md5(email)}?s=80%22`}
    alt="Avatar"
  />
);
