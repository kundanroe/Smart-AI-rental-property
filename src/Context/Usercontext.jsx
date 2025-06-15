import React, { createContext, useContext, useState } from "react";
export let dataContext = createContext();

export let user = {
  data: null,
  mime_type: null,
  imgUrl: null,
};
export let prevUser = {
  data: null,
  mime_type: null,
  prompt: null,
  imgUrl: null,
};
function Usercontext({ children }) {
  let [title, setTitle] = useState("");
  let [addListing, setaddListing] = useState(false);
  let [addImage1, setaddImage1] = useState(null);
  let [addImage2, setaddImage2] = useState(null);
  let [addImage3, setaddImage3] = useState(null);
  let [price, setprice] = useState(null);
  let [startRes, setStartRes] = useState(false);
  let [popUp, setPopUP] = useState(false);
  let [input, setInput] = useState("");
  let [feature, setFeature] = useState("chat");
  let [showResult, setShowResult] = useState("");
  let [prevFeature, setPrevFeature] = useState("chat");
  let [genImgUrl, setGenImgUrl] = useState("");
  let value = {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,
    startRes,
    setStartRes,
    popUp,
    setPopUP,
    input,
    setInput,
    feature,
    setFeature,
    showResult,
    setShowResult,
    prevFeature,
    setPrevFeature,
    genImgUrl,
    setGenImgUrl,
  };
  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}

export default Usercontext;
