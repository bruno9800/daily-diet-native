import { TouchableOpacity } from 'react-native';
import styled, {css} from 'styled-components/native'

export const ButtonContainer = styled(TouchableOpacity)`
	padding: 16px 24px;
	align-items: center;
	justify-content: center;
  flex-direction: row;
	gap: 12px;

	border-radius: 6px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;


interface TextProps {
  type: 'PRIMARY' | 'SECONDARY'
}

export const TextButton = styled.Text<TextProps>`
  ${({theme, type}) => css`
      color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  line-height: 18.2px;
`
