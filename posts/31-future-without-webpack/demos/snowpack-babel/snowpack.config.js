module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: ["@snowpack/plugin-babel"],
  alias: {
    "core-js/**/*": "core-js",
  },
};
