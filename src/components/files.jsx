import React from "react";

function Files({ data,  getName, showDetail }) {
  return (
    <div
      style={{
        backgroundColor: "#F0EFF0",
        padding: "0.1rem 1rem",
        borderRadius: "0.1rem",
        cursor: "pointer",
        marginBottom: "0.8rem",
        marginRight: "1rem"
      }}
      onClick={() => {
        showDetail(true)
       return getName(data)
      }}
    >
      <p>{data.name}</p>
    </div>
  );
}

export default Files;
