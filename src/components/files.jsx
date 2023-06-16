import React, { useState } from "react";

function Files({ data,   showDetail,setshowDetail,id ,clickedDetail }) {
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
        if(data.id==id){
          setshowDetail(showDetail ?false:true)
          return clickedDetail(null)
        }
        setshowDetail(true)
       return clickedDetail({
            filename: data.path,
            filedetail: data,
       })
      }}
    >
      <p>{data.name}</p>
    </div>
  );
}

export default Files;
