import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRoute } from '@react-navigation/native';

import { api } from '../../services/api';
import { CarInterface } from '../../interface/CarInterface';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getDatesBetween } from '../../utils/getDatesBetween';
import { getDateDifference } from '../../utils/getDateDifference';
import { useRootStackParamList } from '../../hooks/useRootStackParamList';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  StyledContainer,
  StyledHeader,
  StyledCarImages,
  StyledContent,
  StyledDetails,
  StyledDescription,
  StyledBrand,
  StyledName,
  StyledRent,
  StyledPeriod,
  StyledPrice,
  StyledRentalPeriodContainer,
  StyledAccessories,
  StyledFooter,
  StyledCalendarIcon,
  StyledDateInfo,
  StyledDateTitle,
  StyledDateValue,
  StyledRentalPrice,
  StyledRentalPriceLabel,
  StyledRentalPriceDetails,
  StyledRentalPriceQuota,
  StyledRentalPriceTotal
} from './styled';

interface Params {
  car: CarInterface;
  dates: string[];
  start: string;
  end: string;
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation = useRootStackParamList();
  const route = useRoute();
  const { car, start, end } = route.params as Params;

  const rentDates = getDatesBetween(start, end);
  const dateDifference = getDateDifference(start, end);
  const rentTotal = Number(dateDifference * car.rent.price);

  async function handleConfirm() {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...rentDates
    ];

    await api.post(`/schedules_byuser`, {
      user_id: 1,
      car,
      startDate: start,
      ensDate: end
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => {
        Alert.alert('렌트 예약에 실패했습니다.');
        setLoading(false);
      });
  }

  function handleBackButton() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: start,
      end: end
    });
  }, []);

  return (
    <StyledContainer>
      <StyledHeader>
        <BackButton onPress={handleBackButton} />
      </StyledHeader>

      <StyledCarImages>
        <ImageSlider imagesUrl={car.photos} />
      </StyledCarImages>

      <StyledContent>
        <StyledDetails>
          <StyledDescription>
            <StyledBrand>{car.brand}</StyledBrand>
            <StyledName>{car.name}</StyledName>
          </StyledDescription>

          <StyledRent>
            <StyledPeriod>{car.rent.period}</StyledPeriod>
            <StyledPrice>$ {car.rent.price}</StyledPrice>
          </StyledRent>
        </StyledDetails>

        <StyledAccessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </StyledAccessories>

        <StyledRentalPeriodContainer>
          <StyledCalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(30)}
              color={theme.colors.shape}
            />
          </StyledCalendarIcon>

          <StyledDateInfo>
            <StyledDateTitle>렌트 시작일</StyledDateTitle>
            <StyledDateValue>{rentalPeriod.start}</StyledDateValue>
          </StyledDateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <StyledDateInfo>
            <StyledDateTitle>렌트 마감일</StyledDateTitle>
            <StyledDateValue>{rentalPeriod.end}</StyledDateValue>
          </StyledDateInfo>
        </StyledRentalPeriodContainer>

        <StyledRentalPrice>
          <StyledRentalPriceLabel>총 렌트 비용</StyledRentalPriceLabel>
          <StyledRentalPriceDetails>
            <StyledRentalPriceQuota>
              $ {car.rent.price} x {dateDifference}일
            </StyledRentalPriceQuota>
            <StyledRentalPriceTotal>$ {rentTotal}</StyledRentalPriceTotal>
          </StyledRentalPriceDetails>
        </StyledRentalPrice>
      </StyledContent>

      <StyledFooter>
        <Button
          title="예약하기"
          color={theme.colors.success}
          onPress={handleConfirm}
          disabled={!!loading}
          loading={loading}
        />
      </StyledFooter>
    </StyledContainer>
  );
}
