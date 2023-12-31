"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "../components";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a Car - Quicly And Easily
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounder-full mt-2"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img src="/hero.png" alt="hero" className="object-contain" />
          <div className="hero__image-overlay" />
          </div>
      </div>
    </div>
  );
};

export default Hero;
