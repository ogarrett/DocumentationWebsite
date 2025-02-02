// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deepfence Community',
  tagline: 'Security Observability for Cloud Native Applications',
  url: 'https://docs.oweng.io',
  baseUrl: '/',

  customFields: {
    homeUrl: 'http://community.local:3000',
    docsUrl: 'http://docs.local:3000'
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/deepfence.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          
          editUrl: ({ versionDocsDirPath, docPath, locale }) => {
            const repo = {
              threatmapper:   'https://github.com/deepfence/ThreatMapper',
              threatstryker:  'https://github.com/deepfence/ThreatStryker-docs',
              secretscanner:  'https://github.com/deepfence/SecretScanner',
              packetstreamer: 'https://github.com/deepfence/PacketStreamer',
              flowmeter:      'https://github.com/deepfence/FlowMeter',
              yaradare:       'https://github.com/deepfence/YaRadare'
            };

            if(( match = docPath.match( /([^\/]*)\/(.*).md/ )) != null ) {
              product  = match[1];
              filepath = match[2];
              if( repo[product] != null ) {
                return `${repo[product]}/edit/main/docs/docs/${product}/${filepath}.md`;
              }
            }
          },

          breadcrumbs: true,
          routeBasePath: '/',
          // options for remark-admonitions
          admonitions: {}, 
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/css/deepfence.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-74324220-2',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /* Note that markdown documents outside of the docs tree are not processed for frontmatter metadata 
         Additionally, metadata is only applied in full client builds of the site */
      metadata: [
        { name: 'keywords', content: 'deepfence,documentation,howto,threatmapper,threatstryker,secretscanner,packetstreamer,flowmeter,yaradare,security,secops,devsecops,appsec' },
        { property: 'og:keywords', content: 'deepfence,documentation,howto,threatmapper,threatstryker,secretscanner,packetstreamer,flowmeter,yaradare,security,secops,devsecops,appsec' },
        { name: 'image', content: 'https://docs.oweng.io/img/social/deepfence.jpg' },
        { property: 'og:image', content: 'https://docs.oweng.io/img/social/deepfence.jpg' }
      ],
      announcementBar: {
        id: 'support_threatmapper2',
        content:
          '⭐️ If you like ThreatMapper, please <a href="https://github.com/deepfence/ThreatMapper" target="_blank">star it on GitHub</a> ⭐️',
        isCloseable: false
      },
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'Deepfence',
          href: '/',
          src: '/img/deepfence-logo-black.svg',
          srcDark: '/img/deepfence-logo-white.svg',
        },
        items: [
          {
            to: '/',
            label: 'Community',
          },
          {
            to: 'https://deepfence.io/threatstryker',
            label: 'Enterprise',
          },
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                type: 'html',
                value: '<div class="nav-dropdown-title">Open Source</div>',
              },
              {
                type: 'doc',
                docId: 'threatmapper/index',
                label: 'ThreatMapper',
              },
              {
                type: 'doc',
                docId: 'secretscanner/index',
                label: 'SecretScanner',
              },
              {
                type: 'doc',
                docId: 'yaradare/index',
                label: 'YaRadare',
              },
              {
                type: 'doc',
                docId: 'packetstreamer/index',
                label: 'PacketStreamer',
              },
              {
                type: 'doc',
                docId: 'flowmeter/index',
                label: 'FlowMeter',
              },
              {
                type: 'html',
                value: '<div class="nav-dropdown-title">Enterprise</div>',
              },
              {
                type: 'doc',
                docId: 'threatstryker/index',
                label: 'ThreatStryker',
              },
              {
                type: 'doc',
                docId: 'threatstryker/cloud/index',
                label: 'Deepfence Cloud',
              },
            ],
          },
           {
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: 'ThreatMapper',
                href: 'https://github.com/deepfence/ThreatMapper',
              },
              {
                label: 'SecretScanner',
                href: 'https://github.com/deepfence/SecretScanner',              },
              {
                label: 'YaRadare',
                href: 'https://github.com/deepfence/YaRadare',              },
              {
                label: 'PacketStreamer',
                href: 'https://github.com/deepfence/PacketStreamer',              },
              {
                label: 'FlowMeter',
                href: 'https://github.com/deepfence/FlowMeter',              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'ThreatMapper',
                to: 'threatmapper',
              },
              {
                label: 'SecretScanner',
                to: 'secretscanner',
              },
              {
                label: 'YaRadare',
                to: 'yaradare',
              },
              {
                label: 'PacketStreamer',
                to: 'packetstreamer',
              },
              {
                label: 'FlowMeter',
                to: 'flowmeter',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://bitly.com/threatmapper-slack',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/deepfence',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCklvbuOjnzpmtXy-g97tfWQ',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/deepfence-inc',
              },
            ],
          },
          {
            title: 'Enterprise',
            items: [
              {
                label: 'ThreatStryker',
                href: 'https://deepfence.io/threatstryker',
              },
              {
                label: 'Deepfence Cloud',
                href: 'https://deepfence.cloud',
              },
            ],
          },

          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://deepfence.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/deepfence',
              },
            ],
          },
        ],
        logo: {
          alt: 'Deepfence, Inc',
          src: '/img/deepfence-logo-white.svg',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Deepfence, Inc. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
