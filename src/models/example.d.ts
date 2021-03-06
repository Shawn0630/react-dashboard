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

            /** Properties of a Group. */
            interface IGroup {

                /** Group groupName */
                groupName?: (string|null);

                /** Group sampleIds */
                sampleIds?: (string[]|null);

                /** Group sampleNames */
                sampleNames?: (string[]|null);

                /** Group hexColour */
                hexColour?: (string|null);
            }

            /** Represents a Group. */
            class Group implements IGroup {

                /**
                 * Constructs a new Group.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IGroup);

                /** Group groupName. */
                public groupName: string;

                /** Group sampleIds. */
                public sampleIds: string[];

                /** Group sampleNames. */
                public sampleNames: string[];

                /** Group hexColour. */
                public hexColour: string;

                /**
                 * Creates a new Group instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Group instance
                 */
                public static create(properties?: com.example.dto.IGroup): com.example.dto.Group;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link com.example.dto.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link com.example.dto.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Group;

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Group;

                /**
                 * Verifies a Group message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Group
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Group;

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @param message Group
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Group to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Sample. */
            interface ISample {

                /** Sample id */
                id?: (string|null);

                /** Sample name */
                name?: (string|null);

                /** Sample instrument */
                instrument?: (string|null);

                /** Sample enzyme */
                enzyme?: (string|null);

                /** Sample activationMethod */
                activationMethod?: (com.example.dto.ActivationMethod|null);

                /** Sample fractions */
                fractions?: (com.example.dto.Sample.IFraction[]|null);
            }

            /** Represents a Sample. */
            class Sample implements ISample {

                /**
                 * Constructs a new Sample.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISample);

                /** Sample id. */
                public id: string;

                /** Sample name. */
                public name: string;

                /** Sample instrument. */
                public instrument: string;

                /** Sample enzyme. */
                public enzyme: string;

                /** Sample activationMethod. */
                public activationMethod: com.example.dto.ActivationMethod;

                /** Sample fractions. */
                public fractions: com.example.dto.Sample.IFraction[];

                /**
                 * Creates a new Sample instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Sample instance
                 */
                public static create(properties?: com.example.dto.ISample): com.example.dto.Sample;

                /**
                 * Encodes the specified Sample message. Does not implicitly {@link com.example.dto.Sample.verify|verify} messages.
                 * @param message Sample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Sample message, length delimited. Does not implicitly {@link com.example.dto.Sample.verify|verify} messages.
                 * @param message Sample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Sample message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Sample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Sample;

                /**
                 * Decodes a Sample message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Sample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Sample;

                /**
                 * Verifies a Sample message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Sample message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Sample
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Sample;

                /**
                 * Creates a plain object from a Sample message. Also converts values to other types if specified.
                 * @param message Sample
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Sample, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Sample to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Sample {

                /** Properties of a Fraction. */
                interface IFraction {

                    /** Fraction id */
                    id?: (string|null);

                    /** Fraction sourceFile */
                    sourceFile?: (string|null);
                }

                /** Represents a Fraction. */
                class Fraction implements IFraction {

                    /**
                     * Constructs a new Fraction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.example.dto.Sample.IFraction);

                    /** Fraction id. */
                    public id: string;

                    /** Fraction sourceFile. */
                    public sourceFile: string;

                    /**
                     * Creates a new Fraction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Fraction instance
                     */
                    public static create(properties?: com.example.dto.Sample.IFraction): com.example.dto.Sample.Fraction;

                    /**
                     * Encodes the specified Fraction message. Does not implicitly {@link com.example.dto.Sample.Fraction.verify|verify} messages.
                     * @param message Fraction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.example.dto.Sample.IFraction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Fraction message, length delimited. Does not implicitly {@link com.example.dto.Sample.Fraction.verify|verify} messages.
                     * @param message Fraction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.example.dto.Sample.IFraction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Fraction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Fraction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Sample.Fraction;

                    /**
                     * Decodes a Fraction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Fraction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Sample.Fraction;

                    /**
                     * Verifies a Fraction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Fraction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Fraction
                     */
                    public static fromObject(object: { [k: string]: any }): com.example.dto.Sample.Fraction;

                    /**
                     * Creates a plain object from a Fraction message. Also converts values to other types if specified.
                     * @param message Fraction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.example.dto.Sample.Fraction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Fraction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** ActivationMethod enum. */
            enum ActivationMethod {
                UNDEFINED = 0,
                CID = 1,
                HCD = 2,
                ECD = 3,
                MIX = 4,
                PQD = 5,
                IRMPD = 6
            }

            /** Properties of a Dendrogram. */
            interface IDendrogram {

                /** Dendrogram left */
                left?: (com.example.dto.IDendrogram|null);

                /** Dendrogram right */
                right?: (com.example.dto.IDendrogram|null);

                /** Dendrogram row */
                row?: (com.example.dto.IHeatMapRow|null);
            }

            /** Represents a Dendrogram. */
            class Dendrogram implements IDendrogram {

                /**
                 * Constructs a new Dendrogram.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IDendrogram);

                /** Dendrogram left. */
                public left?: (com.example.dto.IDendrogram|null);

                /** Dendrogram right. */
                public right?: (com.example.dto.IDendrogram|null);

                /** Dendrogram row. */
                public row?: (com.example.dto.IHeatMapRow|null);

                /**
                 * Creates a new Dendrogram instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Dendrogram instance
                 */
                public static create(properties?: com.example.dto.IDendrogram): com.example.dto.Dendrogram;

                /**
                 * Encodes the specified Dendrogram message. Does not implicitly {@link com.example.dto.Dendrogram.verify|verify} messages.
                 * @param message Dendrogram message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IDendrogram, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Dendrogram message, length delimited. Does not implicitly {@link com.example.dto.Dendrogram.verify|verify} messages.
                 * @param message Dendrogram message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IDendrogram, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Dendrogram message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Dendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Dendrogram;

                /**
                 * Decodes a Dendrogram message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Dendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Dendrogram;

                /**
                 * Verifies a Dendrogram message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Dendrogram message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Dendrogram
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Dendrogram;

                /**
                 * Creates a plain object from a Dendrogram message. Also converts values to other types if specified.
                 * @param message Dendrogram
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Dendrogram, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Dendrogram to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HeatMapRow. */
            interface IHeatMapRow {

                /** HeatMapRow accession */
                accession?: (string|null);

                /** HeatMapRow sampleAreas */
                sampleAreas?: (number[]|null);

                /** HeatMapRow sampleRatios */
                sampleRatios?: (com.example.dto.IOptionalFloat[]|null);

                /** HeatMapRow colour */
                colour?: (number[]|null);
            }

            /** Represents a HeatMapRow. */
            class HeatMapRow implements IHeatMapRow {

                /**
                 * Constructs a new HeatMapRow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IHeatMapRow);

                /** HeatMapRow accession. */
                public accession: string;

                /** HeatMapRow sampleAreas. */
                public sampleAreas: number[];

                /** HeatMapRow sampleRatios. */
                public sampleRatios: com.example.dto.IOptionalFloat[];

                /** HeatMapRow colour. */
                public colour: number[];

                /**
                 * Creates a new HeatMapRow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HeatMapRow instance
                 */
                public static create(properties?: com.example.dto.IHeatMapRow): com.example.dto.HeatMapRow;

                /**
                 * Encodes the specified HeatMapRow message. Does not implicitly {@link com.example.dto.HeatMapRow.verify|verify} messages.
                 * @param message HeatMapRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IHeatMapRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HeatMapRow message, length delimited. Does not implicitly {@link com.example.dto.HeatMapRow.verify|verify} messages.
                 * @param message HeatMapRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IHeatMapRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HeatMapRow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.HeatMapRow;

                /**
                 * Decodes a HeatMapRow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.HeatMapRow;

                /**
                 * Verifies a HeatMapRow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HeatMapRow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HeatMapRow
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.HeatMapRow;

                /**
                 * Creates a plain object from a HeatMapRow message. Also converts values to other types if specified.
                 * @param message HeatMapRow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.HeatMapRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HeatMapRow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an OptionalFloat. */
            interface IOptionalFloat {

                /** OptionalFloat isPresent */
                isPresent?: (boolean|null);

                /** OptionalFloat value */
                value?: (number|null);
            }

            /** Represents an OptionalFloat. */
            class OptionalFloat implements IOptionalFloat {

                /**
                 * Constructs a new OptionalFloat.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IOptionalFloat);

                /** OptionalFloat isPresent. */
                public isPresent: boolean;

                /** OptionalFloat value. */
                public value: number;

                /**
                 * Creates a new OptionalFloat instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionalFloat instance
                 */
                public static create(properties?: com.example.dto.IOptionalFloat): com.example.dto.OptionalFloat;

                /**
                 * Encodes the specified OptionalFloat message. Does not implicitly {@link com.example.dto.OptionalFloat.verify|verify} messages.
                 * @param message OptionalFloat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IOptionalFloat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionalFloat message, length delimited. Does not implicitly {@link com.example.dto.OptionalFloat.verify|verify} messages.
                 * @param message OptionalFloat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IOptionalFloat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionalFloat message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OptionalFloat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.OptionalFloat;

                /**
                 * Decodes an OptionalFloat message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OptionalFloat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.OptionalFloat;

                /**
                 * Verifies an OptionalFloat message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionalFloat message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionalFloat
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.OptionalFloat;

                /**
                 * Creates a plain object from an OptionalFloat message. Also converts values to other types if specified.
                 * @param message OptionalFloat
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.OptionalFloat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionalFloat to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ScanDenovoCandidate. */
            interface IScanDenovoCandidate {

                /** ScanDenovoCandidate fractionId */
                fractionId?: (string|null);

                /** ScanDenovoCandidate scannum */
                scannum?: (number|null);

                /** ScanDenovoCandidate mz */
                mz?: (number|null);

                /** ScanDenovoCandidate z */
                z?: (number|null);

                /** ScanDenovoCandidate retentionTime */
                retentionTime?: (number|Long|null);

                /** ScanDenovoCandidate denovoCandidate */
                denovoCandidate?: (com.example.dto.IDenovoCandidate[]|null);

                /** ScanDenovoCandidate activationMethod */
                activationMethod?: (com.example.dto.ActivationMethod|null);
            }

            /** Represents a ScanDenovoCandidate. */
            class ScanDenovoCandidate implements IScanDenovoCandidate {

                /**
                 * Constructs a new ScanDenovoCandidate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IScanDenovoCandidate);

                /** ScanDenovoCandidate fractionId. */
                public fractionId: string;

                /** ScanDenovoCandidate scannum. */
                public scannum: number;

                /** ScanDenovoCandidate mz. */
                public mz: number;

                /** ScanDenovoCandidate z. */
                public z: number;

                /** ScanDenovoCandidate retentionTime. */
                public retentionTime: (number|Long);

                /** ScanDenovoCandidate denovoCandidate. */
                public denovoCandidate: com.example.dto.IDenovoCandidate[];

                /** ScanDenovoCandidate activationMethod. */
                public activationMethod: com.example.dto.ActivationMethod;

                /**
                 * Creates a new ScanDenovoCandidate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScanDenovoCandidate instance
                 */
                public static create(properties?: com.example.dto.IScanDenovoCandidate): com.example.dto.ScanDenovoCandidate;

                /**
                 * Encodes the specified ScanDenovoCandidate message. Does not implicitly {@link com.example.dto.ScanDenovoCandidate.verify|verify} messages.
                 * @param message ScanDenovoCandidate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IScanDenovoCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScanDenovoCandidate message, length delimited. Does not implicitly {@link com.example.dto.ScanDenovoCandidate.verify|verify} messages.
                 * @param message ScanDenovoCandidate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IScanDenovoCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScanDenovoCandidate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScanDenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.ScanDenovoCandidate;

                /**
                 * Decodes a ScanDenovoCandidate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScanDenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.ScanDenovoCandidate;

                /**
                 * Verifies a ScanDenovoCandidate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScanDenovoCandidate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScanDenovoCandidate
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.ScanDenovoCandidate;

                /**
                 * Creates a plain object from a ScanDenovoCandidate message. Also converts values to other types if specified.
                 * @param message ScanDenovoCandidate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.ScanDenovoCandidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScanDenovoCandidate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DenovoCandidate. */
            interface IDenovoCandidate {

                /** DenovoCandidate sequence */
                sequence?: (string|null);

                /** DenovoCandidate mass */
                mass?: (number|null);

                /** DenovoCandidate length */
                length?: (number|null);

                /** DenovoCandidate area */
                area?: (number|null);

                /** DenovoCandidate ppm */
                ppm?: (number|null);

                /** DenovoCandidate alc */
                alc?: (number|null);

                /** DenovoCandidate positionConfidence */
                positionConfidence?: (number[]|null);

                /** DenovoCandidate modifications */
                modifications?: (com.example.dto.IAbbreviatedModification[]|null);

                /** DenovoCandidate maxIntensity */
                maxIntensity?: (number|null);
            }

            /** Represents a DenovoCandidate. */
            class DenovoCandidate implements IDenovoCandidate {

                /**
                 * Constructs a new DenovoCandidate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IDenovoCandidate);

                /** DenovoCandidate sequence. */
                public sequence: string;

                /** DenovoCandidate mass. */
                public mass: number;

                /** DenovoCandidate length. */
                public length: number;

                /** DenovoCandidate area. */
                public area: number;

                /** DenovoCandidate ppm. */
                public ppm: number;

                /** DenovoCandidate alc. */
                public alc: number;

                /** DenovoCandidate positionConfidence. */
                public positionConfidence: number[];

                /** DenovoCandidate modifications. */
                public modifications: com.example.dto.IAbbreviatedModification[];

                /** DenovoCandidate maxIntensity. */
                public maxIntensity: number;

                /**
                 * Creates a new DenovoCandidate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenovoCandidate instance
                 */
                public static create(properties?: com.example.dto.IDenovoCandidate): com.example.dto.DenovoCandidate;

                /**
                 * Encodes the specified DenovoCandidate message. Does not implicitly {@link com.example.dto.DenovoCandidate.verify|verify} messages.
                 * @param message DenovoCandidate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IDenovoCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenovoCandidate message, length delimited. Does not implicitly {@link com.example.dto.DenovoCandidate.verify|verify} messages.
                 * @param message DenovoCandidate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IDenovoCandidate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenovoCandidate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.DenovoCandidate;

                /**
                 * Decodes a DenovoCandidate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.DenovoCandidate;

                /**
                 * Verifies a DenovoCandidate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DenovoCandidate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DenovoCandidate
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.DenovoCandidate;

                /**
                 * Creates a plain object from a DenovoCandidate message. Also converts values to other types if specified.
                 * @param message DenovoCandidate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.DenovoCandidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DenovoCandidate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** ModificationType enum. */
            enum ModificationType {
                PTM = 0,
                MUTATION = 1,
                INSERTION = 2,
                DELETION = 3
            }

            /** Properties of a FileNode. */
            interface IFileNode {

                /** FileNode filename */
                filename?: (string|null);

                /** FileNode type */
                type?: (com.example.dto.FileNode.Type|null);

                /** FileNode children */
                children?: (com.example.dto.IFileNode[]|null);
            }

            /** Represents a FileNode. */
            class FileNode implements IFileNode {

                /**
                 * Constructs a new FileNode.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IFileNode);

                /** FileNode filename. */
                public filename: string;

                /** FileNode type. */
                public type: com.example.dto.FileNode.Type;

                /** FileNode children. */
                public children: com.example.dto.IFileNode[];

                /**
                 * Creates a new FileNode instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileNode instance
                 */
                public static create(properties?: com.example.dto.IFileNode): com.example.dto.FileNode;

                /**
                 * Encodes the specified FileNode message. Does not implicitly {@link com.example.dto.FileNode.verify|verify} messages.
                 * @param message FileNode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IFileNode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileNode message, length delimited. Does not implicitly {@link com.example.dto.FileNode.verify|verify} messages.
                 * @param message FileNode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IFileNode, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileNode message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.FileNode;

                /**
                 * Decodes a FileNode message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.FileNode;

                /**
                 * Verifies a FileNode message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileNode message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileNode
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.FileNode;

                /**
                 * Creates a plain object from a FileNode message. Also converts values to other types if specified.
                 * @param message FileNode
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.FileNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileNode to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace FileNode {

                /** Type enum. */
                enum Type {
                    FILE = 0,
                    DIR = 1
                }
            }

            /** IonType enum. */
            enum IonType {
                A = 0,
                B = 1,
                C = 2,
                X = 3,
                Y = 4,
                Z = 5,
                Z_PRIME = 6,
                IMMONIUM = 7,
                PRECURSOR = 8,
                A_MINUS_H2O = 16,
                B_MINUS_H2O = 17,
                C_MINUS_H2O = 18,
                X_MINUS_H2O = 19,
                Y_MINUS_H2O = 20,
                Z_MINUS_H2O = 21,
                Z_PRIME_MINUS_H2O = 22,
                A_MINUS_NH3 = 32,
                B_MINUS_NH3 = 33,
                C_MINUS_NH3 = 34,
                X_MINUS_NH3 = 35,
                Y_MINUS_NH3 = 36,
                Z_MINUS_NH3 = 37,
                Z_PRIME_MINUS_NH3 = 38,
                A_CHARGE2 = 48,
                B_CHARGE2 = 49,
                C_CHARGE2 = 50,
                X_CHARGE2 = 51,
                Y_CHARGE2 = 52,
                Z_CHARGE2 = 53,
                Z_PRIME_CHARGE2 = 54,
                C_MINUS_H = 66
            }

            /** Properties of a TheoreticalIons. */
            interface ITheoreticalIons {

                /** TheoreticalIons type */
                type?: (com.example.dto.IonType|null);

                /** TheoreticalIons mz */
                mz?: (number[]|null);
            }

            /** Represents a TheoreticalIons. */
            class TheoreticalIons implements ITheoreticalIons {

                /**
                 * Constructs a new TheoreticalIons.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ITheoreticalIons);

                /** TheoreticalIons type. */
                public type: com.example.dto.IonType;

                /** TheoreticalIons mz. */
                public mz: number[];

                /**
                 * Creates a new TheoreticalIons instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TheoreticalIons instance
                 */
                public static create(properties?: com.example.dto.ITheoreticalIons): com.example.dto.TheoreticalIons;

                /**
                 * Encodes the specified TheoreticalIons message. Does not implicitly {@link com.example.dto.TheoreticalIons.verify|verify} messages.
                 * @param message TheoreticalIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ITheoreticalIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TheoreticalIons message, length delimited. Does not implicitly {@link com.example.dto.TheoreticalIons.verify|verify} messages.
                 * @param message TheoreticalIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ITheoreticalIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TheoreticalIons message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TheoreticalIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.TheoreticalIons;

                /**
                 * Decodes a TheoreticalIons message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TheoreticalIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.TheoreticalIons;

                /**
                 * Verifies a TheoreticalIons message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TheoreticalIons message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TheoreticalIons
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.TheoreticalIons;

                /**
                 * Creates a plain object from a TheoreticalIons message. Also converts values to other types if specified.
                 * @param message TheoreticalIons
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.TheoreticalIons, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TheoreticalIons to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Ion. */
            interface IIon {

                /** Ion type */
                type?: (com.example.dto.IonType|null);

                /** Ion mz */
                mz?: (number|null);

                /** Ion h */
                h?: (number|null);

                /** Ion pos */
                pos?: (number|null);
            }

            /** Represents an Ion. */
            class Ion implements IIon {

                /**
                 * Constructs a new Ion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IIon);

                /** Ion type. */
                public type: com.example.dto.IonType;

                /** Ion mz. */
                public mz: number;

                /** Ion h. */
                public h: number;

                /** Ion pos. */
                public pos: number;

                /**
                 * Creates a new Ion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ion instance
                 */
                public static create(properties?: com.example.dto.IIon): com.example.dto.Ion;

                /**
                 * Encodes the specified Ion message. Does not implicitly {@link com.example.dto.Ion.verify|verify} messages.
                 * @param message Ion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IIon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ion message, length delimited. Does not implicitly {@link com.example.dto.Ion.verify|verify} messages.
                 * @param message Ion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IIon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Ion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Ion;

                /**
                 * Decodes an Ion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Ion;

                /**
                 * Verifies an Ion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Ion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ion
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Ion;

                /**
                 * Creates a plain object from an Ion message. Also converts values to other types if specified.
                 * @param message Ion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Ion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Ms1Stats. */
            interface IMs1Stats {

                /** Ms1Stats retentionTime */
                retentionTime?: (number|Long|null);

                /** Ms1Stats tic */
                tic?: (number|null);

                /** Ms1Stats scan */
                scan?: (number|null);

                /** Ms1Stats basePeakIntensity */
                basePeakIntensity?: (number|null);
            }

            /** Represents a Ms1Stats. */
            class Ms1Stats implements IMs1Stats {

                /**
                 * Constructs a new Ms1Stats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IMs1Stats);

                /** Ms1Stats retentionTime. */
                public retentionTime: (number|Long);

                /** Ms1Stats tic. */
                public tic: number;

                /** Ms1Stats scan. */
                public scan: number;

                /** Ms1Stats basePeakIntensity. */
                public basePeakIntensity: number;

                /**
                 * Creates a new Ms1Stats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ms1Stats instance
                 */
                public static create(properties?: com.example.dto.IMs1Stats): com.example.dto.Ms1Stats;

                /**
                 * Encodes the specified Ms1Stats message. Does not implicitly {@link com.example.dto.Ms1Stats.verify|verify} messages.
                 * @param message Ms1Stats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IMs1Stats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ms1Stats message, length delimited. Does not implicitly {@link com.example.dto.Ms1Stats.verify|verify} messages.
                 * @param message Ms1Stats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IMs1Stats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Ms1Stats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ms1Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Ms1Stats;

                /**
                 * Decodes a Ms1Stats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ms1Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Ms1Stats;

                /**
                 * Verifies a Ms1Stats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Ms1Stats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ms1Stats
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Ms1Stats;

                /**
                 * Creates a plain object from a Ms1Stats message. Also converts values to other types if specified.
                 * @param message Ms1Stats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Ms1Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ms1Stats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Ms2Stats. */
            interface IMs2Stats {

                /** Ms2Stats retentionTime */
                retentionTime?: (number|Long|null);

                /** Ms2Stats tic */
                tic?: (number|null);

                /** Ms2Stats scan */
                scan?: (number|null);

                /** Ms2Stats ms1Scan */
                ms1Scan?: (number|null);

                /** Ms2Stats precursorMz */
                precursorMz?: (number|null);

                /** Ms2Stats precursorCharge */
                precursorCharge?: (number|null);

                /** Ms2Stats basePeakIntensity */
                basePeakIntensity?: (number|null);
            }

            /** Represents a Ms2Stats. */
            class Ms2Stats implements IMs2Stats {

                /**
                 * Constructs a new Ms2Stats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IMs2Stats);

                /** Ms2Stats retentionTime. */
                public retentionTime: (number|Long);

                /** Ms2Stats tic. */
                public tic: number;

                /** Ms2Stats scan. */
                public scan: number;

                /** Ms2Stats ms1Scan. */
                public ms1Scan: number;

                /** Ms2Stats precursorMz. */
                public precursorMz: number;

                /** Ms2Stats precursorCharge. */
                public precursorCharge: number;

                /** Ms2Stats basePeakIntensity. */
                public basePeakIntensity: number;

                /**
                 * Creates a new Ms2Stats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ms2Stats instance
                 */
                public static create(properties?: com.example.dto.IMs2Stats): com.example.dto.Ms2Stats;

                /**
                 * Encodes the specified Ms2Stats message. Does not implicitly {@link com.example.dto.Ms2Stats.verify|verify} messages.
                 * @param message Ms2Stats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IMs2Stats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ms2Stats message, length delimited. Does not implicitly {@link com.example.dto.Ms2Stats.verify|verify} messages.
                 * @param message Ms2Stats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IMs2Stats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Ms2Stats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ms2Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Ms2Stats;

                /**
                 * Decodes a Ms2Stats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ms2Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Ms2Stats;

                /**
                 * Verifies a Ms2Stats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Ms2Stats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ms2Stats
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Ms2Stats;

                /**
                 * Creates a plain object from a Ms2Stats message. Also converts values to other types if specified.
                 * @param message Ms2Stats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Ms2Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ms2Stats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Spectrum. */
            interface ISpectrum {

                /** Spectrum mz */
                mz?: (number[]|null);

                /** Spectrum intensity */
                intensity?: (number[]|null);

                /** Spectrum ms1Stats */
                ms1Stats?: (com.example.dto.IMs1Stats|null);

                /** Spectrum ms2Stats */
                ms2Stats?: (com.example.dto.IMs2Stats|null);
            }

            /** Represents a Spectrum. */
            class Spectrum implements ISpectrum {

                /**
                 * Constructs a new Spectrum.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISpectrum);

                /** Spectrum mz. */
                public mz: number[];

                /** Spectrum intensity. */
                public intensity: number[];

                /** Spectrum ms1Stats. */
                public ms1Stats?: (com.example.dto.IMs1Stats|null);

                /** Spectrum ms2Stats. */
                public ms2Stats?: (com.example.dto.IMs2Stats|null);

                /** Spectrum stat. */
                public stat?: ("ms1Stats"|"ms2Stats");

                /**
                 * Creates a new Spectrum instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Spectrum instance
                 */
                public static create(properties?: com.example.dto.ISpectrum): com.example.dto.Spectrum;

                /**
                 * Encodes the specified Spectrum message. Does not implicitly {@link com.example.dto.Spectrum.verify|verify} messages.
                 * @param message Spectrum message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISpectrum, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Spectrum message, length delimited. Does not implicitly {@link com.example.dto.Spectrum.verify|verify} messages.
                 * @param message Spectrum message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISpectrum, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Spectrum message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Spectrum
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Spectrum;

                /**
                 * Decodes a Spectrum message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Spectrum
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Spectrum;

                /**
                 * Verifies a Spectrum message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Spectrum message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Spectrum
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Spectrum;

                /**
                 * Creates a plain object from a Spectrum message. Also converts values to other types if specified.
                 * @param message Spectrum
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Spectrum, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Spectrum to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ObservedIons. */
            interface IObservedIons {

                /** ObservedIons ions */
                ions?: (com.example.dto.IIon[]|null);

                /** ObservedIons spectrum */
                spectrum?: (com.example.dto.ISpectrum|null);

                /** ObservedIons mz */
                mz?: (number|null);

                /** ObservedIons z */
                z?: (number|null);

                /** ObservedIons retentionTime */
                retentionTime?: (number|Long|null);
            }

            /** Represents an ObservedIons. */
            class ObservedIons implements IObservedIons {

                /**
                 * Constructs a new ObservedIons.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IObservedIons);

                /** ObservedIons ions. */
                public ions: com.example.dto.IIon[];

                /** ObservedIons spectrum. */
                public spectrum?: (com.example.dto.ISpectrum|null);

                /** ObservedIons mz. */
                public mz: number;

                /** ObservedIons z. */
                public z: number;

                /** ObservedIons retentionTime. */
                public retentionTime: (number|Long);

                /**
                 * Creates a new ObservedIons instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObservedIons instance
                 */
                public static create(properties?: com.example.dto.IObservedIons): com.example.dto.ObservedIons;

                /**
                 * Encodes the specified ObservedIons message. Does not implicitly {@link com.example.dto.ObservedIons.verify|verify} messages.
                 * @param message ObservedIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IObservedIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ObservedIons message, length delimited. Does not implicitly {@link com.example.dto.ObservedIons.verify|verify} messages.
                 * @param message ObservedIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IObservedIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObservedIons message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.ObservedIons;

                /**
                 * Decodes an ObservedIons message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.ObservedIons;

                /**
                 * Verifies an ObservedIons message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ObservedIons message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ObservedIons
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.ObservedIons;

                /**
                 * Creates a plain object from an ObservedIons message. Also converts values to other types if specified.
                 * @param message ObservedIons
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.ObservedIons, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ObservedIons to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FractionObservedIons. */
            interface IFractionObservedIons {

                /** FractionObservedIons scanumObservedIons */
                scanumObservedIons?: ({ [k: string]: com.example.dto.IObservedIons }|null);
            }

            /** Represents a FractionObservedIons. */
            class FractionObservedIons implements IFractionObservedIons {

                /**
                 * Constructs a new FractionObservedIons.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IFractionObservedIons);

                /** FractionObservedIons scanumObservedIons. */
                public scanumObservedIons: { [k: string]: com.example.dto.IObservedIons };

                /**
                 * Creates a new FractionObservedIons instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FractionObservedIons instance
                 */
                public static create(properties?: com.example.dto.IFractionObservedIons): com.example.dto.FractionObservedIons;

                /**
                 * Encodes the specified FractionObservedIons message. Does not implicitly {@link com.example.dto.FractionObservedIons.verify|verify} messages.
                 * @param message FractionObservedIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IFractionObservedIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FractionObservedIons message, length delimited. Does not implicitly {@link com.example.dto.FractionObservedIons.verify|verify} messages.
                 * @param message FractionObservedIons message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IFractionObservedIons, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FractionObservedIons message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FractionObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.FractionObservedIons;

                /**
                 * Decodes a FractionObservedIons message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FractionObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.FractionObservedIons;

                /**
                 * Verifies a FractionObservedIons message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FractionObservedIons message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FractionObservedIons
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.FractionObservedIons;

                /**
                 * Creates a plain object from a FractionObservedIons message. Also converts values to other types if specified.
                 * @param message FractionObservedIons
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.FractionObservedIons, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FractionObservedIons to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PsmIonMatch. */
            interface IPsmIonMatch {

                /** PsmIonMatch sequence */
                sequence?: (string|null);

                /** PsmIonMatch fractionObservedIons */
                fractionObservedIons?: ({ [k: string]: com.example.dto.IFractionObservedIons }|null);

                /** PsmIonMatch theoreticalIons */
                theoreticalIons?: (com.example.dto.ITheoreticalIons[]|null);

                /** PsmIonMatch activationMethod */
                activationMethod?: (com.example.dto.ActivationMethod|null);
            }

            /** Represents a PsmIonMatch. */
            class PsmIonMatch implements IPsmIonMatch {

                /**
                 * Constructs a new PsmIonMatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPsmIonMatch);

                /** PsmIonMatch sequence. */
                public sequence: string;

                /** PsmIonMatch fractionObservedIons. */
                public fractionObservedIons: { [k: string]: com.example.dto.IFractionObservedIons };

                /** PsmIonMatch theoreticalIons. */
                public theoreticalIons: com.example.dto.ITheoreticalIons[];

                /** PsmIonMatch activationMethod. */
                public activationMethod: com.example.dto.ActivationMethod;

                /**
                 * Creates a new PsmIonMatch instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PsmIonMatch instance
                 */
                public static create(properties?: com.example.dto.IPsmIonMatch): com.example.dto.PsmIonMatch;

                /**
                 * Encodes the specified PsmIonMatch message. Does not implicitly {@link com.example.dto.PsmIonMatch.verify|verify} messages.
                 * @param message PsmIonMatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPsmIonMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PsmIonMatch message, length delimited. Does not implicitly {@link com.example.dto.PsmIonMatch.verify|verify} messages.
                 * @param message PsmIonMatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPsmIonMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PsmIonMatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PsmIonMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PsmIonMatch;

                /**
                 * Decodes a PsmIonMatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PsmIonMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PsmIonMatch;

                /**
                 * Verifies a PsmIonMatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PsmIonMatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PsmIonMatch
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PsmIonMatch;

                /**
                 * Creates a plain object from a PsmIonMatch message. Also converts values to other types if specified.
                 * @param message PsmIonMatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PsmIonMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PsmIonMatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProteinPeptide. */
            interface IProteinPeptide {

                /** ProteinPeptide protein */
                protein?: (com.example.dto.IProtein|null);

                /** ProteinPeptide peptides */
                peptides?: (com.example.dto.ISupportPeptide[]|null);

                /** ProteinPeptide proteinSequence */
                proteinSequence?: (string|null);
            }

            /** Represents a ProteinPeptide. */
            class ProteinPeptide implements IProteinPeptide {

                /**
                 * Constructs a new ProteinPeptide.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IProteinPeptide);

                /** ProteinPeptide protein. */
                public protein?: (com.example.dto.IProtein|null);

                /** ProteinPeptide peptides. */
                public peptides: com.example.dto.ISupportPeptide[];

                /** ProteinPeptide proteinSequence. */
                public proteinSequence: string;

                /**
                 * Creates a new ProteinPeptide instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProteinPeptide instance
                 */
                public static create(properties?: com.example.dto.IProteinPeptide): com.example.dto.ProteinPeptide;

                /**
                 * Encodes the specified ProteinPeptide message. Does not implicitly {@link com.example.dto.ProteinPeptide.verify|verify} messages.
                 * @param message ProteinPeptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IProteinPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProteinPeptide message, length delimited. Does not implicitly {@link com.example.dto.ProteinPeptide.verify|verify} messages.
                 * @param message ProteinPeptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IProteinPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProteinPeptide message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProteinPeptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.ProteinPeptide;

                /**
                 * Decodes a ProteinPeptide message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProteinPeptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.ProteinPeptide;

                /**
                 * Verifies a ProteinPeptide message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProteinPeptide message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProteinPeptide
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.ProteinPeptide;

                /**
                 * Creates a plain object from a ProteinPeptide message. Also converts values to other types if specified.
                 * @param message ProteinPeptide
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.ProteinPeptide, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProteinPeptide to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Protein. */
            interface IProtein {

                /** Protein id */
                id?: (string|null);

                /** Protein accession */
                accession?: (string|null);

                /** Protein description */
                description?: (string|null);

                /** Protein pValue */
                pValue?: (number|null);

                /** Protein cluster */
                cluster?: (number|null);

                /** Protein coverage */
                coverage?: (number|null);

                /** Protein mass */
                mass?: (number|null);

                /** Protein modifications */
                modifications?: (com.example.dto.IAbbreviatedModification[]|null);

                /** Protein samples */
                samples?: (com.example.dto.IProteinSample[]|null);

                /** Protein peptides */
                peptides?: (number|null);

                /** Protein unique */
                unique?: (number|null);

                /** Protein top */
                top?: (boolean|null);
            }

            /** Represents a Protein. */
            class Protein implements IProtein {

                /**
                 * Constructs a new Protein.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IProtein);

                /** Protein id. */
                public id: string;

                /** Protein accession. */
                public accession: string;

                /** Protein description. */
                public description: string;

                /** Protein pValue. */
                public pValue: number;

                /** Protein cluster. */
                public cluster: number;

                /** Protein coverage. */
                public coverage: number;

                /** Protein mass. */
                public mass: number;

                /** Protein modifications. */
                public modifications: com.example.dto.IAbbreviatedModification[];

                /** Protein samples. */
                public samples: com.example.dto.IProteinSample[];

                /** Protein peptides. */
                public peptides: number;

                /** Protein unique. */
                public unique: number;

                /** Protein top. */
                public top: boolean;

                /**
                 * Creates a new Protein instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Protein instance
                 */
                public static create(properties?: com.example.dto.IProtein): com.example.dto.Protein;

                /**
                 * Encodes the specified Protein message. Does not implicitly {@link com.example.dto.Protein.verify|verify} messages.
                 * @param message Protein message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IProtein, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Protein message, length delimited. Does not implicitly {@link com.example.dto.Protein.verify|verify} messages.
                 * @param message Protein message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IProtein, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Protein message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Protein
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Protein;

                /**
                 * Decodes a Protein message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Protein
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Protein;

                /**
                 * Verifies a Protein message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Protein message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Protein
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Protein;

                /**
                 * Creates a plain object from a Protein message. Also converts values to other types if specified.
                 * @param message Protein
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Protein, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Protein to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProteinSample. */
            interface IProteinSample {

                /** ProteinSample sampleCoverage */
                sampleCoverage?: (number|null);

                /** ProteinSample sampleArea */
                sampleArea?: (number|null);

                /** ProteinSample sampleSpec */
                sampleSpec?: (number|null);
            }

            /** Represents a ProteinSample. */
            class ProteinSample implements IProteinSample {

                /**
                 * Constructs a new ProteinSample.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IProteinSample);

                /** ProteinSample sampleCoverage. */
                public sampleCoverage: number;

                /** ProteinSample sampleArea. */
                public sampleArea: number;

                /** ProteinSample sampleSpec. */
                public sampleSpec: number;

                /**
                 * Creates a new ProteinSample instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProteinSample instance
                 */
                public static create(properties?: com.example.dto.IProteinSample): com.example.dto.ProteinSample;

                /**
                 * Encodes the specified ProteinSample message. Does not implicitly {@link com.example.dto.ProteinSample.verify|verify} messages.
                 * @param message ProteinSample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IProteinSample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProteinSample message, length delimited. Does not implicitly {@link com.example.dto.ProteinSample.verify|verify} messages.
                 * @param message ProteinSample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IProteinSample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProteinSample message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProteinSample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.ProteinSample;

                /**
                 * Decodes a ProteinSample message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProteinSample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.ProteinSample;

                /**
                 * Verifies a ProteinSample message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProteinSample message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProteinSample
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.ProteinSample;

                /**
                 * Creates a plain object from a ProteinSample message. Also converts values to other types if specified.
                 * @param message ProteinSample
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.ProteinSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProteinSample to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AbbreviatedModification. */
            interface IAbbreviatedModification {

                /** AbbreviatedModification name */
                name?: (string|null);

                /** AbbreviatedModification abbreviation */
                abbreviation?: (string|null);

                /** AbbreviatedModification monoMass */
                monoMass?: (number|null);

                /** AbbreviatedModification type */
                type?: (com.example.dto.ModificationType|null);

                /** AbbreviatedModification anywhereResidues */
                anywhereResidues?: (string|null);
            }

            /** Represents an AbbreviatedModification. */
            class AbbreviatedModification implements IAbbreviatedModification {

                /**
                 * Constructs a new AbbreviatedModification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IAbbreviatedModification);

                /** AbbreviatedModification name. */
                public name: string;

                /** AbbreviatedModification abbreviation. */
                public abbreviation: string;

                /** AbbreviatedModification monoMass. */
                public monoMass: number;

                /** AbbreviatedModification type. */
                public type: com.example.dto.ModificationType;

                /** AbbreviatedModification anywhereResidues. */
                public anywhereResidues: string;

                /**
                 * Creates a new AbbreviatedModification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AbbreviatedModification instance
                 */
                public static create(properties?: com.example.dto.IAbbreviatedModification): com.example.dto.AbbreviatedModification;

                /**
                 * Encodes the specified AbbreviatedModification message. Does not implicitly {@link com.example.dto.AbbreviatedModification.verify|verify} messages.
                 * @param message AbbreviatedModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IAbbreviatedModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AbbreviatedModification message, length delimited. Does not implicitly {@link com.example.dto.AbbreviatedModification.verify|verify} messages.
                 * @param message AbbreviatedModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IAbbreviatedModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AbbreviatedModification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AbbreviatedModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.AbbreviatedModification;

                /**
                 * Decodes an AbbreviatedModification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AbbreviatedModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.AbbreviatedModification;

                /**
                 * Verifies an AbbreviatedModification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AbbreviatedModification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AbbreviatedModification
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.AbbreviatedModification;

                /**
                 * Creates a plain object from an AbbreviatedModification message. Also converts values to other types if specified.
                 * @param message AbbreviatedModification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.AbbreviatedModification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AbbreviatedModification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SupportPeptide. */
            interface ISupportPeptide {

                /** SupportPeptide peptide */
                peptide?: (com.example.dto.IPeptide|null);

                /** SupportPeptide start */
                start?: (number|null);

                /** SupportPeptide end */
                end?: (number|null);

                /** SupportPeptide unique */
                unique?: (boolean|null);
            }

            /** Represents a SupportPeptide. */
            class SupportPeptide implements ISupportPeptide {

                /**
                 * Constructs a new SupportPeptide.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISupportPeptide);

                /** SupportPeptide peptide. */
                public peptide?: (com.example.dto.IPeptide|null);

                /** SupportPeptide start. */
                public start: number;

                /** SupportPeptide end. */
                public end: number;

                /** SupportPeptide unique. */
                public unique: boolean;

                /**
                 * Creates a new SupportPeptide instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SupportPeptide instance
                 */
                public static create(properties?: com.example.dto.ISupportPeptide): com.example.dto.SupportPeptide;

                /**
                 * Encodes the specified SupportPeptide message. Does not implicitly {@link com.example.dto.SupportPeptide.verify|verify} messages.
                 * @param message SupportPeptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISupportPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SupportPeptide message, length delimited. Does not implicitly {@link com.example.dto.SupportPeptide.verify|verify} messages.
                 * @param message SupportPeptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISupportPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SupportPeptide message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SupportPeptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.SupportPeptide;

                /**
                 * Decodes a SupportPeptide message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SupportPeptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.SupportPeptide;

                /**
                 * Verifies a SupportPeptide message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SupportPeptide message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SupportPeptide
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.SupportPeptide;

                /**
                 * Creates a plain object from a SupportPeptide message. Also converts values to other types if specified.
                 * @param message SupportPeptide
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.SupportPeptide, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SupportPeptide to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Peptide. */
            interface IPeptide {

                /** Peptide sequence */
                sequence?: (string|null);

                /** Peptide mass */
                mass?: (number|null);

                /** Peptide length */
                length?: (number|null);

                /** Peptide modifications */
                modifications?: (string[]|null);

                /** Peptide samples */
                samples?: (com.example.dto.IPeptideSample[]|null);

                /** Peptide positionOfModifications */
                positionOfModifications?: (number[]|null);

                /** Peptide psmCount */
                psmCount?: (number|null);

                /** Peptide targetProteinIds */
                targetProteinIds?: (Uint8Array[]|null);

                /** Peptide decoyProteinIds */
                decoyProteinIds?: (Uint8Array[]|null);

                /** Peptide allPsmScanNums */
                allPsmScanNums?: (number[]|null);
            }

            /** Represents a Peptide. */
            class Peptide implements IPeptide {

                /**
                 * Constructs a new Peptide.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPeptide);

                /** Peptide sequence. */
                public sequence: string;

                /** Peptide mass. */
                public mass: number;

                /** Peptide length. */
                public length: number;

                /** Peptide modifications. */
                public modifications: string[];

                /** Peptide samples. */
                public samples: com.example.dto.IPeptideSample[];

                /** Peptide positionOfModifications. */
                public positionOfModifications: number[];

                /** Peptide psmCount. */
                public psmCount: number;

                /** Peptide targetProteinIds. */
                public targetProteinIds: Uint8Array[];

                /** Peptide decoyProteinIds. */
                public decoyProteinIds: Uint8Array[];

                /** Peptide allPsmScanNums. */
                public allPsmScanNums: number[];

                /**
                 * Creates a new Peptide instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Peptide instance
                 */
                public static create(properties?: com.example.dto.IPeptide): com.example.dto.Peptide;

                /**
                 * Encodes the specified Peptide message. Does not implicitly {@link com.example.dto.Peptide.verify|verify} messages.
                 * @param message Peptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Peptide message, length delimited. Does not implicitly {@link com.example.dto.Peptide.verify|verify} messages.
                 * @param message Peptide message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPeptide, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Peptide message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Peptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Peptide;

                /**
                 * Decodes a Peptide message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Peptide
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Peptide;

                /**
                 * Verifies a Peptide message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Peptide message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Peptide
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Peptide;

                /**
                 * Creates a plain object from a Peptide message. Also converts values to other types if specified.
                 * @param message Peptide
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Peptide, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Peptide to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PeptideSample. */
            interface IPeptideSample {

                /** PeptideSample psmCount */
                psmCount?: (number|null);

                /** PeptideSample area */
                area?: (number|null);

                /** PeptideSample maxIntensity */
                maxIntensity?: (number|null);

                /** PeptideSample fractions */
                fractions?: ({ [k: string]: com.example.dto.IPeptideSampleFraction }|null);
            }

            /** Represents a PeptideSample. */
            class PeptideSample implements IPeptideSample {

                /**
                 * Constructs a new PeptideSample.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPeptideSample);

                /** PeptideSample psmCount. */
                public psmCount: number;

                /** PeptideSample area. */
                public area: number;

                /** PeptideSample maxIntensity. */
                public maxIntensity: number;

                /** PeptideSample fractions. */
                public fractions: { [k: string]: com.example.dto.IPeptideSampleFraction };

                /**
                 * Creates a new PeptideSample instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeptideSample instance
                 */
                public static create(properties?: com.example.dto.IPeptideSample): com.example.dto.PeptideSample;

                /**
                 * Encodes the specified PeptideSample message. Does not implicitly {@link com.example.dto.PeptideSample.verify|verify} messages.
                 * @param message PeptideSample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPeptideSample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeptideSample message, length delimited. Does not implicitly {@link com.example.dto.PeptideSample.verify|verify} messages.
                 * @param message PeptideSample message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPeptideSample, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeptideSample message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeptideSample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PeptideSample;

                /**
                 * Decodes a PeptideSample message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeptideSample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PeptideSample;

                /**
                 * Verifies a PeptideSample message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeptideSample message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeptideSample
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PeptideSample;

                /**
                 * Creates a plain object from a PeptideSample message. Also converts values to other types if specified.
                 * @param message PeptideSample
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PeptideSample, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeptideSample to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PeptideSampleFraction. */
            interface IPeptideSampleFraction {

                /** PeptideSampleFraction psms */
                psms?: (com.example.dto.IPSM[]|null);
            }

            /** Represents a PeptideSampleFraction. */
            class PeptideSampleFraction implements IPeptideSampleFraction {

                /**
                 * Constructs a new PeptideSampleFraction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPeptideSampleFraction);

                /** PeptideSampleFraction psms. */
                public psms: com.example.dto.IPSM[];

                /**
                 * Creates a new PeptideSampleFraction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeptideSampleFraction instance
                 */
                public static create(properties?: com.example.dto.IPeptideSampleFraction): com.example.dto.PeptideSampleFraction;

                /**
                 * Encodes the specified PeptideSampleFraction message. Does not implicitly {@link com.example.dto.PeptideSampleFraction.verify|verify} messages.
                 * @param message PeptideSampleFraction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPeptideSampleFraction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeptideSampleFraction message, length delimited. Does not implicitly {@link com.example.dto.PeptideSampleFraction.verify|verify} messages.
                 * @param message PeptideSampleFraction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPeptideSampleFraction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeptideSampleFraction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeptideSampleFraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PeptideSampleFraction;

                /**
                 * Decodes a PeptideSampleFraction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeptideSampleFraction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PeptideSampleFraction;

                /**
                 * Verifies a PeptideSampleFraction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeptideSampleFraction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeptideSampleFraction
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PeptideSampleFraction;

                /**
                 * Creates a plain object from a PeptideSampleFraction message. Also converts values to other types if specified.
                 * @param message PeptideSampleFraction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PeptideSampleFraction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeptideSampleFraction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PSM. */
            interface IPSM {

                /** PSM scannum */
                scannum?: (number|null);

                /** PSM mz */
                mz?: (number|null);

                /** PSM z */
                z?: (number|null);

                /** PSM retentionTime */
                retentionTime?: (number|Long|null);

                /** PSM area */
                area?: (number|null);

                /** PSM pValue */
                pValue?: (number|null);

                /** PSM ppm */
                ppm?: (number|null);

                /** PSM engine */
                engine?: (com.example.dto.Engine|null);

                /** PSM featureId */
                featureId?: (number|null);

                /** PSM aScore */
                aScore?: (number[]|null);

                /** PSM accession */
                accession?: (string[]|null);

                /** PSM psmId */
                psmId?: (string|null);

                /** PSM maxIntensity */
                maxIntensity?: (number|null);

                /** PSM score */
                score?: (number|null);

                /** PSM decoy */
                decoy?: (boolean|null);
            }

            /** Represents a PSM. */
            class PSM implements IPSM {

                /**
                 * Constructs a new PSM.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPSM);

                /** PSM scannum. */
                public scannum: number;

                /** PSM mz. */
                public mz: number;

                /** PSM z. */
                public z: number;

                /** PSM retentionTime. */
                public retentionTime: (number|Long);

                /** PSM area. */
                public area: number;

                /** PSM pValue. */
                public pValue: number;

                /** PSM ppm. */
                public ppm: number;

                /** PSM engine. */
                public engine: com.example.dto.Engine;

                /** PSM featureId. */
                public featureId: number;

                /** PSM aScore. */
                public aScore: number[];

                /** PSM accession. */
                public accession: string[];

                /** PSM psmId. */
                public psmId: string;

                /** PSM maxIntensity. */
                public maxIntensity: number;

                /** PSM score. */
                public score: number;

                /** PSM decoy. */
                public decoy: boolean;

                /**
                 * Creates a new PSM instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PSM instance
                 */
                public static create(properties?: com.example.dto.IPSM): com.example.dto.PSM;

                /**
                 * Encodes the specified PSM message. Does not implicitly {@link com.example.dto.PSM.verify|verify} messages.
                 * @param message PSM message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPSM, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PSM message, length delimited. Does not implicitly {@link com.example.dto.PSM.verify|verify} messages.
                 * @param message PSM message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPSM, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PSM message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PSM
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PSM;

                /**
                 * Decodes a PSM message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PSM
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PSM;

                /**
                 * Verifies a PSM message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PSM message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PSM
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PSM;

                /**
                 * Creates a plain object from a PSM message. Also converts values to other types if specified.
                 * @param message PSM
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PSM, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PSM to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Engine enum. */
            enum Engine {
                UNKNOWN = 0,
                PEAKS = 1,
                SPIDER = 2,
                PEAKSPTM = 3
            }

            /** Properties of a PtmModification. */
            interface IPtmModification {

                /** PtmModification name */
                name?: (string|null);

                /** PtmModification abbreviation */
                abbreviation?: (string|null);

                /** PtmModification monoMass */
                monoMass?: (number|null);

                /** PtmModification type */
                type?: (com.example.dto.ModificationType|null);

                /** PtmModification position */
                position?: (string|null);

                /** PtmModification pValue */
                pValue?: (number|null);

                /** PtmModification maxAscore */
                maxAscore?: (number|null);

                /** PtmModification maxIntensity */
                maxIntensity?: (number|null);

                /** PtmModification are */
                are?: (number|null);

                /** PtmModification count */
                count?: (number|null);
            }

            /** Represents a PtmModification. */
            class PtmModification implements IPtmModification {

                /**
                 * Constructs a new PtmModification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPtmModification);

                /** PtmModification name. */
                public name: string;

                /** PtmModification abbreviation. */
                public abbreviation: string;

                /** PtmModification monoMass. */
                public monoMass: number;

                /** PtmModification type. */
                public type: com.example.dto.ModificationType;

                /** PtmModification position. */
                public position: string;

                /** PtmModification pValue. */
                public pValue: number;

                /** PtmModification maxAscore. */
                public maxAscore: number;

                /** PtmModification maxIntensity. */
                public maxIntensity: number;

                /** PtmModification are. */
                public are: number;

                /** PtmModification count. */
                public count: number;

                /**
                 * Creates a new PtmModification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PtmModification instance
                 */
                public static create(properties?: com.example.dto.IPtmModification): com.example.dto.PtmModification;

                /**
                 * Encodes the specified PtmModification message. Does not implicitly {@link com.example.dto.PtmModification.verify|verify} messages.
                 * @param message PtmModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPtmModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PtmModification message, length delimited. Does not implicitly {@link com.example.dto.PtmModification.verify|verify} messages.
                 * @param message PtmModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPtmModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PtmModification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PtmModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PtmModification;

                /**
                 * Decodes a PtmModification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PtmModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PtmModification;

                /**
                 * Verifies a PtmModification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PtmModification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PtmModification
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PtmModification;

                /**
                 * Creates a plain object from a PtmModification message. Also converts values to other types if specified.
                 * @param message PtmModification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PtmModification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PtmModification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SamplePeptideFrequency. */
            interface ISamplePeptideFrequency {

                /** SamplePeptideFrequency sampleId */
                sampleId?: (string|null);

                /** SamplePeptideFrequency frquences */
                frquences?: (number[]|null);
            }

            /** Represents a SamplePeptideFrequency. */
            class SamplePeptideFrequency implements ISamplePeptideFrequency {

                /**
                 * Constructs a new SamplePeptideFrequency.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISamplePeptideFrequency);

                /** SamplePeptideFrequency sampleId. */
                public sampleId: string;

                /** SamplePeptideFrequency frquences. */
                public frquences: number[];

                /**
                 * Creates a new SamplePeptideFrequency instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SamplePeptideFrequency instance
                 */
                public static create(properties?: com.example.dto.ISamplePeptideFrequency): com.example.dto.SamplePeptideFrequency;

                /**
                 * Encodes the specified SamplePeptideFrequency message. Does not implicitly {@link com.example.dto.SamplePeptideFrequency.verify|verify} messages.
                 * @param message SamplePeptideFrequency message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISamplePeptideFrequency, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SamplePeptideFrequency message, length delimited. Does not implicitly {@link com.example.dto.SamplePeptideFrequency.verify|verify} messages.
                 * @param message SamplePeptideFrequency message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISamplePeptideFrequency, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SamplePeptideFrequency message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SamplePeptideFrequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.SamplePeptideFrequency;

                /**
                 * Decodes a SamplePeptideFrequency message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SamplePeptideFrequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.SamplePeptideFrequency;

                /**
                 * Verifies a SamplePeptideFrequency message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SamplePeptideFrequency message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SamplePeptideFrequency
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.SamplePeptideFrequency;

                /**
                 * Creates a plain object from a SamplePeptideFrequency message. Also converts values to other types if specified.
                 * @param message SamplePeptideFrequency
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.SamplePeptideFrequency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SamplePeptideFrequency to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FeatureVectorProfile. */
            interface IFeatureVectorProfile {

                /** FeatureVectorProfile area */
                area?: (com.example.dto.IOptionalFloat|null);

                /** FeatureVectorProfile ratio */
                ratio?: (com.example.dto.IOptionalFloat|null);

                /** FeatureVectorProfile colour */
                colour?: (number|null);
            }

            /** Represents a FeatureVectorProfile. */
            class FeatureVectorProfile implements IFeatureVectorProfile {

                /**
                 * Constructs a new FeatureVectorProfile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IFeatureVectorProfile);

                /** FeatureVectorProfile area. */
                public area?: (com.example.dto.IOptionalFloat|null);

                /** FeatureVectorProfile ratio. */
                public ratio?: (com.example.dto.IOptionalFloat|null);

                /** FeatureVectorProfile colour. */
                public colour: number;

                /**
                 * Creates a new FeatureVectorProfile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureVectorProfile instance
                 */
                public static create(properties?: com.example.dto.IFeatureVectorProfile): com.example.dto.FeatureVectorProfile;

                /**
                 * Encodes the specified FeatureVectorProfile message. Does not implicitly {@link com.example.dto.FeatureVectorProfile.verify|verify} messages.
                 * @param message FeatureVectorProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IFeatureVectorProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureVectorProfile message, length delimited. Does not implicitly {@link com.example.dto.FeatureVectorProfile.verify|verify} messages.
                 * @param message FeatureVectorProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IFeatureVectorProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureVectorProfile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureVectorProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.FeatureVectorProfile;

                /**
                 * Decodes a FeatureVectorProfile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureVectorProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.FeatureVectorProfile;

                /**
                 * Verifies a FeatureVectorProfile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureVectorProfile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureVectorProfile
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.FeatureVectorProfile;

                /**
                 * Creates a plain object from a FeatureVectorProfile message. Also converts values to other types if specified.
                 * @param message FeatureVectorProfile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.FeatureVectorProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureVectorProfile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SupportPeptideFeatureVector. */
            interface ISupportPeptideFeatureVector {

                /** SupportPeptideFeatureVector peptideFeatureVector */
                peptideFeatureVector?: (com.example.dto.IPeptideFeatureVector|null);

                /** SupportPeptideFeatureVector start */
                start?: (number|null);

                /** SupportPeptideFeatureVector end */
                end?: (number|null);

                /** SupportPeptideFeatureVector used */
                used?: (boolean|null);

                /** SupportPeptideFeatureVector accession */
                accession?: (string|null);

                /** SupportPeptideFeatureVector proteinGroup */
                proteinGroup?: (number|null);
            }

            /** Represents a SupportPeptideFeatureVector. */
            class SupportPeptideFeatureVector implements ISupportPeptideFeatureVector {

                /**
                 * Constructs a new SupportPeptideFeatureVector.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISupportPeptideFeatureVector);

                /** SupportPeptideFeatureVector peptideFeatureVector. */
                public peptideFeatureVector?: (com.example.dto.IPeptideFeatureVector|null);

                /** SupportPeptideFeatureVector start. */
                public start: number;

                /** SupportPeptideFeatureVector end. */
                public end: number;

                /** SupportPeptideFeatureVector used. */
                public used: boolean;

                /** SupportPeptideFeatureVector accession. */
                public accession: string;

                /** SupportPeptideFeatureVector proteinGroup. */
                public proteinGroup: number;

                /**
                 * Creates a new SupportPeptideFeatureVector instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SupportPeptideFeatureVector instance
                 */
                public static create(properties?: com.example.dto.ISupportPeptideFeatureVector): com.example.dto.SupportPeptideFeatureVector;

                /**
                 * Encodes the specified SupportPeptideFeatureVector message. Does not implicitly {@link com.example.dto.SupportPeptideFeatureVector.verify|verify} messages.
                 * @param message SupportPeptideFeatureVector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISupportPeptideFeatureVector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SupportPeptideFeatureVector message, length delimited. Does not implicitly {@link com.example.dto.SupportPeptideFeatureVector.verify|verify} messages.
                 * @param message SupportPeptideFeatureVector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISupportPeptideFeatureVector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SupportPeptideFeatureVector message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SupportPeptideFeatureVector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.SupportPeptideFeatureVector;

                /**
                 * Decodes a SupportPeptideFeatureVector message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SupportPeptideFeatureVector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.SupportPeptideFeatureVector;

                /**
                 * Verifies a SupportPeptideFeatureVector message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SupportPeptideFeatureVector message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SupportPeptideFeatureVector
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.SupportPeptideFeatureVector;

                /**
                 * Creates a plain object from a SupportPeptideFeatureVector message. Also converts values to other types if specified.
                 * @param message SupportPeptideFeatureVector
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.SupportPeptideFeatureVector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SupportPeptideFeatureVector to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PeptideFeatureVector. */
            interface IPeptideFeatureVector {

                /** PeptideFeatureVector peptide */
                peptide?: (string|null);

                /** PeptideFeatureVector quality */
                quality?: (number|null);

                /** PeptideFeatureVector significance */
                significance?: (number|null);

                /** PeptideFeatureVector ppm */
                ppm?: (number|null);

                /** PeptideFeatureVector vectorCount */
                vectorCount?: (number|null);

                /** PeptideFeatureVector sampleProfiles */
                sampleProfiles?: (com.example.dto.IFeatureVectorProfile[]|null);

                /** PeptideFeatureVector groupProfiles */
                groupProfiles?: (com.example.dto.IFeatureVectorProfile[]|null);

                /** PeptideFeatureVector accession */
                accession?: (string[]|null);

                /** PeptideFeatureVector modifications */
                modifications?: (string[]|null);

                /** PeptideFeatureVector positionOfModifications */
                positionOfModifications?: (number[]|null);

                /** PeptideFeatureVector averageArea */
                averageArea?: (number|null);

                /** PeptideFeatureVector maxRatio */
                maxRatio?: (number|null);
            }

            /** Represents a PeptideFeatureVector. */
            class PeptideFeatureVector implements IPeptideFeatureVector {

                /**
                 * Constructs a new PeptideFeatureVector.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPeptideFeatureVector);

                /** PeptideFeatureVector peptide. */
                public peptide: string;

                /** PeptideFeatureVector quality. */
                public quality: number;

                /** PeptideFeatureVector significance. */
                public significance: number;

                /** PeptideFeatureVector ppm. */
                public ppm: number;

                /** PeptideFeatureVector vectorCount. */
                public vectorCount: number;

                /** PeptideFeatureVector sampleProfiles. */
                public sampleProfiles: com.example.dto.IFeatureVectorProfile[];

                /** PeptideFeatureVector groupProfiles. */
                public groupProfiles: com.example.dto.IFeatureVectorProfile[];

                /** PeptideFeatureVector accession. */
                public accession: string[];

                /** PeptideFeatureVector modifications. */
                public modifications: string[];

                /** PeptideFeatureVector positionOfModifications. */
                public positionOfModifications: number[];

                /** PeptideFeatureVector averageArea. */
                public averageArea: number;

                /** PeptideFeatureVector maxRatio. */
                public maxRatio: number;

                /**
                 * Creates a new PeptideFeatureVector instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeptideFeatureVector instance
                 */
                public static create(properties?: com.example.dto.IPeptideFeatureVector): com.example.dto.PeptideFeatureVector;

                /**
                 * Encodes the specified PeptideFeatureVector message. Does not implicitly {@link com.example.dto.PeptideFeatureVector.verify|verify} messages.
                 * @param message PeptideFeatureVector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPeptideFeatureVector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeptideFeatureVector message, length delimited. Does not implicitly {@link com.example.dto.PeptideFeatureVector.verify|verify} messages.
                 * @param message PeptideFeatureVector message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPeptideFeatureVector, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeptideFeatureVector message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeptideFeatureVector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PeptideFeatureVector;

                /**
                 * Decodes a PeptideFeatureVector message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeptideFeatureVector
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PeptideFeatureVector;

                /**
                 * Verifies a PeptideFeatureVector message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeptideFeatureVector message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeptideFeatureVector
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PeptideFeatureVector;

                /**
                 * Creates a plain object from a PeptideFeatureVector message. Also converts values to other types if specified.
                 * @param message PeptideFeatureVector
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PeptideFeatureVector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeptideFeatureVector to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StatsMissedCleavage. */
            interface IStatsMissedCleavage {

                /** StatsMissedCleavage withZeros */
                withZeros?: (number|null);

                /** StatsMissedCleavage withOnes */
                withOnes?: (number|null);

                /** StatsMissedCleavage withTwos */
                withTwos?: (number|null);

                /** StatsMissedCleavage withThrees */
                withThrees?: (number|null);

                /** StatsMissedCleavage withMoreThenFours */
                withMoreThenFours?: (number|null);
            }

            /** Represents a StatsMissedCleavage. */
            class StatsMissedCleavage implements IStatsMissedCleavage {

                /**
                 * Constructs a new StatsMissedCleavage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IStatsMissedCleavage);

                /** StatsMissedCleavage withZeros. */
                public withZeros: number;

                /** StatsMissedCleavage withOnes. */
                public withOnes: number;

                /** StatsMissedCleavage withTwos. */
                public withTwos: number;

                /** StatsMissedCleavage withThrees. */
                public withThrees: number;

                /** StatsMissedCleavage withMoreThenFours. */
                public withMoreThenFours: number;

                /**
                 * Creates a new StatsMissedCleavage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatsMissedCleavage instance
                 */
                public static create(properties?: com.example.dto.IStatsMissedCleavage): com.example.dto.StatsMissedCleavage;

                /**
                 * Encodes the specified StatsMissedCleavage message. Does not implicitly {@link com.example.dto.StatsMissedCleavage.verify|verify} messages.
                 * @param message StatsMissedCleavage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IStatsMissedCleavage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatsMissedCleavage message, length delimited. Does not implicitly {@link com.example.dto.StatsMissedCleavage.verify|verify} messages.
                 * @param message StatsMissedCleavage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IStatsMissedCleavage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatsMissedCleavage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatsMissedCleavage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.StatsMissedCleavage;

                /**
                 * Decodes a StatsMissedCleavage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatsMissedCleavage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.StatsMissedCleavage;

                /**
                 * Verifies a StatsMissedCleavage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatsMissedCleavage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatsMissedCleavage
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.StatsMissedCleavage;

                /**
                 * Creates a plain object from a StatsMissedCleavage message. Also converts values to other types if specified.
                 * @param message StatsMissedCleavage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.StatsMissedCleavage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatsMissedCleavage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SampleProteinStatistics. */
            interface ISampleProteinStatistics {

                /** SampleProteinStatistics proteinTotal */
                proteinTotal?: (number|null);

                /** SampleProteinStatistics proteinGroupTotal */
                proteinGroupTotal?: (number|null);
            }

            /** Represents a SampleProteinStatistics. */
            class SampleProteinStatistics implements ISampleProteinStatistics {

                /**
                 * Constructs a new SampleProteinStatistics.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISampleProteinStatistics);

                /** SampleProteinStatistics proteinTotal. */
                public proteinTotal: number;

                /** SampleProteinStatistics proteinGroupTotal. */
                public proteinGroupTotal: number;

                /**
                 * Creates a new SampleProteinStatistics instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SampleProteinStatistics instance
                 */
                public static create(properties?: com.example.dto.ISampleProteinStatistics): com.example.dto.SampleProteinStatistics;

                /**
                 * Encodes the specified SampleProteinStatistics message. Does not implicitly {@link com.example.dto.SampleProteinStatistics.verify|verify} messages.
                 * @param message SampleProteinStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISampleProteinStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SampleProteinStatistics message, length delimited. Does not implicitly {@link com.example.dto.SampleProteinStatistics.verify|verify} messages.
                 * @param message SampleProteinStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISampleProteinStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SampleProteinStatistics message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SampleProteinStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.SampleProteinStatistics;

                /**
                 * Decodes a SampleProteinStatistics message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SampleProteinStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.SampleProteinStatistics;

                /**
                 * Verifies a SampleProteinStatistics message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SampleProteinStatistics message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SampleProteinStatistics
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.SampleProteinStatistics;

                /**
                 * Creates a plain object from a SampleProteinStatistics message. Also converts values to other types if specified.
                 * @param message SampleProteinStatistics
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.SampleProteinStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SampleProteinStatistics to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SamplePeptideStatistics. */
            interface ISamplePeptideStatistics {

                /** SamplePeptideStatistics ms1scans */
                ms1scans?: (number|null);

                /** SamplePeptideStatistics ms2scans */
                ms2scans?: (number|null);

                /** SamplePeptideStatistics psmTotal */
                psmTotal?: (number|null);

                /** SamplePeptideStatistics peptideTotal */
                peptideTotal?: (number|null);

                /** SamplePeptideStatistics peptideBackboneTotal */
                peptideBackboneTotal?: (number|null);

                /** SamplePeptideStatistics denovoOnlySpectrumCount */
                denovoOnlySpectrumCount?: (number|null);

                /** SamplePeptideStatistics missedCleavages */
                missedCleavages?: (com.example.dto.IStatsMissedCleavage|null);
            }

            /** Represents a SamplePeptideStatistics. */
            class SamplePeptideStatistics implements ISamplePeptideStatistics {

                /**
                 * Constructs a new SamplePeptideStatistics.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ISamplePeptideStatistics);

                /** SamplePeptideStatistics ms1scans. */
                public ms1scans: number;

                /** SamplePeptideStatistics ms2scans. */
                public ms2scans: number;

                /** SamplePeptideStatistics psmTotal. */
                public psmTotal: number;

                /** SamplePeptideStatistics peptideTotal. */
                public peptideTotal: number;

                /** SamplePeptideStatistics peptideBackboneTotal. */
                public peptideBackboneTotal: number;

                /** SamplePeptideStatistics denovoOnlySpectrumCount. */
                public denovoOnlySpectrumCount: number;

                /** SamplePeptideStatistics missedCleavages. */
                public missedCleavages?: (com.example.dto.IStatsMissedCleavage|null);

                /**
                 * Creates a new SamplePeptideStatistics instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SamplePeptideStatistics instance
                 */
                public static create(properties?: com.example.dto.ISamplePeptideStatistics): com.example.dto.SamplePeptideStatistics;

                /**
                 * Encodes the specified SamplePeptideStatistics message. Does not implicitly {@link com.example.dto.SamplePeptideStatistics.verify|verify} messages.
                 * @param message SamplePeptideStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ISamplePeptideStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SamplePeptideStatistics message, length delimited. Does not implicitly {@link com.example.dto.SamplePeptideStatistics.verify|verify} messages.
                 * @param message SamplePeptideStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ISamplePeptideStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SamplePeptideStatistics message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SamplePeptideStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.SamplePeptideStatistics;

                /**
                 * Decodes a SamplePeptideStatistics message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SamplePeptideStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.SamplePeptideStatistics;

                /**
                 * Verifies a SamplePeptideStatistics message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SamplePeptideStatistics message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SamplePeptideStatistics
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.SamplePeptideStatistics;

                /**
                 * Creates a plain object from a SamplePeptideStatistics message. Also converts values to other types if specified.
                 * @param message SamplePeptideStatistics
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.SamplePeptideStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SamplePeptideStatistics to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StatisticsOfFilteredResult. */
            interface IStatisticsOfFilteredResult {

                /** StatisticsOfFilteredResult proteinGroupsCount */
                proteinGroupsCount?: (number|null);

                /** StatisticsOfFilteredResult proteinDecoyCount */
                proteinDecoyCount?: (number|null);

                /** StatisticsOfFilteredResult proteinTargetCount */
                proteinTargetCount?: (number|null);

                /** StatisticsOfFilteredResult proteinCountWithOneUniquePeptide */
                proteinCountWithOneUniquePeptide?: (number|null);

                /** StatisticsOfFilteredResult proteinCountWithTwoUniquePeptides */
                proteinCountWithTwoUniquePeptides?: (number|null);

                /** StatisticsOfFilteredResult proteinCountWithMoreThanTwoUniquePeptides */
                proteinCountWithMoreThanTwoUniquePeptides?: (number|null);

                /** StatisticsOfFilteredResult proteinTargetTopCount */
                proteinTargetTopCount?: (number|null);

                /** StatisticsOfFilteredResult peptideStats */
                peptideStats?: (com.example.dto.IPeptideStatistics|null);

                /** StatisticsOfFilteredResult samples */
                samples?: ({ [k: string]: com.example.dto.ISampleProteinStatistics }|null);

                /** StatisticsOfFilteredResult modifications */
                modifications?: ({ [k: string]: com.example.dto.IPtmModification }|null);
            }

            /** Represents a StatisticsOfFilteredResult. */
            class StatisticsOfFilteredResult implements IStatisticsOfFilteredResult {

                /**
                 * Constructs a new StatisticsOfFilteredResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IStatisticsOfFilteredResult);

                /** StatisticsOfFilteredResult proteinGroupsCount. */
                public proteinGroupsCount: number;

                /** StatisticsOfFilteredResult proteinDecoyCount. */
                public proteinDecoyCount: number;

                /** StatisticsOfFilteredResult proteinTargetCount. */
                public proteinTargetCount: number;

                /** StatisticsOfFilteredResult proteinCountWithOneUniquePeptide. */
                public proteinCountWithOneUniquePeptide: number;

                /** StatisticsOfFilteredResult proteinCountWithTwoUniquePeptides. */
                public proteinCountWithTwoUniquePeptides: number;

                /** StatisticsOfFilteredResult proteinCountWithMoreThanTwoUniquePeptides. */
                public proteinCountWithMoreThanTwoUniquePeptides: number;

                /** StatisticsOfFilteredResult proteinTargetTopCount. */
                public proteinTargetTopCount: number;

                /** StatisticsOfFilteredResult peptideStats. */
                public peptideStats?: (com.example.dto.IPeptideStatistics|null);

                /** StatisticsOfFilteredResult samples. */
                public samples: { [k: string]: com.example.dto.ISampleProteinStatistics };

                /** StatisticsOfFilteredResult modifications. */
                public modifications: { [k: string]: com.example.dto.IPtmModification };

                /**
                 * Creates a new StatisticsOfFilteredResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatisticsOfFilteredResult instance
                 */
                public static create(properties?: com.example.dto.IStatisticsOfFilteredResult): com.example.dto.StatisticsOfFilteredResult;

                /**
                 * Encodes the specified StatisticsOfFilteredResult message. Does not implicitly {@link com.example.dto.StatisticsOfFilteredResult.verify|verify} messages.
                 * @param message StatisticsOfFilteredResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IStatisticsOfFilteredResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatisticsOfFilteredResult message, length delimited. Does not implicitly {@link com.example.dto.StatisticsOfFilteredResult.verify|verify} messages.
                 * @param message StatisticsOfFilteredResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IStatisticsOfFilteredResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatisticsOfFilteredResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatisticsOfFilteredResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.StatisticsOfFilteredResult;

                /**
                 * Decodes a StatisticsOfFilteredResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatisticsOfFilteredResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.StatisticsOfFilteredResult;

                /**
                 * Verifies a StatisticsOfFilteredResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatisticsOfFilteredResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatisticsOfFilteredResult
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.StatisticsOfFilteredResult;

                /**
                 * Creates a plain object from a StatisticsOfFilteredResult message. Also converts values to other types if specified.
                 * @param message StatisticsOfFilteredResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.StatisticsOfFilteredResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatisticsOfFilteredResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PeptideStatistics. */
            interface IPeptideStatistics {

                /** PeptideStatistics ms1Count */
                ms1Count?: (number|null);

                /** PeptideStatistics ms2Count */
                ms2Count?: (number|null);

                /** PeptideStatistics denovoOnlySpectrumCount */
                denovoOnlySpectrumCount?: (number|null);

                /** PeptideStatistics peptideTargetSpecturmCount */
                peptideTargetSpecturmCount?: (number|null);

                /** PeptideStatistics peptideDecoySpecturmCount */
                peptideDecoySpecturmCount?: (number|null);

                /** PeptideStatistics peptideTargetSequencesCount */
                peptideTargetSequencesCount?: (number|null);

                /** PeptideStatistics peptideDecoySequencesCount */
                peptideDecoySequencesCount?: (number|null);

                /** PeptideStatistics peptideTargetBackboneSequencesCount */
                peptideTargetBackboneSequencesCount?: (number|null);

                /** PeptideStatistics peptideDecoyBackboneSequencesCount */
                peptideDecoyBackboneSequencesCount?: (number|null);

                /** PeptideStatistics psmPrecursorPpms */
                psmPrecursorPpms?: (number[]|null);

                /** PeptideStatistics psmPrecursorMzs */
                psmPrecursorMzs?: (number[]|null);

                /** PeptideStatistics precursorOverflow */
                precursorOverflow?: (boolean|null);

                /** PeptideStatistics psmPrecursorPpmBins */
                psmPrecursorPpmBins?: (com.example.dto.IBin[]|null);

                /** PeptideStatistics samples */
                samples?: ({ [k: string]: com.example.dto.ISamplePeptideStatistics }|null);

                /** PeptideStatistics pValue */
                pValue?: (number|null);

                /** PeptideStatistics psmPrecursorPpmsBinsAfterCalibration */
                psmPrecursorPpmsBinsAfterCalibration?: (com.example.dto.IBin[]|null);
            }

            /** Represents a PeptideStatistics. */
            class PeptideStatistics implements IPeptideStatistics {

                /**
                 * Constructs a new PeptideStatistics.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IPeptideStatistics);

                /** PeptideStatistics ms1Count. */
                public ms1Count: number;

                /** PeptideStatistics ms2Count. */
                public ms2Count: number;

                /** PeptideStatistics denovoOnlySpectrumCount. */
                public denovoOnlySpectrumCount: number;

                /** PeptideStatistics peptideTargetSpecturmCount. */
                public peptideTargetSpecturmCount: number;

                /** PeptideStatistics peptideDecoySpecturmCount. */
                public peptideDecoySpecturmCount: number;

                /** PeptideStatistics peptideTargetSequencesCount. */
                public peptideTargetSequencesCount: number;

                /** PeptideStatistics peptideDecoySequencesCount. */
                public peptideDecoySequencesCount: number;

                /** PeptideStatistics peptideTargetBackboneSequencesCount. */
                public peptideTargetBackboneSequencesCount: number;

                /** PeptideStatistics peptideDecoyBackboneSequencesCount. */
                public peptideDecoyBackboneSequencesCount: number;

                /** PeptideStatistics psmPrecursorPpms. */
                public psmPrecursorPpms: number[];

                /** PeptideStatistics psmPrecursorMzs. */
                public psmPrecursorMzs: number[];

                /** PeptideStatistics precursorOverflow. */
                public precursorOverflow: boolean;

                /** PeptideStatistics psmPrecursorPpmBins. */
                public psmPrecursorPpmBins: com.example.dto.IBin[];

                /** PeptideStatistics samples. */
                public samples: { [k: string]: com.example.dto.ISamplePeptideStatistics };

                /** PeptideStatistics pValue. */
                public pValue: number;

                /** PeptideStatistics psmPrecursorPpmsBinsAfterCalibration. */
                public psmPrecursorPpmsBinsAfterCalibration: com.example.dto.IBin[];

                /**
                 * Creates a new PeptideStatistics instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PeptideStatistics instance
                 */
                public static create(properties?: com.example.dto.IPeptideStatistics): com.example.dto.PeptideStatistics;

                /**
                 * Encodes the specified PeptideStatistics message. Does not implicitly {@link com.example.dto.PeptideStatistics.verify|verify} messages.
                 * @param message PeptideStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IPeptideStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PeptideStatistics message, length delimited. Does not implicitly {@link com.example.dto.PeptideStatistics.verify|verify} messages.
                 * @param message PeptideStatistics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IPeptideStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PeptideStatistics message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PeptideStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.PeptideStatistics;

                /**
                 * Decodes a PeptideStatistics message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PeptideStatistics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.PeptideStatistics;

                /**
                 * Verifies a PeptideStatistics message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PeptideStatistics message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PeptideStatistics
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.PeptideStatistics;

                /**
                 * Creates a plain object from a PeptideStatistics message. Also converts values to other types if specified.
                 * @param message PeptideStatistics
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.PeptideStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PeptideStatistics to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Bin. */
            interface IBin {

                /** Bin count */
                count?: (number|null);

                /** Bin min */
                min?: (number|null);

                /** Bin max */
                max?: (number|null);
            }

            /** Represents a Bin. */
            class Bin implements IBin {

                /**
                 * Constructs a new Bin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IBin);

                /** Bin count. */
                public count: number;

                /** Bin min. */
                public min: number;

                /** Bin max. */
                public max: number;

                /**
                 * Creates a new Bin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Bin instance
                 */
                public static create(properties?: com.example.dto.IBin): com.example.dto.Bin;

                /**
                 * Encodes the specified Bin message. Does not implicitly {@link com.example.dto.Bin.verify|verify} messages.
                 * @param message Bin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IBin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Bin message, length delimited. Does not implicitly {@link com.example.dto.Bin.verify|verify} messages.
                 * @param message Bin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IBin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Bin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Bin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.Bin;

                /**
                 * Decodes a Bin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Bin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.Bin;

                /**
                 * Verifies a Bin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Bin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Bin
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.Bin;

                /**
                 * Creates a plain object from a Bin message. Also converts values to other types if specified.
                 * @param message Bin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.Bin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Bin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LfqStatisticsOfFilteredResult. */
            interface ILfqStatisticsOfFilteredResult {

                /** LfqStatisticsOfFilteredResult featuresCount */
                featuresCount?: (number|null);

                /** LfqStatisticsOfFilteredResult featuresWithIdCount */
                featuresWithIdCount?: (number|null);

                /** LfqStatisticsOfFilteredResult featureVectorsCount */
                featureVectorsCount?: (number|null);

                /** LfqStatisticsOfFilteredResult featureVectorsWithIdCount */
                featureVectorsWithIdCount?: (number|null);

                /** LfqStatisticsOfFilteredResult proteinGroupsCount */
                proteinGroupsCount?: (number|null);

                /** LfqStatisticsOfFilteredResult proteinHeatMap */
                proteinHeatMap?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqStatisticsOfFilteredResult heatMapMaxProteinsReached */
                heatMapMaxProteinsReached?: (boolean|null);

                /** LfqStatisticsOfFilteredResult modificationMap */
                modificationMap?: ({ [k: string]: com.example.dto.IAbbreviatedModification }|null);
            }

            /** Represents a LfqStatisticsOfFilteredResult. */
            class LfqStatisticsOfFilteredResult implements ILfqStatisticsOfFilteredResult {

                /**
                 * Constructs a new LfqStatisticsOfFilteredResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ILfqStatisticsOfFilteredResult);

                /** LfqStatisticsOfFilteredResult featuresCount. */
                public featuresCount: number;

                /** LfqStatisticsOfFilteredResult featuresWithIdCount. */
                public featuresWithIdCount: number;

                /** LfqStatisticsOfFilteredResult featureVectorsCount. */
                public featureVectorsCount: number;

                /** LfqStatisticsOfFilteredResult featureVectorsWithIdCount. */
                public featureVectorsWithIdCount: number;

                /** LfqStatisticsOfFilteredResult proteinGroupsCount. */
                public proteinGroupsCount: number;

                /** LfqStatisticsOfFilteredResult proteinHeatMap. */
                public proteinHeatMap?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqStatisticsOfFilteredResult heatMapMaxProteinsReached. */
                public heatMapMaxProteinsReached: boolean;

                /** LfqStatisticsOfFilteredResult modificationMap. */
                public modificationMap: { [k: string]: com.example.dto.IAbbreviatedModification };

                /**
                 * Creates a new LfqStatisticsOfFilteredResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LfqStatisticsOfFilteredResult instance
                 */
                public static create(properties?: com.example.dto.ILfqStatisticsOfFilteredResult): com.example.dto.LfqStatisticsOfFilteredResult;

                /**
                 * Encodes the specified LfqStatisticsOfFilteredResult message. Does not implicitly {@link com.example.dto.LfqStatisticsOfFilteredResult.verify|verify} messages.
                 * @param message LfqStatisticsOfFilteredResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ILfqStatisticsOfFilteredResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LfqStatisticsOfFilteredResult message, length delimited. Does not implicitly {@link com.example.dto.LfqStatisticsOfFilteredResult.verify|verify} messages.
                 * @param message LfqStatisticsOfFilteredResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ILfqStatisticsOfFilteredResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LfqStatisticsOfFilteredResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LfqStatisticsOfFilteredResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.LfqStatisticsOfFilteredResult;

                /**
                 * Decodes a LfqStatisticsOfFilteredResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LfqStatisticsOfFilteredResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.LfqStatisticsOfFilteredResult;

                /**
                 * Verifies a LfqStatisticsOfFilteredResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LfqStatisticsOfFilteredResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LfqStatisticsOfFilteredResult
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.LfqStatisticsOfFilteredResult;

                /**
                 * Creates a plain object from a LfqStatisticsOfFilteredResult message. Also converts values to other types if specified.
                 * @param message LfqStatisticsOfFilteredResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.LfqStatisticsOfFilteredResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LfqStatisticsOfFilteredResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LfqHeatMapDendrogram. */
            interface ILfqHeatMapDendrogram {

                /** LfqHeatMapDendrogram left */
                left?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqHeatMapDendrogram right */
                right?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqHeatMapDendrogram row */
                row?: (com.example.dto.ILfqHeatMapRow|null);
            }

            /** Represents a LfqHeatMapDendrogram. */
            class LfqHeatMapDendrogram implements ILfqHeatMapDendrogram {

                /**
                 * Constructs a new LfqHeatMapDendrogram.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ILfqHeatMapDendrogram);

                /** LfqHeatMapDendrogram left. */
                public left?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqHeatMapDendrogram right. */
                public right?: (com.example.dto.ILfqHeatMapDendrogram|null);

                /** LfqHeatMapDendrogram row. */
                public row?: (com.example.dto.ILfqHeatMapRow|null);

                /**
                 * Creates a new LfqHeatMapDendrogram instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LfqHeatMapDendrogram instance
                 */
                public static create(properties?: com.example.dto.ILfqHeatMapDendrogram): com.example.dto.LfqHeatMapDendrogram;

                /**
                 * Encodes the specified LfqHeatMapDendrogram message. Does not implicitly {@link com.example.dto.LfqHeatMapDendrogram.verify|verify} messages.
                 * @param message LfqHeatMapDendrogram message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ILfqHeatMapDendrogram, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LfqHeatMapDendrogram message, length delimited. Does not implicitly {@link com.example.dto.LfqHeatMapDendrogram.verify|verify} messages.
                 * @param message LfqHeatMapDendrogram message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ILfqHeatMapDendrogram, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LfqHeatMapDendrogram message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LfqHeatMapDendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.LfqHeatMapDendrogram;

                /**
                 * Decodes a LfqHeatMapDendrogram message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LfqHeatMapDendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.LfqHeatMapDendrogram;

                /**
                 * Verifies a LfqHeatMapDendrogram message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LfqHeatMapDendrogram message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LfqHeatMapDendrogram
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.LfqHeatMapDendrogram;

                /**
                 * Creates a plain object from a LfqHeatMapDendrogram message. Also converts values to other types if specified.
                 * @param message LfqHeatMapDendrogram
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.LfqHeatMapDendrogram, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LfqHeatMapDendrogram to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LfqHeatMapRow. */
            interface ILfqHeatMapRow {

                /** LfqHeatMapRow accession */
                accession?: (string|null);

                /** LfqHeatMapRow sampleAreas */
                sampleAreas?: (number[]|null);

                /** LfqHeatMapRow sampleRatios */
                sampleRatios?: (com.example.dto.IOptionalFloat[]|null);

                /** LfqHeatMapRow colour */
                colour?: (number[]|null);
            }

            /** Represents a LfqHeatMapRow. */
            class LfqHeatMapRow implements ILfqHeatMapRow {

                /**
                 * Constructs a new LfqHeatMapRow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.ILfqHeatMapRow);

                /** LfqHeatMapRow accession. */
                public accession: string;

                /** LfqHeatMapRow sampleAreas. */
                public sampleAreas: number[];

                /** LfqHeatMapRow sampleRatios. */
                public sampleRatios: com.example.dto.IOptionalFloat[];

                /** LfqHeatMapRow colour. */
                public colour: number[];

                /**
                 * Creates a new LfqHeatMapRow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LfqHeatMapRow instance
                 */
                public static create(properties?: com.example.dto.ILfqHeatMapRow): com.example.dto.LfqHeatMapRow;

                /**
                 * Encodes the specified LfqHeatMapRow message. Does not implicitly {@link com.example.dto.LfqHeatMapRow.verify|verify} messages.
                 * @param message LfqHeatMapRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.ILfqHeatMapRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LfqHeatMapRow message, length delimited. Does not implicitly {@link com.example.dto.LfqHeatMapRow.verify|verify} messages.
                 * @param message LfqHeatMapRow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.ILfqHeatMapRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LfqHeatMapRow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LfqHeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.LfqHeatMapRow;

                /**
                 * Decodes a LfqHeatMapRow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LfqHeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.LfqHeatMapRow;

                /**
                 * Verifies a LfqHeatMapRow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LfqHeatMapRow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LfqHeatMapRow
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.LfqHeatMapRow;

                /**
                 * Creates a plain object from a LfqHeatMapRow message. Also converts values to other types if specified.
                 * @param message LfqHeatMapRow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.LfqHeatMapRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LfqHeatMapRow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
