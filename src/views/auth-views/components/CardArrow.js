import React from "react";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

export const CardArrowPrev = ({ onClick }) => (
  <div className="card_arrow card_arrow_left">
    <LeftCircleFilled onClick={onClick} />
  </div>
);

export const CardArrowNext = ({ onClick }) => (
  <div className="card_arrow card_arrow_right">
    <RightCircleFilled onClick={onClick} />
  </div>
);
