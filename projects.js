// One entry per project card. To add a project, copy a block and edit it.
//   repo:     "owner/name" on GitHub. Used for the source link and, when
//             `releases` is true, to fetch the latest release's downloads.
//   image:    path to a screenshot in /images (optional).
//   links:    extra buttons, e.g. { label: "Forum thread", url: "https://..." }.
window.PROJECTS = [
  {
    name: "KitPool",
    tagline: "Sample library and +Drive manager for the Elektron Digitakt",
    description:
      "Dig through a sample library, cut out the good bits and get them onto " +
      "a Digitakt or Digitakt II. Browse and transfer files on the +Drive over " +
      "USB, build slice kits, reorder the sample pool, and move patterns and " +
      "sounds around without menu-diving on the device.",
    image: "images/kitpool.png",
    imageAlt: "KitPool's sample editor with waveform, gain and scalpel panels",
    repo: "zambari/kitpool",
    releases: true,
    tags: ["Rust", "macOS", "Windows", "Elektron"],
    links: [],
  },
];
