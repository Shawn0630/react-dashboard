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
                modifications?: (com.example.dto.IAbbreviateModification[]|null);

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
                public modifications: com.example.dto.IAbbreviateModification[];

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

            /** Properties of an AbbreviateModification. */
            interface IAbbreviateModification {

                /** AbbreviateModification name */
                name?: (string|null);

                /** AbbreviateModification abbreviation */
                abbreviation?: (string|null);

                /** AbbreviateModification monoMass */
                monoMass?: (number|null);

                /** AbbreviateModification type */
                type?: (com.example.dto.ModificationType|null);

                /** AbbreviateModification anywhereResidues */
                anywhereResidues?: (string|null);
            }

            /** Represents an AbbreviateModification. */
            class AbbreviateModification implements IAbbreviateModification {

                /**
                 * Constructs a new AbbreviateModification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.example.dto.IAbbreviateModification);

                /** AbbreviateModification name. */
                public name: string;

                /** AbbreviateModification abbreviation. */
                public abbreviation: string;

                /** AbbreviateModification monoMass. */
                public monoMass: number;

                /** AbbreviateModification type. */
                public type: com.example.dto.ModificationType;

                /** AbbreviateModification anywhereResidues. */
                public anywhereResidues: string;

                /**
                 * Creates a new AbbreviateModification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AbbreviateModification instance
                 */
                public static create(properties?: com.example.dto.IAbbreviateModification): com.example.dto.AbbreviateModification;

                /**
                 * Encodes the specified AbbreviateModification message. Does not implicitly {@link com.example.dto.AbbreviateModification.verify|verify} messages.
                 * @param message AbbreviateModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.example.dto.IAbbreviateModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AbbreviateModification message, length delimited. Does not implicitly {@link com.example.dto.AbbreviateModification.verify|verify} messages.
                 * @param message AbbreviateModification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.example.dto.IAbbreviateModification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AbbreviateModification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AbbreviateModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.example.dto.AbbreviateModification;

                /**
                 * Decodes an AbbreviateModification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AbbreviateModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.example.dto.AbbreviateModification;

                /**
                 * Verifies an AbbreviateModification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AbbreviateModification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AbbreviateModification
                 */
                public static fromObject(object: { [k: string]: any }): com.example.dto.AbbreviateModification;

                /**
                 * Creates a plain object from an AbbreviateModification message. Also converts values to other types if specified.
                 * @param message AbbreviateModification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.example.dto.AbbreviateModification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AbbreviateModification to JSON.
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
        }
    }
}
