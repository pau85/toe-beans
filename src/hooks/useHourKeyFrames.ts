
function useHourKeyFrames(hour: number) {
    const degree = (hour/12) * 360;
    const keyframes = `
        @keyframes dynamicHourSpin {
            from {
                transform: translateX(-50%) rotate(${degree}deg);
            }
            to {
                transform: translateX(-50%) rotate(${degree + 360}deg);
            }
        }
    `;
    return keyframes;
}

export default useHourKeyFrames;