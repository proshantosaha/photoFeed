import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        class="max-w-[100px] md:max-w-[165px]"
        src="/pswhite.png"
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  );
};

export default Logo;
