import { TouchableOpacityProps } from 'react-native';

import { CarInterface } from '../../interface/CarInterface';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
  StyledContainer,
  StyledDetails,
  StyledBrand,
  StyledName,
  StyledAbout,
  StyledRent,
  StyledType,
  StyledPeriod,
  StyledPrice,
  StyledCarImage
} from './styled';

interface Props extends TouchableOpacityProps {
  data: CarInterface;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <StyledContainer {...rest}>
      <StyledDetails>
        <StyledBrand>{data.brand}</StyledBrand>
        <StyledName>{data.name}</StyledName>
        <StyledAbout>
          <StyledRent>
            <StyledPeriod>{data.rent.period}</StyledPeriod>
            <StyledPrice>{`$ ${data.rent.price}`}</StyledPrice>
          </StyledRent>
          <StyledType>
            <MotorIcon />
          </StyledType>
        </StyledAbout>
      </StyledDetails>

      <StyledCarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </StyledContainer>
  );
}
