import React from "react";
import styled from "styled-components";

const Dot = ({ num, scrollIndex }) => {
  return <DotStyle></DotStyle>;
};

const Dots = ({ scrollIndex, setScrollIndex, setClickIndex, clickIndex }) => {
  const handleClick = (e) => {
    console.log(Number(e.target.value));
    setClickIndex(Number(e.target.value));
    if (scrollIndex === Number(e.target.value)) {
    }
  };
  return (
    <DotsStyle>
      <button key="1" value={1} onClick={handleClick}>
        홈
      </button>
      <button key="2" value={2} onClick={handleClick}>
        작품
      </button>
      <button key="3" value={3} onClick={handleClick}>
        줄거리
      </button>
      <button key="4" value={4} onClick={handleClick}>
        커밍순
      </button>
    </DotsStyle>
  );
};

export default Dots;

const DotStyle = styled.div``;
const DotsStyle = styled.div`
  position: fixed;
`;
