import styled, { css } from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DateValueProps {
  selected: boolean;
}

export const StyledContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
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
  font-size: ${RFValue(34)}px;

  margin-top: 24px;
`;

export const StyledRentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const StyledDateInfo = styled.View`
  width: 30%;
`;

export const StyledDateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const StyledDateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `};
`;

export const StyledContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const StyledFooter = styled.View`
  padding: 24px;
`;
