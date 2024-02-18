"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ModeToggle } from "@/components/ui/ModeToggle";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <span className="text-xl font-bold ">Portfolio</span>
        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
