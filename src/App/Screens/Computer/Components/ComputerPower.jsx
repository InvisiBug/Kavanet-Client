import React from "react";
import { useEffect, useState } from "react";
import SimpleControl from "../../../Ui Library/Controllers/SimpleControl";
import { apiFetch } from "../../../../Helpers/fetch";

const ComputerPower = () => {
  const [deviceData, setDeviceData] = useState(JSON.parse(localStorage.getItem("Computer Power")));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeviceData(JSON.parse(localStorage.getItem("Computer Power")));
    }, 100);
    return () => clearTimeout(timer);
  }, [deviceData]);

  return (
    <SimpleControl
      title={"Computer Power"}
      pos={[50, 10]}
      onAction={() => apiFetch("/api/ComputerPower/On")}
      offAction={() => apiFetch("/api/ComputerPower/Off")}
      state={deviceData.isOn}
      connection={deviceData.isConnected}
    />
  );
};

export default ComputerPower;
