import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState();
  const { state} = useLocation();
  useEffect(() => {
    setData(state?.item);
  }, []);
  console.log("asdfgf", data);
  return (
    <div
      className=""
      key={data?.show?.name}
      style={{
        paddingTop: "5rem",
        display: "flex",
        flex: "1",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", maxWidth: "35rem" }}>
        <img
          src={data?.show?.image?.original}
          style={{ width: "30rem", height: "20rem" }}
          className="img-fluid"
          alt=""
        />
      </div>
      <div style={{ paddingTop: "", paddingLeft: "3em", width: "40rem" }}>
        <p style={{ fontSize: "1.1em" }}>
          <b> Name:</b> {data?.show?.name}
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <b>Language:</b> {data?.show?.language}
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <b>Summary:</b> {data?.show?.summary}
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <b>About:</b>{" "}
          {data?.show?.genres.map((item) => {
            return <span>{item}</span>;
          })}
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <b>Rating:</b> {data?.show?.rating?.average}
        </p>
      </div>
    </div>
  );
};
export default Details;
