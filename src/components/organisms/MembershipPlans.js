"use client"
import SectionHeading from "@/components/atoms/SectionHeading";
import PricingCard from "@/components/molecules/PricingCard";
import { useState } from "react";

export default function MembershipPlans() {
  const [billingType, setBillingType] = useState("joining");

  const toggleBilling = () => {
    setBillingType((prev) => (prev === "joining" ? "annual" : "joining"));
  };

  return (
    <section className="bg-white py-16" id="membership">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center mb-6">
          <h2 className="text-3xl font-bold text-blue-950 text-center mr-2">Elite Networking</h2>
          <h2 className="font-bold mb-0 text-3xl text-yellow-600">Membership</h2>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-10">
          <button
            className={`px-5 py-2 rounded-l-full border border-blue-950 text-sm font-medium ${billingType === "joining"
                ? "bg-blue-950 text-white"
                : "bg-white text-blue-950"
              }`}
            onClick={() => setBillingType("joining")}
          >
            Joining Fee
          </button>
          <button
            className={`px-5 py-2 rounded-r-full border border-blue-950 border-l-0 text-sm font-medium ${billingType === "annual"
                ? "bg-blue-950 text-white"
                : "bg-white text-blue-950"
              }`}
            onClick={() => setBillingType("annual")}
          >
            Annual Fee
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <PricingCard
            title="Starter"
            price={billingType === "joining" ? "₹999" : "₹9,999/year"}
            features={[
              "Access to digital lounge",
              "Monthly peer meetups",
              "Basic community access",
            ]}
            color="text-yellow-500"
          />
          <PricingCard
            title="Pro"
            price={billingType === "joining" ? "₹1,999" : "₹19,999/year"}
            features={[
              "Everything in Starter",
              "Curated matches",
              "Private mastermind groups",
            ]}
            color="text-blue-600"
          />
          <PricingCard
            title="Elite"
            price={billingType === "joining" ? "₹4,999" : "₹49,999/year"}
            features={[
              "All Pro features",
              "1:1 mentorship",
              "VIP event invites",
            ]}
            color="text-purple-600"
          />
        </div>
      </div>
    </section>
  );
}

