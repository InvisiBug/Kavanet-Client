import React from "react";
import { useEffect, useState } from "react";
import SimpleControl from "../../../Ui Library/Controllers/SimpleControl";
import ValveControl from "../../../Ui Library/Controllers/ValveControl";
import { apiFetch } from "../../../../Helpers/fetch";

const RadiatorFan = () => {
  const x = 50;
  const y = 30;
  const [deviceData, setDeviceData] = useState(JSON.parse(localStorage.getItem("Environmental Data")));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeviceData(JSON.parse(localStorage.getItem("Environmental Data")));
    }, 100);

    return () => clearTimeout(timer);
  }, [deviceData]);

  return (
    <>
      <SimpleControl
        title={"Manual Control"}
        pos={[30, 10]}
        connection={true}
        onAction={() => apiFetch("api/ci/on")}
        offAction={() => apiFetch("api/ci/off")}
        state={new Date() < deviceData.heatingTimers.heating}
      />

      <ValveControl
        title={"Living Room"}
        pos={[x, y]}
        connection={true}
        onAction={() => apiFetch("/api/radiatorValves/livingRoom/open")}
        offAction={() => apiFetch("/api/radiatorValves/livingRoom/close")}
        state={deviceData.radiatorValves.livingRoom.isOpen ? true : false}
      />

      {/* <ValveControl
        title={"Kitchen"}
        pos={[x, y + 15]}
        connection={true}
        onAction={() => apiFetch("/api/radiatorValves/kitchen/open")}
        offAction={() => apiFetch("/api/radiatorValves/kitchen/close")}
        state={deviceData.radiatorValves.kitchen.isOpen ? true : false}
      /> */}

      <ValveControl
        title={"Liams Room"}
        pos={[x, y + 1 * 15]}
        connection={true}
        onAction={() => apiFetch("/api/radiatorValves/liamsRoom/open")}
        offAction={() => apiFetch("/api/radiatorValves/liamsRoom/close")}
        state={deviceData.radiatorValves.liamsRoom.isOpen ? true : false}
      />

      <ValveControl
        title={"Study"}
        pos={[x, y + 2 * 15]}
        connection={true}
        onAction={() => apiFetch("/api/radiatorValves/study/open")}
        offAction={() => apiFetch("/api/radiatorValves/study/close")}
        state={deviceData.radiatorValves.study.isOpen ? true : false}
      />

      <ValveControl
        title={"Our Room"}
        pos={[x, y + 3 * 15]}
        connection={true}
        onAction={() => apiFetch("/api/radiatorValves/ourRoom/open")}
        offAction={() => apiFetch("/api/radiatorValves/ourRoom/close")}
        state={deviceData.radiatorValves.ourRoom.isOpen ? true : false}
      />
    </>
  );
};

export default RadiatorFan;
