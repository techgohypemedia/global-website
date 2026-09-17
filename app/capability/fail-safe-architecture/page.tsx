"use client";

import React from "react";
import CapabilitySubpage from "../../components/CapabilitySubpage";
import { CAPABILITY_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function FailSafeArchitecturePage() {
  const data = CAPABILITY_SUBPAGES["fail-safe"];
  return <CapabilitySubpage data={data} />;
}
