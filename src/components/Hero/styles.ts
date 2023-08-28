
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const Info = styled.Text`
  ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.XXL}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_100};
      line-height: 41.6px;
      text-align: center;
  `}
`

export const Describe = styled.Text`
  ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_200};
      text-align: center;
      line-height: 18.2px;
  `}
`