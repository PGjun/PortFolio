import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "../style/styled";

const settings = {
  dots: true,
  Infinity: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
};
const StyledSlider = styled(Slider)`
  .slick-list {
    height: 42rem;
    margin: 0 auto;
  }
  .slick-prev:before,
  .slick-next:before {
    color: coral;
  }
`;
const H1Style = styled.div`
  font-size: 3rem;
  color: coral;
  font-family: "GangwonEduPowerExtraBoldA";
`;
const H3Style = styled.div`
  font-size: 2rem;
  color: #383b40;
  font-family: "GangwonEduPowerExtraBoldA";
`;
export default function Carousel() {
  return (
    <>
      <StyledSlider {...settings}>
        <div>
          <div style={{ padding: "2rem" }}>
            <H1Style>중고 물품을 더 현명하게 거래하는 방법!</H1Style>
            <p />
            <H1Style>
              <span style={{ fontFamily: "ulsanjunggu", fontSize: "4rem" }}>
                Watch
              </span>
              <span
                style={{
                  fontFamily: "ulsanjunggu",
                  color: "#357a38",
                  fontSize: "4rem",
                }}
              >
                Rabbit
              </span>{" "}
              입니다
            </H1Style>
            <br />
            <br />
            <br />
            <H3Style>- '구매자'에게 더 편리한 물품 검색을 제공합니다</H3Style>
            <p />
            <H3Style>
              - '판매자'에게 적절한 판매가를 정할 수 있게 도와드립니다.
            </H3Style>
            <p />
            <H3Style>
              - 물품을 지역, 가격, 매너온도, 분류 별로 찾을 수있어 더 많은
              정보를 한눈에 볼 수 있습니다
            </H3Style>
            <p />

            <H3Style>
              - 원하는 물품을 검색하여 전국 및 지역의 '평균가' '최저가'
              '최고가'를 바로 알아보세요!
            </H3Style>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              padding: "3rem",
              marginTop: "5rem",
              justifyContent: "space-between",
              alignItems: "flex-end",
              color: "dimgray",
              fontSize: "1rem",
              fontFamily: "MICEGothic Bold",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <Img
                src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/comdoge.jpg"
                width="200px"
                marginLeft="3.2rem"
              />
              <br />
              <br />
              name : 홍승진
              <p />
              E-mail : ghdtkdbs12@naver.com
              <p />
              Github :{" "}
              <a href="https://github.com/ghdtkdbs12">
                https://github.com/ghdtkdbs12
              </a>
              <p />
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <Img
                src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/baek.png"
                width="200px"
                marginLeft="2.2rem"
              />
              <br />
              <br />
              name : 백종민
              <p />
              E-mail : jmbaek07@gmail.com
              <p />
              Github :{" "}
              <a href="https://github.com/jmin07">https://github.com/jmin07</a>
              <p />
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
              }}
            >
              <Img
                src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/charac.png"
                width="200px"
                height="200px"
                marginLeft="2.1rem"
              />
              <br />
              <br />
              name : 박경준
              <p />
              E-mail : pgj127@gmail.com
              <p />
              Github :{" "}
              <a href="https://github.com/PGjun">https://github.com/PGjun</a>
              <p />
            </div>
          </div>
        </div>
      </StyledSlider>
    </>
  );
}
