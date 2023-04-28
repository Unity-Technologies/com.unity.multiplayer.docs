/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import { Props } from "@theme/Icon/Edit";

import styles from "./styles.module.css";

const IconBug = ({ className, ...restProps }: Props): JSX.Element => {
  return (
    <svg
      fill="currentColor"
      height="1.2em"
      width="1.2em"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 23 20"
      className={clsx(styles.iconBug, className)}
      {...restProps}
    >
      <g>
        <path d="m0 0h18v18h-18z" opacity="0" />
        <g>
          <path d="m13.1 3.621a4.9 4.9 0 0 0 -4.1-2.121 4.9 4.9 0 0 0 -4.1 2.121 5.969 5.969 0 0 0 4.1 1.629 5.969 5.969 0 0 0 4.1-1.629z" />
          <path d="m2.608 3.2-1.334.667a9.061 9.061 0 0 0 2.29 2.553 13.726 13.726 0 0 0 -.505 2.58h-3.059v1.5h3.023a6.787 6.787 0 0 0 1.251 3.182 7.529 7.529 0 0 0 -2.251 3.08l1.35.675a6.032 6.032 0 0 1 1.887-2.6 5.8 5.8 0 0 0 2.99 1.592v-9.679a7.494 7.494 0 0 1 -5.642-3.55z" />
          <path d="m18 10.5v-1.5h-3.059a13.726 13.726 0 0 0 -.5-2.58 9.061 9.061 0 0 0 2.29-2.557l-1.339-.663a7.494 7.494 0 0 1 -5.642 3.55v9.679a5.8 5.8 0 0 0 2.99-1.592 6.024 6.024 0 0 1 1.887 2.6l1.35-.675a7.529 7.529 0 0 0 -2.251-3.08 6.787 6.787 0 0 0 1.251-3.182z" />
        </g>
      </g>
    </svg>
  );
};

export default IconBug;
