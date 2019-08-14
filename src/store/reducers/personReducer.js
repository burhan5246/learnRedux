const personReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "update_person":
      //return { name: payload };
      return Object.assign({}, state, { name: payload });
    //return ({ name } = payload);
    default:
      return state;
  }
};

export default personReducer;
