function startConfetti() {
  unlayer.registerTool({
    name: "my_tool",
    label: "Background Image",
    icon: "fa-image",
    supportedDisplayModes: ["web", "email"],
    options: {},
    values: {},
    renderer: {
      Viewer: unlayer.createViewer({
        render(values) {
          return "<div>I am a custom tool.</div>";
        },
      }),
      exporters: {
        web: function (values) {
          return "<div>I am a custom tool.</div>";
        },
        email: function (values) {
          return "<div>I am a custom tool.</div>";
        },
      },
      head: {
        css: function (values) {},
        js: function (values) {},
      },
    },
  });
}
startConfetti();