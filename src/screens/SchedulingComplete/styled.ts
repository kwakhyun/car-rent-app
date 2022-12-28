import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const StyledContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 80px;
`;

export const StyledTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-transform: uppercase;

  margin-top: 40px;
`;

export const StyledMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  line-height: 25px;
  text-align: center;

  margin-top: 16px;
`;

export const StyledFooter = styled.View`
  width: 100%;
  align-items: center;

  margin: 80px 0;
`;
