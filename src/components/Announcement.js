import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  font-style: bold;
`;

const Announcement = () => {
  return (
    <Container>30% OFF on New Arrivals!!!!! Hurry Up and check it out</Container>
  )
}

export default Announcement

