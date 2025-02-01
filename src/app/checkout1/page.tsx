"use client";
import React, { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
}

const Page = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });
  const sentOrder = (data: FormData) => {
    const cartData = localStorage.getItem("cartItem");
    const products = cartData ? JSON.parse(cartData) : [];

    const newDocument = {
      _type: "order",
      user: user?.id,
      details: data,
      products: products,
    };

    client.create(newDocument).then((res) => {
      console.log("Document updated:", res);
    });
    localStorage.setItem("cartItem", JSON.stringify([]));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted successfully!");
    sentOrder(formData);
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center p-4 mx-4 mt-20 lg:mx-24">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex flex-col w-full sm:w-1/2 mb-5">
                <label htmlFor="firstName" className="mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-2 h-12 border rounded"
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2 mb-5">
                <label htmlFor="lastName" className="mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-2 h-12 border rounded"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">

            <div className="flex flex-col w-full sm:w-1/2 mb-5">
            <label htmlFor="country" className="mb-2">
                Country/Region
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                className="p-2 h-12 border rounded"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2 mb-5">
            <label htmlFor="city" className="mb-2">
                Town / City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="p-2 h-12 border rounded"
              />
            </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">

            <div className="flex flex-col w-full sm:w-1/2 mb-5">
            <label htmlFor="zip" className="mb-2">
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="p-2 h-12 border rounded"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2 mb-5">
            <label htmlFor="phone" className="mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 h-12 border rounded"
              />
            </div>

            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 h-12 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full lg:w-1/2 p-2 border border-black text-black rounded mt-5"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;