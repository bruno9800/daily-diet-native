import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import  ArrowUpRight  from 'phosphor-react-native/src/icons/ArrowUpRight'

export type PercentBoxStyled = 'PRIMARY' | 'SECONDARY'


interface Props {
  type: PercentBoxStyled;
}

export const Container = styled.View<Props>`
  margin-top: 36px;
  padding: 20px 16px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  position: relative;
`

export  const ButtonIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, type}) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK,
  size: 24,
}))`
`