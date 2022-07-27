//스타일
import { Img, BubbleBox } from "../style/styled";
import styled from "styled-components";

//MUI 스타일
import { Box, Container } from "@mui/material";

//컴포넌트
import TraceTable from "../components/TraceTable";

const TitleTextStyle = styled.div`
  font-size: 1.7rem;
  color: #383b40;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Trace() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "#f5f5f5",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #ccc",
            height: "100vh",
            fontFamily: "MICEGothic Bold",
          }}
        >
          <TitleTextStyle>추적 알림</TitleTextStyle>
          <br />
          <TraceTable />
          <br />
          <br />
          <br />
          <div style={{ display: "flex", float: "right" }}>
            <BubbleBox>
              추적 알림 설정 추적할 상품을 설정하고 알림을 기다리세요.
              <br />
              Watch Rabbit이 추적하고 알려드립니다.
              <p />
              해당 서비스는 <b>로그인</b>이 필요한 서비스입니다!
              <p />
            </BubbleBox>
            <Img
              src="/img/WRN.png"
              width="200px"
              height="200px"
            />
          </div>
        </Box>
      </Container>
    </>
  );
}
