import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchShows } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export const Home = () => {
  const data = useSelector((state) => state?.shows);
  const dispatch = useDispatch();
    const navigate=useNavigate()

  useEffect(() => {
    dispatch(fetchShows());
  },[]);

  const renderList = () => {
    return data?.map((item, index) => {
      return (
        <div
          key={index}
          className=""
          style={{
            marginTop: "2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexBasis: "20em",
          }}
          
        >
          <div className="image">
            <img
              src={item?.show?.image?.original}
              style={{ height: "14em", width: "18em" }}
              alt=""
            />
          </div>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.3em",
              borderRadius: "6px",
            }}
            onClick={() => { navigate("/details",{state:{item}})}}
          >
            Click Me
          </button>
        </div>
      );
    });
  };

  const list = () => {
    return (
      <div className="ui container" style={{ marginTop: "6rem" }}>
        <div className="ui grid">
          <div
            className="doubling four column row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {renderList()}
          </div>
        </div>
      </div>
    );
  };
  return <div>
    <Header/>
    {list()}
    </div>;
};
