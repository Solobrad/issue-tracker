import NextLink from "next/link";
import React from "react";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <RadixLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
};

export default Link;
