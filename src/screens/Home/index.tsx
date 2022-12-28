import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { api } from '../../services/api';
import { CarInterface } from '../../interface/CarInterface';
import { useRootStackParamList } from '../../hooks/useRootStackParamList';

import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

import { useTheme } from 'styled-components';

import {
  StyledContainer,
  StyledHeader,
  StyledTotalCars,
  StyledHeaderContent,
  StyledCarList,
  StyledMyCarsButton
} from './styled';

import Logo from '../../assets/logo.svg';

export function Home() {
  const [cars, setCars] = useState<CarInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useRootStackParamList();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log('== fetchCars ==> ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleCarDetails(car: CarInterface) {
    navigation.navigate('CarDetails', { car });
  }

  function handleMyCars() {
    navigation.navigate('MyCars');
  }

  return (
    <StyledContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <StyledHeader>
        <StyledHeaderContent>
          <Logo width={RFValue(108)} height={RFValue(16)} />
          <StyledTotalCars>렌트 가능 차량 : {cars.length}</StyledTotalCars>
        </StyledHeaderContent>
      </StyledHeader>

      {loading ? (
        <Loading />
      ) : (
        <StyledCarList
          data={cars}
          keyExtractor={(item: { id: string }) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <StyledMyCarsButton onPress={handleMyCars}>
        <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape} />
      </StyledMyCarsButton>
    </StyledContainer>
  );
}
