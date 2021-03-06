interface RoutesConfig {
    key: string;
    route?: string;
    title: string;
    icon?: string;
    component: string;
    auth?: boolean;
    subs?: RoutesConfig[];
}

const routesConfig: {[key: string]: RoutesConfig[]} = {
    menus: [
        { key: "/app/charts", title: "Charts", icon: "show_chart", component: "VolcanoPlotPage",
          subs: [
              { key: "/app/charts/scatter", title: "ScatterPlot", icon: "bubble_chart", component: "VolcanoPlotPage", auth: true},
              { key: "/app/charts/heatmap", title: "Heatmap", icon: "title", component: "HeatmapPage", auth: true},
              { key: "/app/charts/spectrum", title: "Spectrum", icon: "bar_chart", component: "SpectrumViewPage", auth: true}
          ]},
        {
            key: "/app/material", title: "MUI Components", icon: "M", component: "ButtonsPage",
            subs: [
                { key: "/app/material/buttons", title: "Buttons", icon: "B", component: "ButtonsPage"},
                { key: "/app/material/customize", title: "Customizations", icon: "C", component: "CustomizePage"},
                { key: "/app/material/file-browser", title: "File Browser", icon: "F", component: "FileBrowserPage"},
                { key: "/app/material/protein-coverage", title: "Protein Coverage",
                  icon: "format_align_left", component: "ProteinCoveragePage"},
                { key: "/app/material/denovo", title: "De Novo", icon: "De Novo", component: "DenovoPage"},
                { key: "/app/material/parameter", title: "Parameter", icon: "Parameter", component: "ParameterPage"}
            ]}
    ],
    others: [
        { key: "/login", title: "Login", component: "Login"},
        { key: "/404", title: "Not Found", component: "NotFound"}
    ]
};

export { RoutesConfig, routesConfig };
