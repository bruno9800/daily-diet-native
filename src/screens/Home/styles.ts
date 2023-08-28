import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  background-color: ${({theme})=> theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  line-height: 20.8px;
  margin-top: 40px;
  margin-bottom: 8px;
`

export const GradientOverlay = styled(LinearGradient).attrs(() => ({
  colors: ['#FAFAFA00', '#FAFAFAFF'],
}))`
  position: absolute;
  width: 100%;
  height: 160px;
  bottom: 0;
  left: 0;
  right: 0;
`
