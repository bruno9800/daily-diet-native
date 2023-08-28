import { SafeAreaView } from "react-native-safe-area-context";
import { css, styled } from "styled-components/native";


export type BackgroundColorTypes = 'BAD' | 'GOOD'

interface Props {
  type: BackgroundColorTypes
}

export const Container = styled(SafeAreaView)<Props>`
   flex: 1;
   background-color: ${({theme, type}) => type === 'GOOD' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 33px 24px 24px 24px;
  gap: 24px;
`

export const Info = styled.View`
`

interface StrongProps {
  type: 'LG' | 'SM'
}

export const Strong = styled.Text<StrongProps>` 
   ${({theme, type}) => css`
    color: ${theme.COLORS.GRAY_100} ;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${type === 'LG' ? 20 : theme.FONT_SIZE.SM}px;
    line-height: ${type === 'LG' ? 26 : 18.2}px;
  `}

  align-self: flex-start;
  
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
   ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200} ;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  align-self: flex-start;
  line-height: 20.8px;
  margin-bottom: 24px;
`


export const Actions = styled.View`
  margin-top: auto;
  gap: 8px;
`