import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components/native";
import { styled } from "styled-components/native";

export const Overlay = styled(SafeAreaView)`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);

  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  padding: 40px 21px 24px 24px;
  width: 327px;
  border-radius: 8px;
  background: ${({theme}) => theme.COLORS.GRAY_700};
  gap: 32px;
`

export const Title = styled.Text`
  ${({theme}) => css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.LG}px;
      color: ${theme.COLORS.GRAY_200};
    `}

    text-align: center;

    line-height: 32.4px;
`

export const Actions = styled.View`
  flex-direction: row;
  gap: 12px;
  
`