"use client";

import React from "react";
import SubpageLayout from "../components/SubpageLayout";
import { SUBPAGES_DATA } from "../data/subpagesData";

export default function SupportHubPage() {
  const config = SUBPAGES_DATA["support"];
  return <SubpageLayout config={config} />;
}
