import { useState } from "react";
import { Btn } from "./components/btn/Btn";
import { Carts } from "./components/carts/Carts";
import { SApp, STitle } from "./styled";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [waitTime, setWaitTime] = useState(true);
  const [status, setStatus] = useState(false);

  let updatedH = time.h,
    updatedM = time.m,
    updatedS = time.s;

  const changeWaitTime = () => {
    setWaitTime(!waitTime);
  };

  const start = () => {
    timeUpDate();
    setInterv(setInterval(timeUpDate, 1000));
    setStatus(true);
  };

  const stop = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0, h: 0 });
    setStatus(false);
  };

  const wait = () => {
    if (waitTime) {
      clearInterval(interv);
      setStatus(true);
      setWaitTime(false);
    } else {
      timeUpDate();
      setInterv(setInterval(timeUpDate, 1000));
      setStatus(true);
      setWaitTime(true);
    }
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0, h: 0 });
    updatedH = 0;
    updatedM = 0;
    updatedS = 0;
    setStatus(true);
    setInterv(setInterval(timeUpDate, 1000));
  };

  const timeUpDate = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  return (
    <SApp>
      <STitle>stopwatch</STitle>
      <Carts time={time} />
      <Btn
        start={start}
        status={status}
        stop={stop}
        reset={reset}
        wait={wait}
        changeWaitTime={changeWaitTime}
      />
    </SApp>
  );
}

export default App;
