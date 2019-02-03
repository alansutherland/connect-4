const defaultWinnerState = "";

const winner = (prevState = defaultWinnerState, action) => {
  if (action.type === "DECLARE_WINNER") {
    return action.player;
  }

  if (action.type === "DECLARE_TIE") {
    return 'Tie';
  }

  return prevState;
};

export default winner;