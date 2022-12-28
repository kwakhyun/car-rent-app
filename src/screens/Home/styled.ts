import styled from 'styled-components/native';

import { FlatList, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarInterface } from '../../interface/CarInterface';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const StyledHeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeader = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
  padding: 28px 24px;
`;

export const StyledTotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

interface StyledCarListProps {
  data: CarInterface[];
  keyExtractor: (item: CarInterface) => string;
  renderItem: ({ item }: { item: CarInterface }) => JSX.Element;
}

export const StyledCarList = styled(
  FlatList as new () => FlatList<CarInterface>
).attrs({
  contentContainerStyle: {
    padding: 8
  },
  showsVerticalScrollIndicator: false
})<StyledCarListProps>``;

export const StyledMyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  border-radius: 30px;

  position: absolute;
  bottom: 13px;
  right: 22px;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
`;
