import React from "react";
import { classNames } from "../../utils/helpers";
import Spinner from "../Spinner";

interface Props {
  page?: boolean;
  text?: string;
}

const PageLoader = ({ page, text }: Props) => {
  return (
    <div
      className={classNames(
        page ? "min-h-screen " : "h-36",
        "w-full flex flex-col space-y-11 items-center justify-center"
      )}
    >
      <Spinner size={page ? "large" : "medium"} />
      {text && <p className="font-medium text-base text-gray-500">{text}</p>}
    </div>
  );
};

export default PageLoader;
