import React from "react";
import Admonition from "@theme-original/Admonition";
import BestPractice from "@site/static/svg/bestPracticeIcon.svg";
import Contribution from "@site/static/svg/contributionIcon.svg";
import FAQ from "@site/static/svg/faqIcon.svg";
import FunFact from "@site/static/svg/funFactIcon.svg";
import Unity from "@site/static/svg/unityLogoLightIcon.svg";

export default function AdmonitionWrapper(props) {
  const customIcons = {
    bestpractice: BestPractice,
    contribution: Contribution,
    faq: FAQ,
    funfact: FunFact,
    unity: Unity,
  };
  // check if the type is a custom type

  if (Object.keys(customIcons).indexOf(props.type) !== -1) {
    return <Admonition {...props} />;
  }

  return <Admonition icon={customIcons[props.type]} {...props} />;
}
