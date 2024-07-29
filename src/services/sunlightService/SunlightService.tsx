import React from 'react';
import SunshineRayDisplay from '../../../node_modules/sunlight-service/src/components/Sunshine/SunshineRayDisplay';

export class SunlightService {

    hour: number

    constructor(hour: number){
        this.hour = hour
    }
}

export const getLightRay: (hour: number) => 
    JSX.Element = (hour) => {
    console.log('in SunlightService - GetLightLevel')
    return <SunshineRayDisplay />
}