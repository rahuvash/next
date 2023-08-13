
"use client";
import React from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";

const SeachManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
      <div className="relative w-full">
        <Combobox.Button className="absolute top-[14px]">Button</Combobox.Button>
      </div>
      </Combobox>
    </div>
  );
};

export default SeachManufacturer;
