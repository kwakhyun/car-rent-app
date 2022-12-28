import { useRoute } from '@react-navigation/native';

import { CarInterface } from '../../interface/CarInterface';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
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
  StyledAbout,
  StyledAccessories,
  StyledFooter
} from './styled';

interface Params {
  car: CarInterface;
}

export function CarDetails() {
  const navigation = useRootStackParamList();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('Scheduling', { car });
  }

  function handleBackButton() {
    navigation.goBack();
  }

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
            <StyledPrice>$&nbsp;{car.rent.price}</StyledPrice>
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

        <StyledAbout>{car.about}</StyledAbout>
      </StyledContent>

      <StyledFooter>
        <Button title="렌트 기간 선택" onPress={handleConfirmRental} />
      </StyledFooter>
    </StyledContainer>
  );
}
