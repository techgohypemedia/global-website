"use client";

import React from "react";
import SubpageLayout from "../../components/SubpageLayout";
import { SUBPAGES_DATA } from "../../data/subpagesData";

export default function GiBoomPage() {
  const config = SUBPAGES_DATA["gi-boom"];
  return <SubpageLayout config={config} />;
}
