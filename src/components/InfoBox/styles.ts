import { css, styled } from "styled-components/native";
import { Hero } from "../Hero";

interface Props {
  bgColor: string;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 8px;
`

export const Info = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  line-height: 31.2px;
`

export const Describe = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
  line-height: 18.2px;
`