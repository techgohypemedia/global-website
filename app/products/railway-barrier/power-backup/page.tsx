"use client";

import React from "react";
import RailwayBarrierSubpage from "../../../components/RailwayBarrierSubpage";
import { RAILWAY_SUBPAGES } from "../../../data/subpagesEnhancedData";

export default function PowerBackupPage() {
  const data = RAILWAY_SUBPAGES["power-backup"];
  return <RailwayBarrierSubpage data={data} />;
}
