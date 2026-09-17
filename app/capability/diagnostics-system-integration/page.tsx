"use client";

import React from "react";
import CapabilitySubpage from "../../components/CapabilitySubpage";
import { CAPABILITY_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function DiagnosticsSystemIntegrationPage() {
  const data = CAPABILITY_SUBPAGES["diagnostics"];
  return <CapabilitySubpage data={data} />;
}
