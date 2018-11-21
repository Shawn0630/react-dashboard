import * as protobuf from "protobufjs";

export interface Decoder<P> {
    decodeDelimited(reader: (protobuf.Reader | Uint8Array)): P;
    toObject(message: P, options?: protobuf.IConversionOptions): { [k: string]: any }; //tslint:disable-line:no-any
    fromObject(object: { [k: string]: any }): P; //tslint:disable-line:no-any
}

export function decodeItem<P>(decoder: Decoder<P>, buffer: ArrayBuffer): P {
    const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(buffer));
    return decoder.decodeDelimited(reader);
}

export function decodeArray<P>(decoder: Decoder<P>, buffer: ArrayBuffer): P[] {
    const reader: protobuf.Reader = new protobuf.Reader(new Uint8Array(buffer));
    const result: P[] = [];
    while (reader.len > reader.pos) {
        const item: P = decoder.toObject(decoder.decodeDelimited(reader)) as P;
        result.push(item);
    }

    return result;
}
