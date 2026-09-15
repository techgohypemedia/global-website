"use client";

import React from "react";
import EarthLeakageSubpage from "../../../components/EarthLeakageSubpage";
import { ELD_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function AdjustableThresholdsPage() {
  const data = ELD_SUBPAGES["adjustable-thresholds"];
  return <EarthLeakageSubpage data={data} />;
}
