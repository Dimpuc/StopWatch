import React from "react";
import { SBlockCart, SCart } from "./styled";

export function Carts({ time }) {
  return (
    <SBlockCart>
      <SCart>{time.h < 10 ? "0" + time.h : time.h}</SCart>:
      <SCart>{time.m < 10 ? "0" + time.m : time.m}</SCart>:
      <SCart>{time.s < 10 ? "0" + time.s : time.s}</SCart>
    </SBlockCart>
  );
}
