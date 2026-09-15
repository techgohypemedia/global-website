"use client";

import React from "react";
import SupportSubpage from "../../components/SupportSubpage";
import { SUPPORT_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function DatasheetsPage() {
  const data = SUPPORT_SUBPAGES["datasheets"];
  return <SupportSubpage data={data} />;
}
