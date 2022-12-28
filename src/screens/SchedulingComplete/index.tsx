import { StatusBar, useWindowDimensions } from 'react-native';

import { useRootStackParamList } from '../../hooks/useRootStackParamList';
import { ConfirmButton } from '../../components/ConfirmButton';

import {
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledMessage,
  StyledFooter
} from './styled';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useRootStackParamList();

  function handleConfirmRental() {
    navigation.navigate('Home');
  }

  return (
    <StyledContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />

      <StyledContent>
        <DoneSvg width={80} height={80} />
        <StyledTitle>
          차량 예약이 {'\n'}
          완료되었습니다.
        </StyledTitle>

        <StyledMessage>
          예약 내역은 마이페이지에서 확인하실 수 있습니다.
        </StyledMessage>
      </StyledContent>

      <StyledFooter>
        <ConfirmButton title="OK" onPress={handleConfirmRental} />
      </StyledFooter>
    </StyledContainer>
  );
}
