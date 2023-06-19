// import './App.css';
import { useState } from "react";
import Buttons from "./components/buttons";
import Files from "./components/files";
import Header from "./components/header";
import { data } from "./data/data";
import Chart from "./components/chart";
import Bottomnav from "./components/bottomnav";
function App() {
  let [datafetched, setDataFetched] = useState(data);
  let [clickedDetail, setClickedDetail] = useState(null);
  let [showDetail, setShowDetail] = useState(false);
  let [showChart, setShowChart] = useState(false);
  let [mode, setMode] = useState("normal");
  // modes: normal,deleted and favorite
  let [bin, setBin] = useState([]);

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
    if (mode === "deleted") {
      // delete function
      if (clickedDetail === null) {
        return null;
      }
      /* The code below  is finding the index of an object in an array called `datafetched` that matches
  certain properties of another object called `clickedDetail.filedetail`. The `findIndex` method is
  used to iterate through the `datafetched` array and return the index of the first element that
  satisfies the provided testing function. The testing function checks if the `id`, `name`, `type`,
  and `path` properties of the current element in the iteration match the corresponding properties of
  `clickedDetail.filedetail`. The index of the matching element is stored in the `index` variable */

      // i used the spread operator because this datafetched.splice(datafetched.indexOf(clickedDetail.filedetail), 1)
      // returns an array and what i need is the item inside the array
      if (bin.indexOf(clickedDetail.filedetail) >= 0) {
        let index = bin.indexOf(clickedDetail.filedetail);
        bin.splice(index, 1);

        setBin(bin);
        setClickedDetail(null);
        setShowDetail(false);
        alert(' This File Has Been Permanently  Deleted')
      }
      return null;
    } else {
      // delete function
      if (clickedDetail === null) {
        return null;
      }
      /* The code below  is finding the index of an object in an array called `datafetched` that matches
  certain properties of another object called `clickedDetail.filedetail`. The `findIndex` method is
  used to iterate through the `datafetched` array and return the index of the first element that
  satisfies the provided testing function. The testing function checks if the `id`, `name`, `type`,
  and `path` properties of the current element in the iteration match the corresponding properties of
  `clickedDetail.filedetail`. The index of the matching element is stored in the `index` variable */

      // i used the spread operator because this datafetched.splice(datafetched.indexOf(clickedDetail.filedetail), 1)
      // returns an array and what i need is the item inside the array
      if (datafetched.indexOf(clickedDetail.filedetail) >= 0) {
        let index = datafetched.indexOf(clickedDetail.filedetail);
        let addIndexToObject = datafetched.splice(index, 1)[0];
        addIndexToObject.index = index;
        // bin.push(
        //   ...datafetched.splice(datafetched.indexOf(clickedDetail.filedetail), 1)
        // );
        bin.push(addIndexToObject);

        setDataFetched(datafetched);
        setClickedDetail(null);
        setShowDetail(false);
      }
      return null;
    }
  };

  let restore = () => {
    if (clickedDetail === null) {
      return null;
    }
    datafetched.splice(
      clickedDetail.filedetail.index,
      0,
      clickedDetail.filedetail
    );
    console.log(clickedDetail.filedetail.index);
    bin.splice(bin.indexOf(clickedDetail.filedetail), 1);
    setBin([...bin]);
    setDataFetched([...datafetched]);
    setClickedDetail(null);
    setShowDetail(false);
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
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

          <div
            style={mode === "deleted" ? { display: "" } : { display: "none" }}
          >
            <Buttons name={"restore"} func={restore} />
          </div>
          {/* added  search */}
        </div>
        {/* normal file section */}
        <div
          style={
            mode === "normal"
              ? { display: "flex", height: "32.4rem" }
              : { display: "none", height: "32.4rem" }
          }
        >
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
        {/* deleted files section */}
        <div
          style={
            mode === "deleted"
              ? { display: "flex", height: "32.4rem" }
              : { display: "none", height: "32.4rem" }
          }
        >
          <div style={{ marginTop: "1rem", width: "100vw" }}>
            <h1
              style={{
                textAlign: "center",
                width: "fit-content",
                translate: "1rem 0",
              }}
            >
              Recycle Bin
            </h1>
            {bin.map((item, idx) => (
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
            imageNum={
              datafetched.filter((item) => item.type === "image").length
            }
            docNum={
              datafetched.filter((item) => item.type === "document").length
            }
            vidNum={datafetched.filter((item) => item.type === "video").length}
            audioNum={
              datafetched.filter((item) => item.type === "audio").length
            }
          />
        </div>
      </div>
      <Bottomnav mode={setMode} showDetail={setShowDetail} />
    </div>
  );
}

export default App;
