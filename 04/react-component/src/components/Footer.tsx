import React from 'react'
import styled from "styled-components";

type FooterPropsType = {
  theme: string;
};

const Footer = (props: FooterPropsType) => {
  const FooterBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(props) => (props.theme === 'basic' ? 'skyblue' : 'yellow')};
    text-align: center;
  `;

  return (
    <FooterBox theme={props.theme}>React styled-component Test</FooterBox>
  );
}

export default Footer;
