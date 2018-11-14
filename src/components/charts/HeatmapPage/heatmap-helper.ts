import { RGB } from "../../../models/RGB";
import { Color } from "../../../models/Color";

namespace HeatmapHelper {
    export function getColorFromLevel(min: number, level: number, max: number): Color {
        const lowColor: Color = new Color(new RGB(0, 255, 0));
        const midColor: Color = new Color(new RGB(20, 20, 20));
        const highColor: Color = new Color(new RGB(255, 0, 0));

        return level < 1 ? getColor(midColor, lowColor, trans(1), trans(1 / Math.max(level, 0.0001)), trans(1 / Math.max(min, 0.0001)))
                : getColor(midColor, highColor, trans(1), trans(level), trans(max));
    }

    function getColor(lc: Color, hc: Color, l: number, x: number, h: number): Color {
        if (l === h) {
            return lc;
        }
        const d: number = (x - l) / (h - l);
        const r: number = Math.max(0, Math.min(255, Math.floor(lc.getRed() + (hc.getRed() - lc.getRed()) * d)));
        const g: number = Math.max(0, Math.min(255, Math.floor((lc.getGreen() + (hc.getGreen() - lc.getGreen()) * d))));
        const b: number = Math.max(0, Math.min(255, Math.floor((lc.getBlue() + (hc.getBlue() - lc.getBlue()) * d))));

        return new Color(new RGB(r, g, b));
    }

    function trans(x: number): number {
        return (Math.sqrt(Math.log(Math.min(Math.max(x, 1), 32))));
    }

}

export { HeatmapHelper};
