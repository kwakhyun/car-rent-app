import { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { api } from '../../services/api';
import { CarInterface } from '../../interface/CarInterface';
import { useRootStackParamList } from '../../hooks/useRootStackParamList';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledSubTitle,
  StyledContent,
  StyledAppointments,
  StyledAppointmentsTitle,
  StyledAppointmentsQuantity,
  StyledCarWrapper,
  StyledCarFooter,
  StyledCarFooterTitle,
  StyledCarFooterPeriod,
  StyledCarFooterDate
} from './styled';

interface CarProps {
  id: string;
  user_id: string;
  car: CarInterface;
  startDate: string;
  ensDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useRootStackParamList();
  const theme = useTheme();

  function handleBackButton() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api('/schedules_byuser?user_id=1');
        setCars(response.data.reverse());
      } catch (error) {
        console.log('== MyCars - fetchCars ==> ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton onPress={handleBackButton} color={theme.colors.shape} />
        <StyledTitle>마이페이지</StyledTitle>
        <StyledSubTitle>
          내가 예약한 차량 정보를 확인할 수 있습니다.
        </StyledSubTitle>
      </StyledHeader>

      {loading ? (
        <Loading />
      ) : (
        <StyledContent>
          <StyledAppointments>
            <StyledAppointmentsTitle>예약 내역</StyledAppointmentsTitle>
            <StyledAppointmentsQuantity>
              {cars.length}건
            </StyledAppointmentsQuantity>
          </StyledAppointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <StyledCarWrapper>
                <Car data={item.car} />
                <StyledCarFooter>
                  <StyledCarFooterTitle>기간</StyledCarFooterTitle>
                  <StyledCarFooterPeriod>
                    <StyledCarFooterDate>{item.startDate}</StyledCarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <StyledCarFooterDate>{item.ensDate}</StyledCarFooterDate>
                  </StyledCarFooterPeriod>
                </StyledCarFooter>
              </StyledCarWrapper>
            )}
          />
        </StyledContent>
      )}
    </StyledContainer>
  );
}
