import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import { CarInterface } from '../../interface/CarInterface';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledRentalPeriod,
  StyledDateInfo,
  StyledDateTitle,
  StyledDateValue,
  StyledContent,
  StyledFooter
} from './styled';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarInterface;
}

import ArrowSvg from '../../assets/arrow.svg';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { useRootStackParamList } from '../../hooks/useRootStackParamList';

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation = useRootStackParamList();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails', {
      car,
      start: rentalPeriod.startFormatted,
      end: rentalPeriod.endFormatted
    });
  }

  function handleBackButton() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        'yyyy/MM/dd'
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'yyyy/MM/dd')
    });
  }

  return (
    <StyledContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <StyledHeader>
        <BackButton onPress={handleBackButton} color={theme.colors.shape} />
        <StyledTitle>렌트 기간 선택</StyledTitle>

        <StyledRentalPeriod>
          <StyledDateInfo>
            <StyledDateTitle>렌트 시작일</StyledDateTitle>
            <StyledDateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </StyledDateValue>
          </StyledDateInfo>

          <ArrowSvg />

          <StyledDateInfo>
            <StyledDateTitle>렌트 반납일</StyledDateTitle>
            <StyledDateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </StyledDateValue>
          </StyledDateInfo>
        </StyledRentalPeriod>
      </StyledHeader>

      <StyledContent>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </StyledContent>

      <StyledFooter>
        <Button
          title="선택 완료"
          onPress={handleConfirmRental}
          disabled={!!rentalPeriod.startFormatted ? false : true}
        />
      </StyledFooter>
    </StyledContainer>
  );
}
