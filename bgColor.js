unlayer.registerTool({
  name: "my_bg_color_tool",
  label: "BG Color",
  icon: "fa-palette",
  supportedDisplayModes: ["web", "email"],
  options: {
    colors: {
      // Property Group
      title: "Colors", // Title for Property Group
      position: 1, // Position of Property Group
      options: {
        backgroundColor: {
          // Property: backgroundColor
          label: "Background Color", // Label for Property
          defaultValue: "#FF0000",
          widget: "color_picker", // Property Editor Widget: color_picker
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        // return '<div>Click me to change</div>';
        return `<div style="background-color: ${values.backgroundColor};">Click me to change</div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return '<div style="display: none;">Click me to change</div>';
      },
      email: function (values) {
        return '<div style="display: none;">Click me to change</div>';
      },
    },
    head: {
      css: function (values) {
        // console.log("values => ", values)
        // console.log("values._meta.htmlID => ", values._meta.htmlID)
        // return `#${values._meta.htmlID} { background-color: ${values.backgroundColor}; color: ${values.textColor}; }`
        return `#u_body { background-color: ${values.backgroundColor} !important; }`;
      },
      js: function (values) {
        return 'console.log("Tool JavaScript");';
      },
    },
  },
  validator(data) {
    return [];
  },
});