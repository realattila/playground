import type { NextPage } from "next";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hook/store";
import { decrement, increment } from "store/counter";
import { requestToGetdata } from "store/data";

const Home: NextPage = () => {
  const counter = useAppSelector((state) => state.counter);
  const data = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const handleIncreaceValue = () => {
    dispatch(increment());
  };

  const handleDecrementValue = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    dispatch(requestToGetdata());
  }, []);

  return (
    <div>
      <div>
        <code>{JSON.stringify(data)}</code>
      </div>
      <div>this is shity Value {counter.value}</div>
      <div>
        <button onClick={handleIncreaceValue}>Increace Value</button>
        <button onClick={handleDecrementValue}>Decrement Value</button>
      </div>
    </div>
  );
};

export default Home;
