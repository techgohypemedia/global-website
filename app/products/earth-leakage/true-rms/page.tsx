"use client";

import React from "react";
import EarthLeakageSubpage from "../../../components/EarthLeakageSubpage";
import { ELD_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function TrueRmsPage() {
  const data = ELD_SUBPAGES["true-rms"];
  return <EarthLeakageSubpage data={data} />;
}
