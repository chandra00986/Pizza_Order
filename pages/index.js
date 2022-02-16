import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

export default function Home(pizzaList) {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
