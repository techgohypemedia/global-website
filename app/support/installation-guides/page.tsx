"use client";

import React from "react";
import SupportSubpage from "../../components/SupportSubpage";
import { SUPPORT_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function InstallationGuidesPage() {
  const data = SUPPORT_SUBPAGES["installation-guides"];
  return <SupportSubpage data={data} />;
}
