"use client";

import React from "react";
import SupportSubpage from "../../components/SupportSubpage";
import { SUPPORT_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function SpecificationsPage() {
  const data = SUPPORT_SUBPAGES["specifications"];
  return <SupportSubpage data={data} />;
}
