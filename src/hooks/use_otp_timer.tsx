import {useEffect, useState} from 'react';
import secondsToMin from '../base/functions/seconds_to_hms';

const TEXT_OTP_AGAIN = 'ยังไม่ได้รับ SMS OTP ต้องการขออีกครั้ง';

type Return = {
  renderTextButton: () => string;
};

function useOtpTimer(): Return {
  let [time, setTime] = useState<number>(0);
  const [textButton, setTextButton] = useState<string>(TEXT_OTP_AGAIN);
  const [state, setState] = useState<'default' | 'pending'>('default');

  function onRequestOtp() {
    if (state == 'pending') return;
    setTextButton('ขอ OTP ได้อีกครั้งใน');
    setState('pending');
    setTime(300);
  }

  //! when open page request otp
  useEffect(() => {
    if (state == 'pending') return;
    setTextButton(TEXT_OTP_AGAIN);
    setTimeout(() => {
      onRequestOtp();
    }, 300);
  }, []);

  //! set time interval
  useEffect(() => {
    if (time == 0) return setState('default');

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function renderTextButton() {
    let timer = `${textButton} ${secondsToMin(time)}`;
    return state === 'default' ? textButton : timer;
  }

  return {renderTextButton};
}

export default useOtpTimer;
