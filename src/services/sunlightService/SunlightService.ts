import { Sunshine } from '../../../../sunlight-service/src/components/Sunshine/Sunshine'

export function getLightLevel(hour: number) {

    const sunshine = new Sunshine();

    console.log('sunshine.lighting: ',sunshine.lighting)

}