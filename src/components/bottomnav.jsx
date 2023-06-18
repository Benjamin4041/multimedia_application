import React from "react";

export default function Bottomnav({mode,showDetail}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0rem",
        padding: "",
        display: "flex",
        justifyContent: "center",
        columnGap:"1.7rem",
        width: "100%",
        alignItems: "center",
        height: "fit-content",
      }}
    >
        {/* deleted */}
      <span style={{ cursor: "pointer" }} onClick={()=>{
        mode('deleted')
        showDetail(false)
    }}>
        <lord-icon
          src="https://cdn.lordicon.com/kfzfxczd.json"
          trigger="click"
          colors={{ primary: "#121331" }}
          style={{ width: "fit-content;" }}
        ></lord-icon>
      </span>
      {/* home */}
      <span style={{ cursor: "pointer" }} onClick={()=>mode('normal')}>
        <lord-icon
          src="https://cdn.lordicon.com/gmzxduhd.json"
          trigger="click"
          colors={{ primary: "#121331", secondary: "#08a88a" }}
          style={{ width: "fit-content;" }}
        ></lord-icon>
      </span>
      {/* star */}
      <span style={{ cursor:"pointer" }}>
        <lord-icon
          src="https://cdn.lordicon.com/mdgrhyca.json"
          trigger="click"
          colors={{primary:"#121331",secondary:"#08a88a"}}
          style={{width:"3.1rem"}}
        ></lord-icon>
      </span>
    </div>
  );
}
