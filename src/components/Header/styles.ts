import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  height: 37px;
`
export const UserBox = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid white;
  overflow: hidden;
  background-position: center;
  border: 2px solid ${({theme})=> theme.COLORS.GRAY_200};
`
export const UserImg = styled.Image`
  width: 40px;
  height: 40px;
  align-self: center;
`