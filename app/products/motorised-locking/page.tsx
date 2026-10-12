"use client";

import React from "react";
import SubpageLayout from "../../components/SubpageLayout";
import { SUBPAGES_DATA } from "../../data/subpagesData";

export default function MotorisedLockingPage() {
  const config = SUBPAGES_DATA["motorised-locking"];
  return <SubpageLayout config={config} />;
}
