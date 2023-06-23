import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/admin">
      <div className="flex justify-center items-center">
      <Image src={"/cresentlogo.png"} alt={LogoDark} width={150} height={100}/>
      </div>
    </Link>
  );
};

export default LogoIcon;
