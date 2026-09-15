"use client";

import React from "react";
import SectorsSubpage from "../../components/SectorsSubpage";
import { SECTORS_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function LevelCrossingsSectorPage() {
  const data = SECTORS_SUBPAGES["level-crossings"];
  return <SectorsSubpage data={data} />;
}
