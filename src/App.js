// import './App.css';
import { useState } from "react";
import Buttons from "./components/buttons";
import Files from "./components/files";
import Header from "./components/header";
import { data } from "./data/data";
import Chart from "./components/chart";
function App() {
  let [datafetched, setDataFetched] = useState(data);
  let [clickedDetail, setClickedDetail] = useState(null);
  let [showDetail, setShowDetail] = useState(false);
  let [showChart, setShowChart] = useState(false);
  // let [id,setId]=useState()
  let rename = () => {
    //rename
    if (clickedDetail != null) {
      clickedDetail.filedetail.name = prompt("enter name");
      setDataFetched([...datafetched]);
    }
    return null;
  };

  let del = () => {
    // delete function
    if (clickedDetail === null) {
      return null;
    }
    setDataFetched(
      datafetched.splice(
        datafetched.splice(datafetched.indexOf(clickedDetail.filedetail), 1)
      )
    );
    setClickedDetail(null);
    setShowDetail(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ backgroundColor: "#FEFDFE", height: "100vh" }}>
        <Header />
        <div style={{ padding: "0 1rem" }}>
          <h3>My File</h3>
          <p>{clickedDetail ? clickedDetail.filename : "/file-server/"}</p>
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
            padding: "0 1rem",
          }}
        >
          <Buttons name={"Rename"} func={rename} />
          <Buttons name={"File Breakdown"} func={setShowChart} />
          <a
            href={clickedDetail === null ? null : clickedDetail.filedetail.path}
            target="_blank"
            download
            rel="noreferrer"
          >
            <Buttons name={"Download"} />
          </a>
          <Buttons name={"Delete"} func={del} />
          {/* added  search */}
        </div>
        <div style={{ display: "flex", height: "32.4rem" }}>
          <div style={{ marginTop: "1rem", width: "100vw" }}>
            {datafetched.map((item, idx) => (
              <Files
                data={item}
                setshowDetail={setShowDetail}
                showDetail={showDetail}
                key={idx}
                id={clickedDetail != null ? clickedDetail.filedetail.id : null}
                clickedDetail={setClickedDetail}
              />
            ))}
          </div>
          <div
            style={
              showDetail
                ? {
                    width: "20.3rem",
                    display: "",
                    backgroundColor: "transparent",
                    borderLeft: "2px solid black",
                  }
                : { display: "none" }
            }
          >
            {/*  This code block is rendering a video player if the `clickedDetail` state is not null and the
        `filedetail` property of `clickedDetail` has a `type` property equal to "video". The video player
        has controls for playing, pausing, and adjusting the volume, and it automatically starts playing
        when it is loaded (`autoPlay` attribute). The source of the video is set to the `path` property of
        `filedetail` and the type of the video is set to "video/mp4". If the conditions are not met, it
        renders `null`. */}
            {clickedDetail === null ? null : clickedDetail.filedetail.type ===
              "video" ? (
              <video controls autoPlay style={{ width: "100%" }}>
                {/* clickedDetail!=null && clickedDetail.filedetail.type==='video'?`${clickedDetail.filedetail.path}`:'' */}

                <source src={clickedDetail.filedetail.path} type="video/mp4" />
              </video>
            ) : null}

            {/* This code block is rendering an audio player if the `clickedDetail` state is not null and the
          `filedetail` property of `clickedDetail` has a `type` property equal to "audio". The audio player
          has controls for playing, pausing, and adjusting the volume, and it automatically starts playing
          when it is loaded (`autoPlay` attribute). The source of the audio is set to the `path` property of
          `filedetail` and the type of the audio is set to "audio/mp3". If the conditions are not met, it
          renders `null`. */}

            {clickedDetail === null ? null : clickedDetail.filedetail.type ===
              "audio" ? (
              <audio controls autoPlay style={{ width: "100%" }}>
                {/* clickedDetail!=null && clickedDetail.filedetail.type==='video'?`${clickedDetail.filedetail.path}`:'' */}

                <source src={clickedDetail.filedetail.path} type="audio/mp3" />
              </audio>
            ) : null}

            {/* This code block is rendering an image if the `clickedDetail` state is not null and the `filedetail`
          property of `clickedDetail` has a `type` property equal to "image". The image source is set to the
          `path` property of `filedetail` and it has a width of 100%. If the conditions are not met, it
          renders `null`. */}
            {clickedDetail === null ? null : clickedDetail.filedetail.type ===
              "image" ? (
              <img
                src={clickedDetail.filedetail.path}
                alt=""
                style={{ width: "100%" }}
              />
            ) : null}

            {/* This code block is rendering an `iframe` element if the `clickedDetail` state is not null and the
          `filedetail` property of `clickedDetail` has a `type` property equal to "document". The `iframe`
          element is used to embed another HTML document within the current HTML document. The `src` attribute
          of the `iframe` element is set to the `path` property of `filedetail`, which is the URL of the
          document to be embedded. The `frameborder` attribute is set to "0" to remove the border around the
          `iframe`. The `title` attribute is set to "file" to provide a title for the embedded document. If
          the conditions are not met, it renders `null`. */}
            {clickedDetail === null ? null : clickedDetail.filedetail.type ===
              "document" ? (
              <iframe
                src={clickedDetail.filedetail.path}
                frameborder="0"
                title="file"
              />
            ) : null}
            <p>
              {clickedDetail === null ? null : clickedDetail.filedetail.name}
            </p>
            <p>
              Path:{" "}
              {clickedDetail === null ? null : clickedDetail.filedetail.path}
            </p>
            <p>
              File Type:{" "}
              {clickedDetail === null ? null : clickedDetail.filedetail.type}
            </p>
          </div>
        </div>
      </div>
      {/* chart section */}
      <div
        style={
          showChart
            ? {
                position: "absolute",
                top: "0",
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(217, 217, 217, 0.5)",
              }
            : {
                position: "absolute",
                top: "0",
                width: "100vw",
                height: "100vh",
                display: "none",
                justifyContent: "center",
              }
        }
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            overflow: "hidden",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>File Breakdown</p>
            <p
              onClick={() => setShowChart(false)}
              style={{
                cursor: "pointer",
                backgroundColor: "grey",
                padding: "0.7rem",
              }}
            >
              close
            </p>
          </div>
          <Chart
            imageNum={datafetched.filter((item) => item.type === "image").length}
            docNum={
              datafetched.filter((item) => item.type === "document").length
            }
            vidNum={datafetched.filter((item) => item.type === "video").length}
            audioNum={datafetched.filter((item) => item.type === "audio").length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
