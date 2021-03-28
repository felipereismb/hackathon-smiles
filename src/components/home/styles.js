import styled from "styled-components";

export const Card = styled.div`
  width: 108px;
  height: 78px;
  background: linear-gradient(180deg, #ff4c00 0%, #f57921 100%);
  border-radius: 3px;

  color: #fff;

  padding: 5px;

  > p {
    font-family: "Josefin Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
  }

  > div {
    padding: 15px 10px;
    font-family: "Josefin Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
  }
`;

export const ContainerBar = styled.div`
  > p {
    font-family: "Josefin Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;

    margin-left: 6px;
    margin-bottom: 6px;

    color: #3b3b3b;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 17px;

  background: rgba(244, 165, 109, 0.28);
  border-radius: 10px;
`;

export const Progress = styled.div`
  position: absolute;
  height: 17px;
  width: 15%;
  left: 0px;

  background: #f57921;
  border-radius: 10px;
`;
