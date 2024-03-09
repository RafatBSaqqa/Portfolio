import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProject,
  updateProject,
} from "../../Services/redux/reducers/Project/projectSlice";
export default function Projects() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      project: state.project.project,
    };
  });
  const contactInformation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/projects");
      dispatch(setProject(result.data.result));
    } catch (error) {}
  };
  useEffect(() => {
    contactInformation();
  }, []);
  return (
    <div>
      {state.project.map((res) => {
        return (
          <div key={res.id}>
            <h1>{res.title}</h1>
            <p>{res.description}</p>
          </div>
        );
      })}
    </div>
  );
}
