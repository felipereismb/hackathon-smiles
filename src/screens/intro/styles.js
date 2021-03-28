import styled, { css, keyframes } from "styled-components";

export const Balao = styled.div`
  position: relative;

  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 29px;

  padding: 17.57px 20.97px;
  margin-top: 40px;

  ${({ step }) =>
    step === 0
      ? css`
          width: 279px;
          height: 123px;
          margin-left: 70px;
        `
      : css`
          margin: 40px 10px;
        `}

  /* font-family: 'Poppins', sans-serif; */
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: #393939;

  &:after {
    position: absolute;

    content: "";
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 40px solid transparent;

    background: transparent;
    border-bottom: 30px solid #ffffff;
    bottom: -25px; /*localização. Experimente alterar para 'bottom'*/
    left: 20%;

    transform: rotate(90deg);
  }
`;

export const Value = styled.div`
  position: absolute;

  ${({ step }) =>
    step === 0
      ? css`
          left: -48px;
          top: -176px;
          font-size: 916px;
          line-height: 1374px;
        `
      : css`
          left: 100px;
          top: 140px;
          font-size: 600px;
          line-height: 900px;
        `}

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;

  color: rgba(255, 255, 255, 0.16);
`;

export const Arrow = styled.div`
  background: #fff;
  height: 3px;
  position: absolute;
  width: 150px;

  right: 20px;
  top: ${({ shopping }) => (shopping ? "591px" : "541px")};

  &:before,
  &:after {
    content: "";
    width: 3px;
    height: 10px;
    transform: skew(30deg);
    background: #fff;
    position: absolute;
    top: -8px;
    right: -1px;
  }

  &:after {
    transform: skew(-30deg);
    top: 0px;
  }

  cursor: pointer;
  z-index: 999;
`;

export const ArrowBack = styled.div`
  background: #fff;
  height: 3px;
  position: absolute;
  width: 50px;

  left: 20px;
  top: 775px;

  &:before,
  &:after {
    content: "";
    width: 3px;
    height: 10px;
    transform: skew(-30deg);
    background: #fff;
    position: absolute;
    top: -8px;
    left: -1px;
  }

  &:after {
    transform: skew(30deg);
    top: 0px;
  }

  cursor: pointer;
  z-index: 999;
`;

export const ArrowText = styled.div`
  position: absolute;
  width: ${({ shopping }) => (shopping ? "150px" : "102")};
  height: 23px;
  left: ${({ shopping }) => (shopping ? "210px" : "210px")};
  top: ${({ shopping }) => (shopping ? "535px" : "510px")};

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: #ffffff;

  cursor: pointer;
  z-index: 999;
`;

export const Input = styled.input`
  width: 324px;
  height: 59px;

  background: #ffffff;

  /* Grey Smiles */

  border: 1px solid #7c7c7c;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  padding: 0px 5px;
`;

export const ArrowContinue = styled.div`
  background: ${({ cor }) => (cor === "roxo" ? "#70009b" : "#ffffff")};
  height: 3px;
  position: absolute;
  width: 118px;

  right: 20px;
  bottom: 35px;

  &:before,
  &:after {
    content: "";
    width: 3px;
    height: 10px;
    transform: skew(30deg);
    background: ${({ cor }) => (cor === "roxo" ? "#70009b" : "#ffffff")};
    position: absolute;
    top: -8px;
    right: -1px;
  }

  &:after {
    transform: skew(-30deg);
    top: 0px;
  }

  cursor: pointer;
  z-index: 999;
`;

export const ArrowTextContinue = styled.div`
  position: absolute;
  width: 102px;
  height: 23px;
  left: 240px;
  bottom: ${({ step }) => (step < 5 ? "40px" : "70px")};

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: ${({ cor }) => (cor === "roxo" ? "#70009b" : "#ffffff")};

  cursor: pointer;
  z-index: 999;
`;

export const Objetivo = styled.div`
  padding: 15px 16px;
  color: #fff;
  background: #70009b;
  border-radius: 40px 0px 0px 40px;
`;

const ldsRing = keyframes`
    from  {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const Loading = styled.div`
  position: relative;
  display: flex;

  height: 232px;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 36px;
  margin-top: 50%;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 232px;
    height: 232px;
    margin: 8px;
    border: 20px solid #fff;
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
