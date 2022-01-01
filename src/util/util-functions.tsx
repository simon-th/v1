import React from "react";

export default function createHtmlListFromStringArray(
  inputArray: string[]
): JSX.Element[] {
  const htmlList: JSX.Element[] = [];
  inputArray.forEach((item) => {
    htmlList.push(
      <li style={{ paddingBottom: "4px" }} className="Site-small-p">
        {item}
      </li>
    );
  });
  return htmlList;
}
