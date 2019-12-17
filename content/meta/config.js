const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "HostingAdvize - A Hosting Reviews Consultant", // <title>
  shortSiteTitle: "HostingAdvize - Choose your best Dev ops Partner", // <title> ending for posts and pages
  siteDescription: "HostingAdvize - Your DevOps Consultant.",
  siteUrl: "https://hostingadvize.co.in",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Hosting Advize",
  authorTwitterAccount: "greglobinski",
  // info
  infoTitle: "Hosting Advize",
  infoTitleNote: "Hosting Advice & Consultant",
  // manifest.json
  manifestName: "Read Hosting Reviews and Decide the best",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "iampuneet.in@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/greglobinski" },
    { name: "twitter", url: "https://twitter.com/greglobinski" },
    { name: "facebook", url: "https://facebook.com/greglobinski" }
  ]
};
