"use client";

import React from "react";
import SectorsSubpage from "../../components/SectorsSubpage";
import { SECTORS_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function SignallingInfraSectorPage() {
  const data = SECTORS_SUBPAGES["signalling-infra"];
  return <SectorsSubpage data={data} />;
}
