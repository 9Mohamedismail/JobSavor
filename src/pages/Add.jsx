import React from "react";
import { useState, useEffect } from "react";
import InputBar from "../components/InputBar";
import { Alert, Tooltip } from "antd";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import CustomButton from "../components/CustomButton";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const AlertMessage = styled(Alert)`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  max-width: 90%;
  white-space: nowrap;
  z-index: 1000;

  @media (max-width: 1620px) {
    width: 75%;
    max-width: 100%;
    left: 60%;
    transform: translateX(-50%);
    white-space: normal;
    text-align: center;
  }
`;

const AlertWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${(props) => (props.visible ? "60px" : "0")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  margin-top: 16px;
  margin-bottom: ${(props) => (props.visible ? "16px" : "0")};
`;

const Logo = styled.img`
  width: 20%;
  margin-bottom: clamp(-100px, -5vw, -20px);
`;

const TooltipContent = styled.div`
  text-align: center;
`;

function Add() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Content>
      <AlertMessage
        message="Sorry for the inconvenience: If this is your first request in a while, our free server may take up to ~50s to start. Hang tight! Once it’s up, every subsequent request will be smooth."
        type="warning"
        showIcon
      />
      <Tooltip
        title={
          <TooltipContent>
            we currently support greenhouse, workday, lever, and ashby links.
            more will come soon.
          </TooltipContent>
        }
      >
        <span>
          <CustomButton text="supported websites" none />
        </span>
      </Tooltip>
      <AlertWrapper visible={visible}>
        <Alert message="job added" type="success" showIcon />
      </AlertWrapper>
      <Logo src={logo} />
      <InputBar setVisible={setVisible} />
    </Content>
  );
}

export default Add;
