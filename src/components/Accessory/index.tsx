import { SvgProps } from 'react-native-svg';

import { StyledContainer, StyledName } from './styled';

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: Props) {
  return (
    <StyledContainer>
      <Icon width={32} height={32} />
      <StyledName>{name}</StyledName>
    </StyledContainer>
  );
}
