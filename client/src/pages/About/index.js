import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  updateAbout,
} from "../../Services/redux/reducers/About/aboutSlice";
export default function About() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      about: state.about.about,
    };
  });
  const aboutInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/about");
      dispatch(setAbout(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    aboutInformation();
  }, []);
  return (
    <div>
      {state.about.map((res) => {
        return (
          <div key={res.id}>
            <h4>{res.about_me}</h4>
          </div>
        );
      })}
    </div>
  );
}
