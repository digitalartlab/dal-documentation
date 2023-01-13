import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const Footer = () => {
  const attributes = {
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:dct": "http://purl.org/dc/terms/",
  };
  return (
    <div className="flex w-full flex-col items-center sm:items-start">
      <p className="text-xs" {...attributes}>
        De{" "}
        <a
          property="dct:title"
          rel="cc:attributionURL"
          href="https://docs.digitalartlab.nl"
        >
          Digital Art Lab documentatie
        </a>{" "}
        wordt gepubliceerd door{" "}
        <a
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          href="https://ckc-zoetermeer.nl"
        >
          CKC & partners
        </a>{" "}
        onder de{" "}
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          CC BY-NC-SA 4.0 licentie
          <img
            style={{
              height: "16px!important",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          />
          <img
            style={{
              height: "16px!important",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          />
          <img
            style={{
              height: "16px!important",
              marginLeft: "3px",
              verticalAlign: "text-bottom",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
          />
          <img
            style={{
              height: "16px!important",
              marginLeft: "3px",
              verticalAlign: "middle",
            }}
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
          />
        </a>
      </p>
    </div>
  );
};

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 195 24"
    width="195"
    height="24"
    fill="currentColor"
  >
    <path d="m6.48,15.95c-.59.46-1.3.71-2.24.71-2.03,0-3.5-1.27-3.5-3.91,0-2.42,1.48-4.01,3.81-4.01.62,0,1.09.1,1.53.29v-3.43h2.21v10.9h-1.42l-.39-.56Zm-1.71-1.15c.57,0,.94-.15,1.3-.46v-3.4c-.39-.25-.74-.36-1.3-.36-1.11,0-1.78.8-1.78,2.13s.69,2.1,1.78,2.1Z" />
    <path d="m10.98,8.9h4.72v5.94h2.41v1.67h-7.13v-1.67h2.52v-4.29h-2.52v-1.65Zm4.72-3.78v2.14h-2.34v-2.14h2.34Z" />
    <path d="m23.61,19.39c-.85,0-1.76-.15-2.59-.52l-.24-1.96c.98.57,1.99.71,2.93.71,1.46,0,2.03-.63,2.09-1.99-.5.29-1.06.45-1.79.45-2.04,0-3.5-1.25-3.5-3.56,0-2.52,1.69-3.78,3.82-3.78.76,0,1.46.17,2.07.59l.53-.53h1.08v6.32c0,3-1.39,4.27-4.4,4.27Zm.83-4.89c.56,0,.92-.14,1.36-.46v-3.24c-.36-.21-.7-.31-1.23-.31-1.16,0-1.85.73-1.85,2s.66,2,1.72,2Z" />
    <path d="m30.58,8.9h4.72v5.94h2.41v1.67h-7.13v-1.67h2.52v-4.29h-2.52v-1.65Zm4.72-3.78v2.14h-2.34v-2.14h2.34Z" />
    <path d="m45.13,16.63c-1.98,0-3.19-.71-3.19-3.35v-2.8h-1.75v-1.67h1.75v-2.82h2.2v2.82h3.05v1.67h-3.05v2.73c0,1.09.45,1.43,1.53,1.43.52,0,1.06-.07,1.62-.2l-.18,1.93c-.69.18-1.34.25-1.98.25Z" />
    <path d="m55.18,15.64c-.56.63-1.43,1.01-2.55,1.01-1.44,0-2.54-.63-2.54-2.17s1.26-2.33,4.87-2.49c-.11-.91-.88-1.26-1.86-1.26-.91,0-1.78.28-2.56.87l.38-2.12c.78-.48,1.71-.73,2.7-.73,2.42,0,3.57,1.15,3.57,3.39v4.37h-1.6l-.42-.87Zm-1.86-.5c.64,0,1.19-.2,1.67-.56v-1.6c-2.03.21-2.79.59-2.79,1.3,0,.55.38.85,1.12.85Z" />
    <path d="m60.01,5.61h4.79v9.23h2.45v1.67h-7.24v-1.67h2.58v-7.56h-2.58v-1.67Z" />
    <path d="m68.66,16.8h9.39v2h-9.39v-2Z" />
    <path d="m84.58,15.64c-.56.63-1.43,1.01-2.55,1.01-1.44,0-2.54-.63-2.54-2.17s1.26-2.33,4.87-2.49c-.11-.91-.88-1.26-1.86-1.26-.91,0-1.78.28-2.56.87l.38-2.12c.78-.48,1.71-.73,2.7-.73,2.42,0,3.57,1.15,3.57,3.39v4.37h-1.6l-.42-.87Zm-1.86-.5c.64,0,1.19-.2,1.67-.56v-1.6c-2.03.21-2.79.59-2.79,1.3,0,.55.38.85,1.12.85Z" />
    <path d="m89.41,8.9h3.26l.5,1.81c.84-1.33,1.86-1.95,3.54-1.95l.03,2.38c-1.11.03-2.3.42-3.25,1.08v2.62h2.97v1.67h-7.06v-1.67h1.88v-4.29h-1.88v-1.65Z" />
    <path d="m103.93,16.63c-1.98,0-3.19-.71-3.19-3.35v-2.8h-1.75v-1.67h1.75v-2.82h2.2v2.82h3.05v1.67h-3.05v2.73c0,1.09.45,1.43,1.53,1.43.52,0,1.06-.07,1.62-.2l-.18,1.93c-.69.18-1.34.25-1.98.25Z" />
    <path d="m107.86,16.8h9.39v2h-9.39v-2Z" />
    <path d="m118.81,5.61h4.79v9.23h2.45v1.67h-7.24v-1.67h2.58v-7.56h-2.58v-1.67Z" />
    <path d="m133.58,15.64c-.56.63-1.43,1.01-2.55,1.01-1.44,0-2.54-.63-2.54-2.17s1.26-2.33,4.87-2.49c-.11-.91-.88-1.26-1.86-1.26-.91,0-1.78.28-2.56.87l.38-2.12c.78-.48,1.71-.73,2.7-.73,2.42,0,3.57,1.15,3.57,3.39v4.37h-1.6l-.42-.87Zm-1.86-.5c.64,0,1.19-.2,1.67-.56v-1.6c-2.03.21-2.79.59-2.79,1.3,0,.55.38.85,1.12.85Z" />
    <path d="m142.18,16.66c-.9,0-1.53-.2-2.14-.66l-.46.5h-1.13V5.61h2.21v3.59c.48-.27,1.06-.45,1.83-.45,2.03,0,3.5,1.27,3.5,3.91,0,2.44-1.48,4.01-3.81,4.01Zm-1.53-5.6v3.43c.38.25.74.35,1.3.35,1.11,0,1.78-.8,1.78-2.13s-.7-2.09-1.78-2.09c-.59,0-.94.15-1.3.43Z" />
    <path d="m163.48,15.92c-.56.45-1.26.71-2.16.71-2.02,0-3.33-1.29-3.33-3.77s1.44-3.89,3.54-3.89c.71,0,1.27.14,1.79.42v-3.75h1.29v10.87h-.85l-.28-.59Zm-1.92-.42c.74,0,1.22-.21,1.77-.69v-4.26c-.52-.31-.99-.46-1.71-.46-1.4,0-2.33,1.05-2.33,2.76s.87,2.65,2.27,2.65Z" />
    <path d="m167.91,12.79c0-2.41,1.44-3.84,3.46-3.84,2.19,0,3.42,1.51,3.42,3.82s-1.33,3.87-3.47,3.87-3.4-1.53-3.4-3.85Zm5.59,0c0-1.74-.83-2.73-2.13-2.73s-2.17.95-2.17,2.72.9,2.75,2.14,2.75,2.16-.97,2.16-2.73Z" />
    <path d="m178.01,12.86c0-2.61,1.57-3.89,3.66-3.89.84,0,1.65.18,2.21.5l.1,1.23c-.67-.39-1.42-.57-2.07-.57-1.61,0-2.59,1.06-2.59,2.66,0,2.06,1.3,2.68,2.65,2.68.69,0,1.32-.15,2.03-.49l-.1,1.16c-.67.34-1.33.49-2.19.49-1.78,0-3.7-.91-3.7-3.77Z" />
    <path d="m187.84,16.02l-.11-1.22c.83.5,1.86.74,3,.74,1.32,0,2.14-.34,2.14-1.13,0-.55-.27-.91-1.95-1.25l-.28-.06c-1.96-.39-2.59-.97-2.59-2.09,0-1.36,1.19-2.1,3.08-2.1,1.04,0,1.79.14,2.47.43l.11,1.16c-.71-.35-1.67-.53-2.61-.53-1.18,0-1.86.35-1.86.99s.36.84,1.98,1.18l.34.07c2.16.45,2.55,1.16,2.55,2.14,0,1.48-1.32,2.26-3.35,2.26-1.09,0-2.13-.15-2.91-.6Z" />
  </svg>
);

const config: DocsThemeConfig = {
  logo: <Logo />,
  docsRepositoryBase:
    "https://github.com/digitalartlab/dal-documentation/tree/main",
  footer: {
    text: <Footer />,
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
      titleTemplate: "%s - Documentatie - Digital Art Lab",
    };
  },
  gitTimestamp: function useGitTimestamp({ timestamp }) {
    const locale = "nl-NL";
    return (
      <>
        Laatst bijgewerkt op{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
};

export default config;
