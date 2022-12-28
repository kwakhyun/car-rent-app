import {
  StyledCarImage,
  StyledCarImageWrapper,
  StyledContainer,
  StyledImageIndex,
  StyledImageIndexes
} from './styled';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <StyledContainer>
      <StyledImageIndexes>
        <StyledImageIndex active={true} />
        <StyledImageIndex active={false} />
        <StyledImageIndex active={false} />
        <StyledImageIndex active={false} />
      </StyledImageIndexes>

      <StyledCarImageWrapper>
        <StyledCarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </StyledCarImageWrapper>
    </StyledContainer>
  );
}
