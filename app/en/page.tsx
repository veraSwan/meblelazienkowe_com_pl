import type { Metadata } from "next";
import { CompanyLanding } from "../components/CompanyLanding";

export const metadata: Metadata = {
  title: "Bathroom furniture | meblelazienkowe.com.pl",
  description: "We are preparing a carefully selected range of bathroom cabinets and furniture. Discover our approach and partnership opportunities.",
  alternates: { canonical: "/en" }
};

export default function EnglishHomePage() {
  return <CompanyLanding locale="en" />;
}
