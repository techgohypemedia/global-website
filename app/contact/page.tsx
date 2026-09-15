"use client";

import React from "react";
import SubpageLayout from "../components/SubpageLayout";
import { SUBPAGES_DATA } from "../data/subpagesData";

export default function ContactOverviewPage() {
  const config = SUBPAGES_DATA["contact"];
  return <SubpageLayout config={config} />;
}
