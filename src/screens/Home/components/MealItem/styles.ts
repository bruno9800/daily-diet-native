import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  padding: 14px 16px 14px 12px;
  align-items: center;
  gap: 12px;
  flex-direction: row;

  border-radius: 6px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_500};
`

export const Meal = styled.Text`
  flex: 1;
  /**
    text-overflow: ellipsis;
  line-height: 20.8px;
  overflow: hidden;
  white-space: nowrap;
  */

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const Timer = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  line-height: 15.6px;
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({theme})=> theme.COLORS.GRAY_400};
`


export type statusType = 'GOOD' | 'BAD';

interface Props {
  status: statusType;
}

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  background-color: ${({theme, status}) => status === 'GOOD'? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 14px;
`