"use client";

import React from "react";
import SubpageLayout from "../components/SubpageLayout";
import { SUBPAGES_DATA } from "../data/subpagesData";

export default function CapabilityOverviewPage() {
  const config = SUBPAGES_DATA["capability"];
  return <SubpageLayout config={config} />;
}
