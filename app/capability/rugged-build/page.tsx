"use client";

import React from "react";
import CapabilitySubpage from "../../components/CapabilitySubpage";
import { CAPABILITY_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function RuggedBuildPage() {
  const data = CAPABILITY_SUBPAGES["rugged-build"];
  return <CapabilitySubpage data={data} />;
}
