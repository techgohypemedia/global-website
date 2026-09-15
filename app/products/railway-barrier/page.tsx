"use client";

import React from "react";
import SubpageLayout from "../../components/SubpageLayout";
import { SUBPAGES_DATA } from "../../data/subpagesData";

export default function RailwayBarrierPage() {
  const config = SUBPAGES_DATA["railway-barrier"];
  return <SubpageLayout config={config} />;
}
