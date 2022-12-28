import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const StyledContainer = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const StyledHeader = styled.View`
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;

  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  margin-top: 24px;
`;

export const StyledSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;

  margin-top: 24px;
`;

export const StyledContent = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const StyledAppointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
`;

export const StyledAppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const StyledAppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const StyledCarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const StyledCarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-bottom: 5px;
  margin-top: -15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const StyledCarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`;

export const StyledCarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const StyledCarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
`;
