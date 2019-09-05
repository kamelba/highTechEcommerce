import axios from "axios";

export const getAnnonce = () => dispatch => {
  axios.get("/allAnnonce").then(res =>
    dispatch({
      type: "GET_ANNONCE",
      payload: res.data
    })
  );
};

export const addAnnonce = annonce => dispatch => {
  axios.post("/addAnnonce", annonce).then(res => dispatch(getAnnonce()));
};

export const deleteAnnonce = id => dispatch => {
  axios.delete(`/${id}`).then(res => dispatch(getAnnonce()));
};

export const updateAnnonce = (id, contact) => dispatch => {
  axios
    .put(`/${id}`, contact)
    .then(res => dispatch(getAnnonce()));
};
