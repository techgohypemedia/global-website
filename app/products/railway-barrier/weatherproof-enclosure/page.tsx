"use client";

import React from "react";
import RailwayBarrierSubpage from "../../../components/RailwayBarrierSubpage";
import { RAILWAY_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function WeatherproofEnclosurePage() {
  const data = RAILWAY_SUBPAGES["weatherproof-enclosure"];
  return <RailwayBarrierSubpage data={data} />;
}
