import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`

export type TitleStyled = 'GOOD' | 'BAD';

interface Props {
  type: TitleStyled
}

export const Title = styled.Text<Props>`
  ${({theme, type}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  margin-bottom: 8px;

  line-height: 31.2px;
  text-align: center;
`
export const Subtitle = styled.Text`
   ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 40px;

  line-height: 20.8px;
  text-align: center;
`


export const Image = styled.Image`
  margin-bottom: 32px;
`


export const Strong = styled.Text`
${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  line-height: 20.8px;
  text-align: center;
`