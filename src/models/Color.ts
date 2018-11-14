import {HEX} from "./HEX";
import {RGB} from "./RGB";

class Color {

    private hex: HEX;
    private rgb: RGB;

    constructor(color: (HEX | RGB)) {

        if (color instanceof HEX) {
            this.hex = color;
            this.rgb = color.toRGB();
        } else if (color instanceof RGB) {
            this.rgb = color;
            this.hex = color.toHex();
        }

    }

    public lighten(by: number): Color {
        this.rgb = this.rgb.lighten(by);
        this.hex = this.rgb.toHex();

        return this;
    }

    public darken(by: number): Color {
        this.rgb = this.rgb.darken(by);
        this.hex = this.rgb.toHex();

        return this;
    }

    public getRed(): number {
        return this.rgb.getRed();
    }

    public getGreen(): number {
        return this.rgb.getGreen();
    }

    public getBlue(): number {
        return this.rgb.getBlue();
    }

    public toString(rgb: boolean = true): string {
        return (rgb) ? this.rgb.toString() : this.hex.toString();
    }

    public setAlpha(a: number): Color {
        this.rgb.setAlpha(a);
        this.hex = this.rgb.toHex();

        return this;
    }

}

export {Color};
