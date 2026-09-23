import type { Metadata } from "next";
import { CompanyLanding } from "../components/CompanyLanding";

export const metadata: Metadata = {
  title: "Bathroom furniture | meblelazienkowe.com.pl",
  description: "We are preparing the launch of our bathroom furniture brand and online store.",
  alternates: { canonical: "/en" }
};

export default function EnglishHomePage() {
  return <CompanyLanding locale="en" />;
}
