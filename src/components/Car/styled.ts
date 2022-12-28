import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const StyledContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 126px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;

  box-shadow: 1px 1px 5px rgba(125, 123, 123, 0.6);
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const StyledDetails = styled.View``;

export const StyledBrand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const StyledName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const StyledAbout = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const StyledRent = styled.View`
  margin-right: 24px;
`;

export const StyledType = styled.View``;

export const StyledPeriod = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const StyledPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const StyledCarImage = styled.Image`
  width: 187px;
  height: 127px;
`;
