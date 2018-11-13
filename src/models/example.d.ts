import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace example. */
    namespace example {

        /** Namespace dto. */
        namespace dto {

            /** Properties of a ProteinFoldChange. */
            interface IProteinFoldChange {

                /** ProteinFoldChange accession */
                accession?: (string|null);

                /** ProteinFoldChange significance */
                significance?: (number|null);

                /** ProteinFoldChange largestFoldChange */
                largestFoldChange?: (number|null);

                /** ProteinFoldChange isFiltered */
                isFiltered?: (boolean|null);

                /** ProteinFoldChange cluster */
                cluster?: (number|null);

                /** ProteinFoldChange top */
                top?: (boolean|null);

                /** ProteinFoldChange id */
                id?: (string|null);
            }

            /** Represents a ProteinFoldChange. */
            class ProteinFoldChange implements IProteinFoldChange {

                /**
                 * Constructs a new ProteinFoldChange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IProteinFoldChange);

                /** ProteinFoldChange accession. */
                public accession: string;

                /** ProteinFoldChange significance. */
                public significance: number;

                /** ProteinFoldChange largestFoldChange. */
                public largestFoldChange: number;

                /** ProteinFoldChange isFiltered. */
                public isFiltered: boolean;

                /** ProteinFoldChange cluster. */
                public cluster: number;

                /** ProteinFoldChange top. */
                public top: boolean;

                /** ProteinFoldChange id. */
                public id: string;

                /**
                 * Creates a new ProteinFoldChange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProteinFoldChange instance
                 */
                public static create(properties?: com.example.dto.IProteinFoldChange): com.example.dto.ProteinFoldChange;

                /**
                 * Encodes the specified ProteinFoldChange message. Does not implicitly {@link com.example.dto.ProteinFoldChange.verify|verify} messages.
                 * @param message ProteinFoldChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IProteinFoldChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProteinFoldChange message, length delimited. Does not implicitly {@link com.example.dto.ProteinFoldChange.verify|verify} messages.
                 * @param message ProteinFoldChange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IProteinFoldChange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProteinFoldChange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProteinFoldChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.ProteinFoldChange;

                /**
                 * Decodes a ProteinFoldChange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProteinFoldChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.ProteinFoldChange;

                /**
                 * Verifies a ProteinFoldChange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProteinFoldChange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProteinFoldChange
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.ProteinFoldChange;

                /**
                 * Creates a plain object from a ProteinFoldChange message. Also converts values to other types if specified.
                 * @param message ProteinFoldChange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.ProteinFoldChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProteinFoldChange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
