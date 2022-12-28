import { TouchableOpacityProps } from 'react-native';

import { StyledContainer, StyledTitle } from './styled';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <StyledContainer {...rest}>
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
}
