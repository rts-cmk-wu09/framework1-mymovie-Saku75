import React from "react";

export default function Heading(props: {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) {
  return <props.type className={props.className}>{props.children}</props.type>;
}
