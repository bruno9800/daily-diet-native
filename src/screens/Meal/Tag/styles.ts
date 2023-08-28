import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  align-self: flex-start;
  border-radius: 1000px;

`

export type TagStyled = 'GOOD' | 'BAD';

interface Props {
  type: TagStyled;
}


export const TagStatus = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;

  background-color: ${({theme, type}) => type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Strong = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  line-height: 18.2px;
`