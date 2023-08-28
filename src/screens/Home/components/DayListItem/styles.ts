import { css, styled } from "styled-components/native";

export const Container = styled.View`
  align-items: flex-start;
  gap: 8px;
`

export const Date = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  line-height: 23.4px;
`