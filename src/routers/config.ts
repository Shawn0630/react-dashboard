interface RoutesConfig {
    key: string;
    route?: string;
    title: string;
    icon: string;
    component: string;
    subs?: RoutesConfig[];
}

const routesConfig: {[key: string]: RoutesConfig[]} = {
    menus: [
        { key: "/app/charts", title: "Charts", icon: "show_chart", component: "VolcanoPlotPage",
          subs: [
              { key: "/app/charts/scatter", title: "ScatterPlot", icon: "bubble_chart", component: "VolcanoPlotPage"},
              { key: "/app/charts/heatmap", title: "Heatmap", icon: "title", component: "HeatmapPage"}
          ]},
    ]
};

export { RoutesConfig, routesConfig };
