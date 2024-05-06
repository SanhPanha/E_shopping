// Import necessary modules
import React from "react";
import Head from "next/head";

// Define the PolicyPage component
const PolicyPage: React.FC = () => {
  // Return JSX content
  return (
    <div className="mb-10">
      <Head>
        <title>Our Policies - Your E-Commerce Platform</title>
        <meta
          name="description"
          content="Learn more about our company policies."
        />
      </Head>
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 px-10">
          Our Policies
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 pl-4">
            1. Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. Our Privacy Policy outlines how we
            collect, use, and protect your personal information when you use our
            services. This includes what information we collect, how we use it,
            how we protect it, and your rights regarding your personal data.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            We may collect information such as your name, email address,
            shipping address, payment information, and browsing behavior. This
            information is used to process orders, provide customer support, and
            personalize your shopping experience.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            We take appropriate measures to safeguard your personal data and
            ensure its confidentiality. We do not sell or share your information
            with third parties except as necessary to fulfill your orders and
            provide our services.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 pl-4">
            2. Shipping Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to ensure timely delivery of your orders. Our Shipping
            Policy covers shipping methods, delivery times, and related
            information. We offer various shipping options to accommodate your
            needs and preferences.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Shipping times may vary depending on your location and the items you
            have ordered. We aim to process and ship orders promptly. But please
            note that delays may occur due to factors beyond our control such as
            weather conditions or carrier issues.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 pl-4">
            3. Return &amp; Refund Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We want you to be satisfied with your purchase. Our Return &amp;
            Refund Policy outlines the process for returning items and
            requesting refunds. If you&apos;re not completely happy with your
            purchase, you may return it for a refund or exchange within a
            specified period.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            To initiate a return, please contact our customer service team with
            your order details. Items must be returned in their original
            condition and packaging, and any shipping costs associated with
            returns are the responsibility of the customer unless the return is
            due to an error on our part.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Refunds will be processed back to the original payment method within
            a certain number of days after we receive and inspect the returned
            items. Please note that certain items may be non-refundable or
            subject to restocking fees.
          </p>
        </div>
      </main>
    </div>
  );
};

// Export the PolicyPage component as default
export default PolicyPage;
