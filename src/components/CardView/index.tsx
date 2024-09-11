import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import Logo from '../../../assets/logo.png';
import { s } from './styles';
import { Divider } from '../Divider/inde';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { ByButton } from '../ByButton';

import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export function CardView() {

    const [carData, setCarData] = useState<CarModel | undefined>(undefined);

    useEffect(()=>{
        
        (async ()=>{
            await loadCarData(1, setCarData)
        })();
    },[])

    const renderLogoBox = () => (
        <View style={s.logoContainer}>
            <Image style={s.imageLogo} source={Logo} />
        </View>
    );


    const renderCarDetails = () => (
        <View style={{alignItems:'center'}}>
            <Text style={s.carBrand}>Lamborghini</Text>
            <Text style={s.carName}>{carData?.carName}</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image 
            style={s.carImage}
            source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
        />
    )

    const renderPriceControls = () => (
        <View style={s.priceLabelContainer}> 
            <Button title='<' color={'#01A6B3'} onPress={()=>handlePreviousItem(carData, setCarData)} />
            <Text style={s.priceLabel}> {carData?.price} </Text>
            <Button title='>' color={'#01A6B3'} onPress={()=>handleNextItem(carData, setCarData)} />
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

