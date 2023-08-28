import { css, styled } from "styled-components/native";
import { Pressable } from 'react-native'

export const Container = styled.View`
  align-items: flex-start;
  gap: 8px;
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD} ;
    font-size: ${theme.FONT_SIZE.SM}px;
    color:  ${theme.COLORS.GRAY_200};
  `}

  line-height: 18.2px;
`

export const RowPicker = styled.View`
  flex-direction: row;
  gap: 8px;
`

export type PickerStyledType = 'YES' | 'NO';

interface Props {
  picker: PickerStyledType
}

export const Picker = styled(Pressable)<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  flex: 1;
`

export const PickerDisc = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({theme, picker}) => picker === 'YES' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
