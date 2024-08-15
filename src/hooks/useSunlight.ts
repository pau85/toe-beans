import { useState, useEffect } from 'react'
import { getLightRay } from '../services/sunlightService/SunlightService'

export async function useSunlight(hour: number) {
    const [lightLevel, setLightLevel] = useState(await getLightRay(hour));

    useEffect(() => {
        const fetchSunlight = async () => {
            setLightLevel(lightLevel);
        }

        fetchSunlight()
    }, [hour])

    return lightLevel
}