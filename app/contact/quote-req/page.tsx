"use client";

import React from "react";
import ContactSubpage from "../../components/ContactSubpage";
import { CONTACT_SUBPAGES } from "../../data/subpagesEnhancedData";

export default function QuoteRequestPage() {
  const data = CONTACT_SUBPAGES["quote-req"];
  return <ContactSubpage data={data} />;
}
