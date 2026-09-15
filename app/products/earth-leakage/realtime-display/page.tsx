"use client";

import React from "react";
import EarthLeakageSubpage from "../../../components/EarthLeakageSubpage";
import { ELD_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function RealtimeDisplayPage() {
  const data = ELD_SUBPAGES["realtime-display"];
  return <EarthLeakageSubpage data={data} />;
}
