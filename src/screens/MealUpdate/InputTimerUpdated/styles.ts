import { TextInput } from "react-native";
import { css, styled } from "styled-components/native";

export const Container = styled.Pressable`
  align-items: flex-start;
  gap: 4px;
  flex: 1;
`

export  const Describe = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  line-height: 18.2px;
  margin-right: 2px;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_500};
  border-radius: 6px;
  width: 100%;
  flex: 1;
  padding-left: 14px;
`

export  const InputStyled = styled(TextInput)`
  
`

