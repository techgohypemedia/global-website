"use client";

import React from "react";
import SubpageLayout from "../components/SubpageLayout";
import { SUBPAGES_DATA } from "../data/subpagesData";

export default function CareersPage() {
  const config = SUBPAGES_DATA["careers"];
  return <SubpageLayout config={config} />;
}
