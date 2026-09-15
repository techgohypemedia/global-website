"use client";

import React from "react";
import EarthLeakageSubpage from "../../../components/EarthLeakageSubpage";
import { ELD_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function ContinuousInsulationPage() {
  const data = ELD_SUBPAGES["continuous-insulation"];
  return <EarthLeakageSubpage data={data} />;
}
