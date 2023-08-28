import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 33px 24px 24px 24px;
  gap: 24px;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
`

