// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minimum Information Requirements',
  tagline: 'NFDI4Chem Workshop Series' ,
  url: 'https://github.com',
  baseUrl: '/NFDI4Chem/workshops/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NFDI4Chem', // Usually your GitHub org/user name.
  projectName: 'workshops', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'NFDI4Chem logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'workshops/intro',
            position: 'left',
            label: 'Workshops',
          },
          {
            type: 'doc',
            docId: 'michi/intro',
            position: 'left',
            label: 'MIChI',
          },
          {
            href: 'https://github.com/NFDI4Chem/workshops',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Membbers',
            items: [
              {
                label: 'NFDI4Chem',
                href: 'https://www.nfdi4chem.de/',
              },
              {
                label: 'IUPAC',
                href: 'https://iupac.org/',
              },
            ],
          },
          {
            title: 'Platforms',
            items: [
              {
                label: 'nmrXiv',
                href: 'https://nmrxiv.org/',
              },
              {
                label: 'Chemotion',
                href: 'https://www.chemotion.net/',
              },
              {
                label: 'NMRShiftDB',
                href: 'https://nmrshiftdb.nmr.uni-koeln.de/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/NFDI4Chem/workshops',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
