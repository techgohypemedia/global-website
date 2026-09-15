"use client";

import React from "react";
import SectorsSubpage from "../../components/SectorsSubpage";
import { SECTORS_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function IndustrialPanelsSectorPage() {
  const data = SECTORS_SUBPAGES["industrial-panels"];
  return <SectorsSubpage data={data} />;
}
