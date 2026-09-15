"use client";

import React from "react";
import RailwayBarrierSubpage from "../../../components/RailwayBarrierSubpage";
import { RAILWAY_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function FailSafeBoomPage() {
  const data = RAILWAY_SUBPAGES["fail-safe-boom"];
  return <RailwayBarrierSubpage data={data} />;
}
