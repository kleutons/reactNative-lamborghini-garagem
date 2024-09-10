import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import Logo from '../../../assets/logo.png';
import { s } from './styles';
import { Divider } from '../Divider/inde';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { ByButton } from '../ByButton';

export function CardView() {

    const renderLogoBox = () => (
        <View style={s.logoContainer}>
            <Image style={s.imageLogo} source={Logo} />
        </View>
    );


    const renderCarDetails = () => (
        <View style={{alignItems:'center'}}>
            <Text style={s.carBrand}>Lamborghini</Text>
            <Text style={s.carName}>MODEL</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image 
            style={s.carImage}
            source={{uri: `${CAR_ASSETS_BASE_URL}2.png`}}
        />
    )

    const renderPriceControls = () => (
        <View style={s.priceLabelContainer}> 
            <Button title='<' color={'#01A6B3'} onPress={()=>{}} />
            <Text style={s.priceLabel}> VALOR </Text>
            <Button title='>' color={'#01A6B3'} onPress={()=>{}} />
        </View>
    )

    return (
    <View style={s.container}>
        {renderLogoBox()}
        
        <Divider />
        
        {renderCarDetails()}
        {renderCarImage()}

        <Divider />
        
        <ByButton />
        {renderPriceControls()}
    </View>
  );
}

