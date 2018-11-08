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
        { key: "/app/charts/scatter", title: "ScatterPlot", icon: "mobile", component: "ScatterChart" },
    ]
};

export { RoutesConfig, routesConfig};
