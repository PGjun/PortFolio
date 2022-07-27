import styled from "styled-components";

export const Layout = styled.div``;

export const CenterDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: ${(props) => props.boxShadow};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius || "20px"};
  text-align: ${(props) => props.textAlign || "center"};
  border: none;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: ${(props) => props.boxShadow};
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 20px;
  margin: auto;
  padding: 5%;
  box-shadow: 0px 0px 10px 1px rgb(170, 89, 22);
`;

export const TitleText = styled.h1`
  font-size: ${(props) => props.fontSize || "50px"};
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding};
  text-shadow: 1px 1px 3px rgb(170, 89, 22);
`;

export const Select = styled.select`
  width: 60px;
  height: 42px;
  border: none;
  border-radius: 7px;
  outline: none;
  box-shadow: 0px 0px 1px 0px rgb(170, 89, 22);
  margin-right: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
`;

export const ModalButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  position: absolute;
  top: 63px;
  left: 60%;
`;

export const ModalCloseButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  position: absolute;
  top: 10px;
  left: 92%;
`;

export const SignButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  position: relative;
  left: -60px;
`;

export const SignUpButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  position: absolute;
  top: 249px;
  left: 205px;
`;

export const MainPageButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 32px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  position: absolute;
  top: 20px;
  left: 60%;
`;

export const SearchButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: coral;
  height: 42px;
  cursor: pointer;
  padding-bottom: 5px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  box-shadow: ${(props) =>
    props.boxShadow || "0px 0px 3px 0px rgb(170, 89, 22)"};
  width: ${(props) => props.width || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
`;

export const Input = styled.input`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width || "200px"};
  height: 40px;
  border: none;
  border-radius: ${(props) => props.borderRadius || "7px"};
  outline: none;
  box-shadow: 0px 0px 3px 0px rgb(170, 89, 22);
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  opacity: ${(props) => props.opacity};
  display: ${(props) => props.display};
  margin-left: ${(props) => props.marginLeft};
`;

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position || "relative"};
`;

export const TextSpan = styled.span`
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  position: absolute;
  left: 60%;
  top: 42%;
`;

export const MainText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  left: 20%;
`;

export const TitleSpan = styled.span`
  color: coral;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
`;

export const TitleButton = styled.button`
  color: white;
  font-size: 20px;
  border-radius: 5px;
  background-color: coral;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 3px 0px rgb(170, 89, 22);
  font-weight: bold;
  width: 80px;
  height: 30px;
  position: absolute;
  left: 89%;
  top: 35%;
`;

export const MainInput = styled.input`
  width: 20rem;
  height: 30px;
  border: none;
  border-radius: ${(props) => props.borderRadius || "7px"};
  outline: none;
  box-shadow: 0px 0px 3px 0px rgb(170, 89, 22);
  position: absolute;
  left: 35%;
  top: 38%;
`;

export const BubbleBox = styled.div`
    font-size: 22px;
    position: relative;
    margin: 0px;
    padding: 30px;
    width: 600px;
    height: 120px;
    color: #fff;
    border-radius: 10px;
    background-color: coral;
    &::before {
        content: "";
        position: absolute;
        top: 100px;
        right: -30px;
        border-left: 40px solid coral;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }
`;
