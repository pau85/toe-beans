import React, { useEffect} from 'react';
import './../../../styles/clock.scss';
// import useDateTimeData from '../../../hooks/useDateTime';
// import useHourKeyFrames from '../../../hooks/useHourKeyFrames'
// import useInjectKeyFrames from '../../../hooks/useInjectKeyFrames';

//clock with a face, hour hand, minute hand and second hand
const Clock = () => {

  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()

  const createHourKeyFrames = (hour: number) => {
    const hour12 = hour % 12;
    const hourDegree = (hour12/12) * 360;

    console.log('degree: ',hourDegree)
    
    const keyframes = `
        @keyframes dynamicHourSpin {
            from {
                transform: translateX(-50%) rotate(${hourDegree}deg);
            }
            to {
                transform: translateX(-50%) rotate(${hourDegree + 360}deg);
            }
        }
    `;
    console.log('keyframes: ', keyframes)
    return keyframes;
  }

  const createMinuteKeyFrames = (minute: number) => {
    const minute60 = minute % 60;
    const minuteDegree = (minute60/60) * 360;

    console.log('degree: ',minuteDegree)
    
    const keyframes = `
        @keyframes dynamicMinuteSpin {
            from {
                transform: translateX(-50%) rotate(${minuteDegree}deg);
            }
            to {
                transform: translateX(-50%) rotate(${minuteDegree + 360}deg);
            }
        }
    `;
    console.log('keyframes: ', keyframes)
    return keyframes;
  }

  const createSecondKeyFrames = (second: number) => {
    const second60 = second % 60;
    const secondDegree = (second60/60) * 360;

    console.log('degree: ',secondDegree)
    
    const keyframes = `
        @keyframes dynamicSecondSpin {
            from {
                transform: translateX(-50%) rotate(${secondDegree}deg);
            }
            to {
                transform: translateX(-50%) rotate(${secondDegree + 360}deg);
            }
        }
    `;
    console.log('keyframes: ', keyframes)
    return keyframes;
  }

  const injectKeyFrames = (keyFrames: string) => {
    const stylesheet = document.styleSheets[0]

    console.log('stylesheet: ', stylesheet)

    stylesheet.insertRule(keyFrames, stylesheet.cssRules.length)
  }


  useEffect(() => {
    const updateClock = () => {
      
      console.log('hour in clock component useEffect: ',hour)


      const hourHand = document.querySelector('.hand.hour') as HTMLElement;
      const minuteHand = document.querySelector('.hand.minute') as HTMLElement;
      const secondHand = document.querySelector('.hand.second') as HTMLElement;
      const hourDegree = ((hour/12) * 360) + ((minute / 60) * 30) + 90;
      const minuteDegree = ((minute/60) * 360) + ((second / 60) * 30) + 90;
      const secondDegree = ((second /60) * 360) + 90;
      console.log('hourHand: ', hourHand)
      console.log('hourDegree: ', hourDegree)
      console.log('minuteHand', minuteHand)
      console.log('minuteDegree: ', minuteDegree)
      console.log('secondHand', secondHand)
      
      secondHand.style.transform = `rotate(${secondDegree}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;
    };

      //generate keyframes: pass hour, minute and second, return keyframes to render
      const hourKeyFrames = createHourKeyFrames(hour)
      const minuteKeyFrames = createMinuteKeyFrames(minute)
      const secondKeyFrames = createSecondKeyFrames(second)

      console.log(hourKeyFrames)
      console.log(minuteKeyFrames)
      console.log(secondKeyFrames)

      injectKeyFrames(hourKeyFrames)
      injectKeyFrames(minuteKeyFrames)
      injectKeyFrames(secondKeyFrames)

      const intervalid = setInterval(updateClock, 1000);
      updateClock()

      console.log('intervalid: ', intervalid)

      return () => clearInterval(intervalid)
  }, [])

  return (
    <div className="clock">
      <div className="number number12">12</div>
      <div className="number number3">3</div>
      <div className="number number6">6</div>
      <div className="number number9">9</div>
      <div className="hand hour dynamicHourSpin"></div>
      <div className="hand minute dynamicMinuteSpin"></div>
      <div className="hand second dynamicSecondSpin"></div>
    </div>
  );
};

export default Clock;
