import { getPermalink, getBlogPermalink, getHomePermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'クリニック紹介',
      links: [
        {
          text: '院長ご挨拶',
          href: getPermalink('/message'),
        },
        {
          text: '担当医表・スタッフ紹介',
          href: getPermalink('/staff'),
        },
        {
          text: '院内写真案内',
          href: getPermalink('/photos'),
        },
      ],
    },
    {
      text: '初診の方へ',
      href: getPermalink('/first-visit'),
    },
    {
      text: '治療内容',
      links: [
        {
          text: 'うつ病',
          href: getPermalink('/depression'),
        },
        {
          text: '不眠',
          href: getPermalink('/insomnia'),
        },
        {
          text: '不安障害',
          href: getPermalink('/anxiety'),
        },
        {
          text: '物忘れ(認知症)',
          href: getPermalink('/dementia'),
        },
        {
          text: '復職支援',
          href: getPermalink('/reemployment'),
        },
      ],
    },
    {
      text: 'カウンセリング',
      href: getPermalink('/counseling'),
    },
    {
      text: '問診票',
      href: '#',
    },
  ],
  actions: [
    {
      text: 'Download',
      href: 'https://github.com/onwidget/astrowind',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/onwidget/astrowind',
    },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
