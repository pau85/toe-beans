import { useEffect, useState } from "react";

function useDateTimeData() {
  
  const [dateTimeData, setDateTimeData] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDateTimeData(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, [])

  return dateTimeData;
}

export default useDateTimeData;