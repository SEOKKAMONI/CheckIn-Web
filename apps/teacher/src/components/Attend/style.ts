import styled from "styled-components";
import Image from "next/image";

export const AttendWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 69px 0px 30px 112px;
  box-sizing: border-box;
`;

export const AttendTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;

export const AttendIconImg = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;
`;

export const AttendTitle = styled.div`
  color: #0b1e02;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AttendSubtitle = styled.div`
  color: var(--Gray, #636363);
  font-size: 1.25em;
  font-style: normal;
  font-weight: 300;
  line-height: 2rem; /* 160% */
`;

export const AttendStudentTitle = styled.p`
  font-size: 1.5em;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
export const AttendCardContainer = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 12vw;
  column-gap: 20px;
  margin-top: 2vh;
`;

export const AttendListWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  column-gap: 20px;
  overflow-x: scroll;
`;
