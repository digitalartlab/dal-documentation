import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Digital Art Lab</span>,
  docsRepositoryBase: "https://github.com/digitalartlab/dal-documentation/tree/main",
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
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Digital Art Lab'
    }
  },
};

export default config;
