import axios from "axios";

export const getUser = () => dispatch => {
  axios.get("/all").then(res =>
    dispatch({
      type: "GET_USER",
      payload: res.data
    })
  );
};

export const addUser= user => dispatch => {
  console.log(user)
  axios.post("/register", user).then(res => dispatch(getUser()));
};

export const deleteUser = id => dispatch => {
  axios.delete(`/${id}`).then(res => dispatch(getUser()));
};

export const updateUser = (id, user) => dispatch => {
  axios
    .put(`/${id}`, user)
    .then(res => dispatch(getUser()));
};
