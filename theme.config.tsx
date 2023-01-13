import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Digital Art Lab</span>,
  docsRepositoryBase: "https://github.com/digitalartlab/dal-documentation",
  footer: {
    text: "Digital Art Lab",
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  editLink: {
    text: "Bewerk deze pagina",
  },
  feedback: {
    content: "Feedback",
  },
  search: {
    placeholder: "Zoeken",
  },
  toc: {
    title: "Op deze pagina",
  }
};

export default config;
