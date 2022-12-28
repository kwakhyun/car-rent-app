import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';
import { StyledContainer, StyledTitle } from './styled';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  loading = false,
  disabled = false
}: Props) {
  const theme = useTheme();

  return (
    <StyledContainer
      onPress={onPress}
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: disabled === true || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <StyledTitle>{title}</StyledTitle>
      )}
    </StyledContainer>
  );
}
