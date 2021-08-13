import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { increamentCounter } from "../redux/actions";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log({ state });

  useEffect(() => {
    dispatch(increamentCounter());
  }, [dispatch]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increamentCounter());
        }}
      >
        CLick Me bitch
      </button>
    </div>
  );
};

export default Home;
