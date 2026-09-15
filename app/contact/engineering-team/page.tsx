"use client";

import React from "react";
import ContactSubpage from "../../components/ContactSubpage";
import { CONTACT_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function EngineeringTeamPage() {
  const data = CONTACT_SUBPAGES["engineering-team"];
  return <ContactSubpage data={data} />;
}
