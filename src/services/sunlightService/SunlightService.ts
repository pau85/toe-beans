import { Sunshine } from '../../../node_modules/sunlight-service/src/components/Sunshine/Sunshine'
export class SunlightService {

    hour: number

    constructor(hour: number){
        this.hour = hour
    }
}

export function getLightLevel(hour: number) {

    const sunshineRayDisplay = new Sunshine();

    console.log('sunshine.lighting: ', sunshineRayDisplay.lighting)

}