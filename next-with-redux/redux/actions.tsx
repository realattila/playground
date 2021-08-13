const actionsTypes = {
  ADD_COUNTER: "ADD_COUNTER",
  CALL_ADD_COUNTER: "CALL_ADD_COUNTER",
};

export const increamentCounter = () => {
  console.log("increamentCounter");
  return {
    type: actionsTypes.CALL_ADD_COUNTER,
  };
};

export default actionsTypes;
