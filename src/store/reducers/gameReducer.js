const gameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "update_game":
      return { name: payload };
    default:
      return state;
  }
};

export default gameReducer;
