import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const StyledContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 109px;
  height: 92px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 16px;
  margin-bottom: 8px;
`;

export const StyledName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
