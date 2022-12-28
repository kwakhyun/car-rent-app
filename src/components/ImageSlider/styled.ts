import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

interface ImageIndexProps {
  active: boolean;
}

export const StyledContainer = styled.View`
  width: 100%;
`;

export const StyledImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const StyledImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

export const StyledCarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const StyledCarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
