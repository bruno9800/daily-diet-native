import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";


export const Container = styled.View`
  padding: 34px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const SpaceBox = styled.View`
  width: 24px;
`


export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  line-height: 23.4px;
  text-align: center;
`

export const Button = styled(TouchableOpacity)`
`

export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.GRAY_200,
  size: 24
}))`
`;
