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
        { key: "/app/charts", title: "Charts", icon: "show_chart", component: "ScatterChart",
          subs: [
              {key: "/app/charts/scatter", title: "ScatterPlot", icon: "bubble_chart", component: "ScatterChart"}
          ]},
    ]
};

export { RoutesConfig, routesConfig };
