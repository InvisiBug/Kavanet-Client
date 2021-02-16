import React from "react";
import { useEffect, useState } from "react";
import SimpleControl from "../../Ui Library/Controllers/SimpleControl";
import { apiFetch } from "../../../Helpers/fetch";

const FloodLight = () => {
  const [deviceData, setDeviceData] = useState(JSON.parse(localStorage.getItem("Floodlight")));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeviceData(JSON.parse(localStorage.getItem("Floodlight")));
    }, 100);
    return () => clearTimeout(timer);
  }, [deviceData]);

  return (
    <SimpleControl
      title={"Flood Light"}
      pos={[25, 20]}
      onAction={() => apiFetch("/api/Plug/On")}
      offAction={() => apiFetch("/api/Plug/Off")}
      state={deviceData.isOn}
      connection={deviceData.isConnected}
    />
  );
};

export default FloodLight;
