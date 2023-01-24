import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { classNames } from "../../utils/helpers";

type Props = {
  size?: "small" | "medium" | "large";
  style?: string;
};

const Spinner = ({ size, style }: Props) => {
  return (
    <AiOutlineLoading
      className={classNames(
        "animate-spin text-primary",
        size === "large"
          ? "h-24 w-24"
          : size === "medium"
          ? "h-12 w-12"
          : "h-5 w-5",
        style ?? ""
      )}
    />
  );
};

export default Spinner;
