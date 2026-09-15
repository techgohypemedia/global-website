"use client";

import React from "react";
import SubpageLayout from "../../components/SubpageLayout";
import { SUBPAGES_DATA } from "../../data/subpagesData";

export default function EarthLeakagePage() {
  const config = SUBPAGES_DATA["earth-leakage"];
  return <SubpageLayout config={config} />;
}
