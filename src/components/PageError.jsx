import React from "react";
import "./styles/PageError.css";

export default ({ error }) => <div className="PageError">{error.message}</div>;
