"use client";

import styled from "styled-components";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Landing from "./landing";
import Info from "./info";

const Main = () => {
  return (
    <>
      <Header />
      <Landing />
      <Info />
      <Footer />
    </>
  );
};

export default Main;
