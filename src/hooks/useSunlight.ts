import { useState, useEffect } from 'react'
import { getLightLevel } from '../services/sunlightService/SunlightService'

export async function useSunlight(hour: number) {
    const [lightLevel, setLightLevel] = useState(await getLightLevel(hour));

    useEffect(() => {
        const fetchSunlight = async () => {
            setLightLevel(lightLevel);
        }

        fetchSunlight()
    }, [hour])

    return lightLevel
}