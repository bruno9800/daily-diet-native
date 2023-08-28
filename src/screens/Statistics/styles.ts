import { css, styled } from "styled-components/native";
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export type bgColorType = 'GREEN' | 'RED';

interface Props {
  color: bgColorType;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({theme, color}) => color === 'GREEN'? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

`

export const HeaderHero = styled.View`
  padding: 34px;
`


export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 33px 24px 24px 24px;
  gap: 12px;

  justify-items: flex-start;
  
`

export const Column = styled.View`
  gap: 12px;
  min-height: 309px;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
  align-self: center;
`




export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100} ;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  align-self: center;
  line-height: 18.2px;
  margin-bottom: 23px;
`





export const Button = styled(TouchableOpacity)`
`

export const Icon = styled(ArrowLeft).attrs(({theme}) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24
}))`
`;
