import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Dots from "./component/Dots";
import FirstPage from "./page/FirstPage";
import FourPage from "./page/FourPage";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";

function App() {
  const mainRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [clickIndex, setClickIndex] = useState(1);

  useEffect(() => {
    console.log("btn", clickIndex);
    const pageHeight = window.innerHeight; // 화면 세로 길이, 100vh와 같다.
    if (clickIndex === 1) {
      console.log("click ");
      // mainRef.current.scrollTo(0, 0);
      mainRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (clickIndex === 2) {
      // mainRef.current.scrollTo(0, pageHeight);
      mainRef.current.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    if (clickIndex === 3) {
      // mainRef.current.scrollTo(0, pageHeight * 2);
      mainRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
    }
    if (clickIndex === 4) {
      // mainRef.current.scrollTo(0, pageHeight * 3);
      mainRef.current.scrollTo({
        top: pageHeight * 3,
        left: 0,
        behavior: "smooth",
      });
    }
    const wheelHandler = (e) => {
      console.log(e);
      e.preventDefault();
      // 스크롤 구현
      const { deltaY } = e;
      const { scrollTop } = mainRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로 길이, 100vh와 같다.

      // console.log(deltaY);
      console.log(scrollTop);
      console.log(pageHeight);

      if (deltaY > 0) {
        // scroll down
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("1page >> down", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("2page >> down", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("3page >> down", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          console.log("4page >> down", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {
        // scroll up
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("1page >> up", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("2page >> up", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("3page >> up", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          console.log("3page >> up", pageHeight, "=", scrollTop);
          mainRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const mainRefCurrent = mainRef.current;
    mainRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      mainRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [clickIndex]);
  return (
    <Main ref={mainRef}>
      <Dots
        scrollIndex={scrollIndex}
        setScrollIndex={setScrollIndex}
        setClickIndex={setClickIndex}
        clickIndex={clickIndex}
      />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
    </Main>
  );
}

export default App;

const Main = styled.div`
  height: 100vh;
  overflow-y: auto;
  /* 화면에서 스크롤바 안보이게 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
