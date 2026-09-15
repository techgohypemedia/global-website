"use client";

import React from "react";
import SubpageLayout from "../components/SubpageLayout";
import { SUBPAGES_DATA } from "../data/subpagesData";

export default function SectorsOverviewPage() {
  const config = SUBPAGES_DATA["sectors"];
  return <SubpageLayout config={config} />;
}
