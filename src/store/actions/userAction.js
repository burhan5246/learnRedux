export const UPDATE_USER = "update_user";
//const update_user = { type: UPDATE_USER, payload: "Cricket" };

const fetch_user = dispatch => {
  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(res => dispatch({ type: UPDATE_USER, payload: res.data }));
};

export default fetch_user;
