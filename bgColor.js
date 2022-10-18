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
        displayToggle: {
          // Property: backgroundColor
          label: "Display Toggle (hide section after all changes)", // Label for Property
          defaultValue: true,
          widget: "toggle", // Property Editor Widget: color_picker
        },   
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div style="background-color: ${values.backgroundColor};">Click this section in order to change background-color and then hide itself.</div>`;
      },
    }),
    exporters: {
      web: function (values) {
        return '<div>Click this section in order to change background-color and then hide itself.</div>';
      },
      email: function (values) {
        return '<div>Click this section in order to change background-color and then hide itself.</div>';
      },
    },
    head: {
      css: function (values) {
        // console.log("values => ", values)
        // return `#${values._meta.htmlID} { background-color: ${values.backgroundColor}; color: ${values.textColor}; }`
        if (values.displayToggle === false) return `#${values._meta.htmlID} { display: none; }`;
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