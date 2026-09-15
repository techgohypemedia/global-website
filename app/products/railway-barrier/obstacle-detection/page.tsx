"use client";

import React from "react";
import RailwayBarrierSubpage from "../../../components/RailwayBarrierSubpage";
import { RAILWAY_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function ObstacleDetectionPage() {
  const data = RAILWAY_SUBPAGES["obstacle-detection"];
  return <RailwayBarrierSubpage data={data} />;
}
