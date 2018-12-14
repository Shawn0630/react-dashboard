/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.example = (function() {

        /**
         * Namespace example.
         * @memberof com
         * @namespace
         */
        var example = {};

        example.dto = (function() {

            /**
             * Namespace dto.
             * @memberof com.example
             * @namespace
             */
            var dto = {};

            dto.ProteinFoldChange = (function() {

                /**
                 * Properties of a ProteinFoldChange.
                 * @memberof com.example.dto
                 * @interface IProteinFoldChange
                 * @property {string|null} [accession] ProteinFoldChange accession
                 * @property {number|null} [significance] ProteinFoldChange significance
                 * @property {number|null} [largestFoldChange] ProteinFoldChange largestFoldChange
                 * @property {boolean|null} [isFiltered] ProteinFoldChange isFiltered
                 * @property {number|null} [cluster] ProteinFoldChange cluster
                 * @property {boolean|null} [top] ProteinFoldChange top
                 * @property {string|null} [id] ProteinFoldChange id
                 */

                /**
                 * Constructs a new ProteinFoldChange.
                 * @memberof com.example.dto
                 * @classdesc Represents a ProteinFoldChange.
                 * @implements IProteinFoldChange
                 * @constructor
                 * @param {com.example.dto.IProteinFoldChange=} [properties] Properties to set
                 */
                function ProteinFoldChange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ProteinFoldChange accession.
                 * @member {string} accession
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.accession = "";

                /**
                 * ProteinFoldChange significance.
                 * @member {number} significance
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.significance = 0;

                /**
                 * ProteinFoldChange largestFoldChange.
                 * @member {number} largestFoldChange
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.largestFoldChange = 0;

                /**
                 * ProteinFoldChange isFiltered.
                 * @member {boolean} isFiltered
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.isFiltered = false;

                /**
                 * ProteinFoldChange cluster.
                 * @member {number} cluster
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.cluster = 0;

                /**
                 * ProteinFoldChange top.
                 * @member {boolean} top
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.top = false;

                /**
                 * ProteinFoldChange id.
                 * @member {string} id
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 */
                ProteinFoldChange.prototype.id = "";

                /**
                 * Creates a new ProteinFoldChange instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {com.example.dto.IProteinFoldChange=} [properties] Properties to set
                 * @returns {com.example.dto.ProteinFoldChange} ProteinFoldChange instance
                 */
                ProteinFoldChange.create = function create(properties) {
                    return new ProteinFoldChange(properties);
                };

                /**
                 * Encodes the specified ProteinFoldChange message. Does not implicitly {@link com.example.dto.ProteinFoldChange.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {com.example.dto.IProteinFoldChange} message ProteinFoldChange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProteinFoldChange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
                    if (message.significance != null && message.hasOwnProperty("significance"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.significance);
                    if (message.largestFoldChange != null && message.hasOwnProperty("largestFoldChange"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.largestFoldChange);
                    if (message.isFiltered != null && message.hasOwnProperty("isFiltered"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isFiltered);
                    if (message.cluster != null && message.hasOwnProperty("cluster"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cluster);
                    if (message.top != null && message.hasOwnProperty("top"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.top);
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified ProteinFoldChange message, length delimited. Does not implicitly {@link com.example.dto.ProteinFoldChange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {com.example.dto.IProteinFoldChange} message ProteinFoldChange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProteinFoldChange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ProteinFoldChange message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.ProteinFoldChange} ProteinFoldChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProteinFoldChange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.ProteinFoldChange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.accession = reader.string();
                            break;
                        case 2:
                            message.significance = reader.float();
                            break;
                        case 3:
                            message.largestFoldChange = reader.float();
                            break;
                        case 4:
                            message.isFiltered = reader.bool();
                            break;
                        case 5:
                            message.cluster = reader.uint32();
                            break;
                        case 6:
                            message.top = reader.bool();
                            break;
                        case 7:
                            message.id = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ProteinFoldChange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.ProteinFoldChange} ProteinFoldChange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProteinFoldChange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ProteinFoldChange message.
                 * @function verify
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProteinFoldChange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        if (!$util.isString(message.accession))
                            return "accession: string expected";
                    if (message.significance != null && message.hasOwnProperty("significance"))
                        if (typeof message.significance !== "number")
                            return "significance: number expected";
                    if (message.largestFoldChange != null && message.hasOwnProperty("largestFoldChange"))
                        if (typeof message.largestFoldChange !== "number")
                            return "largestFoldChange: number expected";
                    if (message.isFiltered != null && message.hasOwnProperty("isFiltered"))
                        if (typeof message.isFiltered !== "boolean")
                            return "isFiltered: boolean expected";
                    if (message.cluster != null && message.hasOwnProperty("cluster"))
                        if (!$util.isInteger(message.cluster))
                            return "cluster: integer expected";
                    if (message.top != null && message.hasOwnProperty("top"))
                        if (typeof message.top !== "boolean")
                            return "top: boolean expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a ProteinFoldChange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.ProteinFoldChange} ProteinFoldChange
                 */
                ProteinFoldChange.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.ProteinFoldChange)
                        return object;
                    var message = new $root.com.example.dto.ProteinFoldChange();
                    if (object.accession != null)
                        message.accession = String(object.accession);
                    if (object.significance != null)
                        message.significance = Number(object.significance);
                    if (object.largestFoldChange != null)
                        message.largestFoldChange = Number(object.largestFoldChange);
                    if (object.isFiltered != null)
                        message.isFiltered = Boolean(object.isFiltered);
                    if (object.cluster != null)
                        message.cluster = object.cluster >>> 0;
                    if (object.top != null)
                        message.top = Boolean(object.top);
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a ProteinFoldChange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.ProteinFoldChange
                 * @static
                 * @param {com.example.dto.ProteinFoldChange} message ProteinFoldChange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProteinFoldChange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.accession = "";
                        object.significance = 0;
                        object.largestFoldChange = 0;
                        object.isFiltered = false;
                        object.cluster = 0;
                        object.top = false;
                        object.id = "";
                    }
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        object.accession = message.accession;
                    if (message.significance != null && message.hasOwnProperty("significance"))
                        object.significance = options.json && !isFinite(message.significance) ? String(message.significance) : message.significance;
                    if (message.largestFoldChange != null && message.hasOwnProperty("largestFoldChange"))
                        object.largestFoldChange = options.json && !isFinite(message.largestFoldChange) ? String(message.largestFoldChange) : message.largestFoldChange;
                    if (message.isFiltered != null && message.hasOwnProperty("isFiltered"))
                        object.isFiltered = message.isFiltered;
                    if (message.cluster != null && message.hasOwnProperty("cluster"))
                        object.cluster = message.cluster;
                    if (message.top != null && message.hasOwnProperty("top"))
                        object.top = message.top;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this ProteinFoldChange to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.ProteinFoldChange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProteinFoldChange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ProteinFoldChange;
            })();

            dto.Group = (function() {

                /**
                 * Properties of a Group.
                 * @memberof com.example.dto
                 * @interface IGroup
                 * @property {string|null} [groupName] Group groupName
                 * @property {Array.<string>|null} [sampleIds] Group sampleIds
                 * @property {Array.<string>|null} [sampleNames] Group sampleNames
                 * @property {string|null} [hexColour] Group hexColour
                 */

                /**
                 * Constructs a new Group.
                 * @memberof com.example.dto
                 * @classdesc Represents a Group.
                 * @implements IGroup
                 * @constructor
                 * @param {com.example.dto.IGroup=} [properties] Properties to set
                 */
                function Group(properties) {
                    this.sampleIds = [];
                    this.sampleNames = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Group groupName.
                 * @member {string} groupName
                 * @memberof com.example.dto.Group
                 * @instance
                 */
                Group.prototype.groupName = "";

                /**
                 * Group sampleIds.
                 * @member {Array.<string>} sampleIds
                 * @memberof com.example.dto.Group
                 * @instance
                 */
                Group.prototype.sampleIds = $util.emptyArray;

                /**
                 * Group sampleNames.
                 * @member {Array.<string>} sampleNames
                 * @memberof com.example.dto.Group
                 * @instance
                 */
                Group.prototype.sampleNames = $util.emptyArray;

                /**
                 * Group hexColour.
                 * @member {string} hexColour
                 * @memberof com.example.dto.Group
                 * @instance
                 */
                Group.prototype.hexColour = "";

                /**
                 * Creates a new Group instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {com.example.dto.IGroup=} [properties] Properties to set
                 * @returns {com.example.dto.Group} Group instance
                 */
                Group.create = function create(properties) {
                    return new Group(properties);
                };

                /**
                 * Encodes the specified Group message. Does not implicitly {@link com.example.dto.Group.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {com.example.dto.IGroup} message Group message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Group.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupName != null && message.hasOwnProperty("groupName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
                    if (message.sampleIds != null && message.sampleIds.length)
                        for (var i = 0; i < message.sampleIds.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sampleIds[i]);
                    if (message.sampleNames != null && message.sampleNames.length)
                        for (var i = 0; i < message.sampleNames.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sampleNames[i]);
                    if (message.hexColour != null && message.hasOwnProperty("hexColour"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.hexColour);
                    return writer;
                };

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link com.example.dto.Group.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {com.example.dto.IGroup} message Group message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Group.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Group} Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Group.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Group();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.groupName = reader.string();
                            break;
                        case 2:
                            if (!(message.sampleIds && message.sampleIds.length))
                                message.sampleIds = [];
                            message.sampleIds.push(reader.string());
                            break;
                        case 3:
                            if (!(message.sampleNames && message.sampleNames.length))
                                message.sampleNames = [];
                            message.sampleNames.push(reader.string());
                            break;
                        case 4:
                            message.hexColour = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Group} Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Group.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Group message.
                 * @function verify
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Group.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.groupName != null && message.hasOwnProperty("groupName"))
                        if (!$util.isString(message.groupName))
                            return "groupName: string expected";
                    if (message.sampleIds != null && message.hasOwnProperty("sampleIds")) {
                        if (!Array.isArray(message.sampleIds))
                            return "sampleIds: array expected";
                        for (var i = 0; i < message.sampleIds.length; ++i)
                            if (!$util.isString(message.sampleIds[i]))
                                return "sampleIds: string[] expected";
                    }
                    if (message.sampleNames != null && message.hasOwnProperty("sampleNames")) {
                        if (!Array.isArray(message.sampleNames))
                            return "sampleNames: array expected";
                        for (var i = 0; i < message.sampleNames.length; ++i)
                            if (!$util.isString(message.sampleNames[i]))
                                return "sampleNames: string[] expected";
                    }
                    if (message.hexColour != null && message.hasOwnProperty("hexColour"))
                        if (!$util.isString(message.hexColour))
                            return "hexColour: string expected";
                    return null;
                };

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Group} Group
                 */
                Group.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Group)
                        return object;
                    var message = new $root.com.example.dto.Group();
                    if (object.groupName != null)
                        message.groupName = String(object.groupName);
                    if (object.sampleIds) {
                        if (!Array.isArray(object.sampleIds))
                            throw TypeError(".com.example.dto.Group.sampleIds: array expected");
                        message.sampleIds = [];
                        for (var i = 0; i < object.sampleIds.length; ++i)
                            message.sampleIds[i] = String(object.sampleIds[i]);
                    }
                    if (object.sampleNames) {
                        if (!Array.isArray(object.sampleNames))
                            throw TypeError(".com.example.dto.Group.sampleNames: array expected");
                        message.sampleNames = [];
                        for (var i = 0; i < object.sampleNames.length; ++i)
                            message.sampleNames[i] = String(object.sampleNames[i]);
                    }
                    if (object.hexColour != null)
                        message.hexColour = String(object.hexColour);
                    return message;
                };

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Group
                 * @static
                 * @param {com.example.dto.Group} message Group
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Group.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.sampleIds = [];
                        object.sampleNames = [];
                    }
                    if (options.defaults) {
                        object.groupName = "";
                        object.hexColour = "";
                    }
                    if (message.groupName != null && message.hasOwnProperty("groupName"))
                        object.groupName = message.groupName;
                    if (message.sampleIds && message.sampleIds.length) {
                        object.sampleIds = [];
                        for (var j = 0; j < message.sampleIds.length; ++j)
                            object.sampleIds[j] = message.sampleIds[j];
                    }
                    if (message.sampleNames && message.sampleNames.length) {
                        object.sampleNames = [];
                        for (var j = 0; j < message.sampleNames.length; ++j)
                            object.sampleNames[j] = message.sampleNames[j];
                    }
                    if (message.hexColour != null && message.hasOwnProperty("hexColour"))
                        object.hexColour = message.hexColour;
                    return object;
                };

                /**
                 * Converts this Group to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Group
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Group.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Group;
            })();

            dto.Sample = (function() {

                /**
                 * Properties of a Sample.
                 * @memberof com.example.dto
                 * @interface ISample
                 * @property {string|null} [id] Sample id
                 * @property {string|null} [name] Sample name
                 * @property {string|null} [instrument] Sample instrument
                 * @property {string|null} [enzyme] Sample enzyme
                 * @property {com.example.dto.ActivationMethod|null} [activationMethod] Sample activationMethod
                 * @property {Array.<com.example.dto.Sample.IFraction>|null} [fractions] Sample fractions
                 */

                /**
                 * Constructs a new Sample.
                 * @memberof com.example.dto
                 * @classdesc Represents a Sample.
                 * @implements ISample
                 * @constructor
                 * @param {com.example.dto.ISample=} [properties] Properties to set
                 */
                function Sample(properties) {
                    this.fractions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Sample id.
                 * @member {string} id
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.id = "";

                /**
                 * Sample name.
                 * @member {string} name
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.name = "";

                /**
                 * Sample instrument.
                 * @member {string} instrument
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.instrument = "";

                /**
                 * Sample enzyme.
                 * @member {string} enzyme
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.enzyme = "";

                /**
                 * Sample activationMethod.
                 * @member {com.example.dto.ActivationMethod} activationMethod
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.activationMethod = 0;

                /**
                 * Sample fractions.
                 * @member {Array.<com.example.dto.Sample.IFraction>} fractions
                 * @memberof com.example.dto.Sample
                 * @instance
                 */
                Sample.prototype.fractions = $util.emptyArray;

                /**
                 * Creates a new Sample instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {com.example.dto.ISample=} [properties] Properties to set
                 * @returns {com.example.dto.Sample} Sample instance
                 */
                Sample.create = function create(properties) {
                    return new Sample(properties);
                };

                /**
                 * Encodes the specified Sample message. Does not implicitly {@link com.example.dto.Sample.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {com.example.dto.ISample} message Sample message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sample.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.instrument);
                    if (message.enzyme != null && message.hasOwnProperty("enzyme"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.enzyme);
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.activationMethod);
                    if (message.fractions != null && message.fractions.length)
                        for (var i = 0; i < message.fractions.length; ++i)
                            $root.com.example.dto.Sample.Fraction.encode(message.fractions[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Sample message, length delimited. Does not implicitly {@link com.example.dto.Sample.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {com.example.dto.ISample} message Sample message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sample.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Sample message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Sample} Sample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sample.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Sample();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.instrument = reader.string();
                            break;
                        case 4:
                            message.enzyme = reader.string();
                            break;
                        case 5:
                            message.activationMethod = reader.int32();
                            break;
                        case 6:
                            if (!(message.fractions && message.fractions.length))
                                message.fractions = [];
                            message.fractions.push($root.com.example.dto.Sample.Fraction.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Sample message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Sample} Sample
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sample.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Sample message.
                 * @function verify
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Sample.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        if (!$util.isString(message.instrument))
                            return "instrument: string expected";
                    if (message.enzyme != null && message.hasOwnProperty("enzyme"))
                        if (!$util.isString(message.enzyme))
                            return "enzyme: string expected";
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        switch (message.activationMethod) {
                        default:
                            return "activationMethod: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    if (message.fractions != null && message.hasOwnProperty("fractions")) {
                        if (!Array.isArray(message.fractions))
                            return "fractions: array expected";
                        for (var i = 0; i < message.fractions.length; ++i) {
                            var error = $root.com.example.dto.Sample.Fraction.verify(message.fractions[i]);
                            if (error)
                                return "fractions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Sample message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Sample} Sample
                 */
                Sample.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Sample)
                        return object;
                    var message = new $root.com.example.dto.Sample();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.instrument != null)
                        message.instrument = String(object.instrument);
                    if (object.enzyme != null)
                        message.enzyme = String(object.enzyme);
                    switch (object.activationMethod) {
                    case "UNDEFINED":
                    case 0:
                        message.activationMethod = 0;
                        break;
                    case "CID":
                    case 1:
                        message.activationMethod = 1;
                        break;
                    case "HCD":
                    case 2:
                        message.activationMethod = 2;
                        break;
                    case "ECD":
                    case 3:
                        message.activationMethod = 3;
                        break;
                    case "MIX":
                    case 4:
                        message.activationMethod = 4;
                        break;
                    case "PQD":
                    case 5:
                        message.activationMethod = 5;
                        break;
                    case "IRMPD":
                    case 6:
                        message.activationMethod = 6;
                        break;
                    }
                    if (object.fractions) {
                        if (!Array.isArray(object.fractions))
                            throw TypeError(".com.example.dto.Sample.fractions: array expected");
                        message.fractions = [];
                        for (var i = 0; i < object.fractions.length; ++i) {
                            if (typeof object.fractions[i] !== "object")
                                throw TypeError(".com.example.dto.Sample.fractions: object expected");
                            message.fractions[i] = $root.com.example.dto.Sample.Fraction.fromObject(object.fractions[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Sample message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Sample
                 * @static
                 * @param {com.example.dto.Sample} message Sample
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Sample.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.fractions = [];
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.instrument = "";
                        object.enzyme = "";
                        object.activationMethod = options.enums === String ? "UNDEFINED" : 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.instrument != null && message.hasOwnProperty("instrument"))
                        object.instrument = message.instrument;
                    if (message.enzyme != null && message.hasOwnProperty("enzyme"))
                        object.enzyme = message.enzyme;
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        object.activationMethod = options.enums === String ? $root.com.example.dto.ActivationMethod[message.activationMethod] : message.activationMethod;
                    if (message.fractions && message.fractions.length) {
                        object.fractions = [];
                        for (var j = 0; j < message.fractions.length; ++j)
                            object.fractions[j] = $root.com.example.dto.Sample.Fraction.toObject(message.fractions[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Sample to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Sample
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Sample.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Sample.Fraction = (function() {

                    /**
                     * Properties of a Fraction.
                     * @memberof com.example.dto.Sample
                     * @interface IFraction
                     * @property {string|null} [id] Fraction id
                     * @property {string|null} [sourceFile] Fraction sourceFile
                     */

                    /**
                     * Constructs a new Fraction.
                     * @memberof com.example.dto.Sample
                     * @classdesc Represents a Fraction.
                     * @implements IFraction
                     * @constructor
                     * @param {com.example.dto.Sample.IFraction=} [properties] Properties to set
                     */
                    function Fraction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Fraction id.
                     * @member {string} id
                     * @memberof com.example.dto.Sample.Fraction
                     * @instance
                     */
                    Fraction.prototype.id = "";

                    /**
                     * Fraction sourceFile.
                     * @member {string} sourceFile
                     * @memberof com.example.dto.Sample.Fraction
                     * @instance
                     */
                    Fraction.prototype.sourceFile = "";

                    /**
                     * Creates a new Fraction instance using the specified properties.
                     * @function create
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {com.example.dto.Sample.IFraction=} [properties] Properties to set
                     * @returns {com.example.dto.Sample.Fraction} Fraction instance
                     */
                    Fraction.create = function create(properties) {
                        return new Fraction(properties);
                    };

                    /**
                     * Encodes the specified Fraction message. Does not implicitly {@link com.example.dto.Sample.Fraction.verify|verify} messages.
                     * @function encode
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {com.example.dto.Sample.IFraction} message Fraction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Fraction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        return writer;
                    };

                    /**
                     * Encodes the specified Fraction message, length delimited. Does not implicitly {@link com.example.dto.Sample.Fraction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {com.example.dto.Sample.IFraction} message Fraction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Fraction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Fraction message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.example.dto.Sample.Fraction} Fraction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Fraction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Sample.Fraction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Fraction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.example.dto.Sample.Fraction} Fraction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Fraction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Fraction message.
                     * @function verify
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Fraction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        return null;
                    };

                    /**
                     * Creates a Fraction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.example.dto.Sample.Fraction} Fraction
                     */
                    Fraction.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.example.dto.Sample.Fraction)
                            return object;
                        var message = new $root.com.example.dto.Sample.Fraction();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Fraction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.example.dto.Sample.Fraction
                     * @static
                     * @param {com.example.dto.Sample.Fraction} message Fraction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Fraction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.sourceFile = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        return object;
                    };

                    /**
                     * Converts this Fraction to JSON.
                     * @function toJSON
                     * @memberof com.example.dto.Sample.Fraction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Fraction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Fraction;
                })();

                return Sample;
            })();

            /**
             * ActivationMethod enum.
             * @name com.example.dto.ActivationMethod
             * @enum {string}
             * @property {number} UNDEFINED=0 UNDEFINED value
             * @property {number} CID=1 CID value
             * @property {number} HCD=2 HCD value
             * @property {number} ECD=3 ECD value
             * @property {number} MIX=4 MIX value
             * @property {number} PQD=5 PQD value
             * @property {number} IRMPD=6 IRMPD value
             */
            dto.ActivationMethod = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNDEFINED"] = 0;
                values[valuesById[1] = "CID"] = 1;
                values[valuesById[2] = "HCD"] = 2;
                values[valuesById[3] = "ECD"] = 3;
                values[valuesById[4] = "MIX"] = 4;
                values[valuesById[5] = "PQD"] = 5;
                values[valuesById[6] = "IRMPD"] = 6;
                return values;
            })();

            dto.Dendrogram = (function() {

                /**
                 * Properties of a Dendrogram.
                 * @memberof com.example.dto
                 * @interface IDendrogram
                 * @property {com.example.dto.IDendrogram|null} [left] Dendrogram left
                 * @property {com.example.dto.IDendrogram|null} [right] Dendrogram right
                 * @property {com.example.dto.IHeatMapRow|null} [row] Dendrogram row
                 */

                /**
                 * Constructs a new Dendrogram.
                 * @memberof com.example.dto
                 * @classdesc Represents a Dendrogram.
                 * @implements IDendrogram
                 * @constructor
                 * @param {com.example.dto.IDendrogram=} [properties] Properties to set
                 */
                function Dendrogram(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Dendrogram left.
                 * @member {com.example.dto.IDendrogram|null|undefined} left
                 * @memberof com.example.dto.Dendrogram
                 * @instance
                 */
                Dendrogram.prototype.left = null;

                /**
                 * Dendrogram right.
                 * @member {com.example.dto.IDendrogram|null|undefined} right
                 * @memberof com.example.dto.Dendrogram
                 * @instance
                 */
                Dendrogram.prototype.right = null;

                /**
                 * Dendrogram row.
                 * @member {com.example.dto.IHeatMapRow|null|undefined} row
                 * @memberof com.example.dto.Dendrogram
                 * @instance
                 */
                Dendrogram.prototype.row = null;

                /**
                 * Creates a new Dendrogram instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {com.example.dto.IDendrogram=} [properties] Properties to set
                 * @returns {com.example.dto.Dendrogram} Dendrogram instance
                 */
                Dendrogram.create = function create(properties) {
                    return new Dendrogram(properties);
                };

                /**
                 * Encodes the specified Dendrogram message. Does not implicitly {@link com.example.dto.Dendrogram.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {com.example.dto.IDendrogram} message Dendrogram message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Dendrogram.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.left != null && message.hasOwnProperty("left"))
                        $root.com.example.dto.Dendrogram.encode(message.left, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.right != null && message.hasOwnProperty("right"))
                        $root.com.example.dto.Dendrogram.encode(message.right, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.row != null && message.hasOwnProperty("row"))
                        $root.com.example.dto.HeatMapRow.encode(message.row, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Dendrogram message, length delimited. Does not implicitly {@link com.example.dto.Dendrogram.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {com.example.dto.IDendrogram} message Dendrogram message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Dendrogram.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Dendrogram message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Dendrogram} Dendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Dendrogram.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Dendrogram();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.left = $root.com.example.dto.Dendrogram.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.right = $root.com.example.dto.Dendrogram.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.row = $root.com.example.dto.HeatMapRow.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Dendrogram message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Dendrogram} Dendrogram
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Dendrogram.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Dendrogram message.
                 * @function verify
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Dendrogram.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.left != null && message.hasOwnProperty("left")) {
                        var error = $root.com.example.dto.Dendrogram.verify(message.left);
                        if (error)
                            return "left." + error;
                    }
                    if (message.right != null && message.hasOwnProperty("right")) {
                        var error = $root.com.example.dto.Dendrogram.verify(message.right);
                        if (error)
                            return "right." + error;
                    }
                    if (message.row != null && message.hasOwnProperty("row")) {
                        var error = $root.com.example.dto.HeatMapRow.verify(message.row);
                        if (error)
                            return "row." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Dendrogram message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Dendrogram} Dendrogram
                 */
                Dendrogram.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Dendrogram)
                        return object;
                    var message = new $root.com.example.dto.Dendrogram();
                    if (object.left != null) {
                        if (typeof object.left !== "object")
                            throw TypeError(".com.example.dto.Dendrogram.left: object expected");
                        message.left = $root.com.example.dto.Dendrogram.fromObject(object.left);
                    }
                    if (object.right != null) {
                        if (typeof object.right !== "object")
                            throw TypeError(".com.example.dto.Dendrogram.right: object expected");
                        message.right = $root.com.example.dto.Dendrogram.fromObject(object.right);
                    }
                    if (object.row != null) {
                        if (typeof object.row !== "object")
                            throw TypeError(".com.example.dto.Dendrogram.row: object expected");
                        message.row = $root.com.example.dto.HeatMapRow.fromObject(object.row);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Dendrogram message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Dendrogram
                 * @static
                 * @param {com.example.dto.Dendrogram} message Dendrogram
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Dendrogram.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.left = null;
                        object.right = null;
                        object.row = null;
                    }
                    if (message.left != null && message.hasOwnProperty("left"))
                        object.left = $root.com.example.dto.Dendrogram.toObject(message.left, options);
                    if (message.right != null && message.hasOwnProperty("right"))
                        object.right = $root.com.example.dto.Dendrogram.toObject(message.right, options);
                    if (message.row != null && message.hasOwnProperty("row"))
                        object.row = $root.com.example.dto.HeatMapRow.toObject(message.row, options);
                    return object;
                };

                /**
                 * Converts this Dendrogram to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Dendrogram
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Dendrogram.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Dendrogram;
            })();

            dto.HeatMapRow = (function() {

                /**
                 * Properties of a HeatMapRow.
                 * @memberof com.example.dto
                 * @interface IHeatMapRow
                 * @property {string|null} [accession] HeatMapRow accession
                 * @property {Array.<number>|null} [sampleAreas] HeatMapRow sampleAreas
                 * @property {Array.<com.example.dto.IOptionalFloat>|null} [sampleRatios] HeatMapRow sampleRatios
                 * @property {Array.<number>|null} [colour] HeatMapRow colour
                 */

                /**
                 * Constructs a new HeatMapRow.
                 * @memberof com.example.dto
                 * @classdesc Represents a HeatMapRow.
                 * @implements IHeatMapRow
                 * @constructor
                 * @param {com.example.dto.IHeatMapRow=} [properties] Properties to set
                 */
                function HeatMapRow(properties) {
                    this.sampleAreas = [];
                    this.sampleRatios = [];
                    this.colour = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HeatMapRow accession.
                 * @member {string} accession
                 * @memberof com.example.dto.HeatMapRow
                 * @instance
                 */
                HeatMapRow.prototype.accession = "";

                /**
                 * HeatMapRow sampleAreas.
                 * @member {Array.<number>} sampleAreas
                 * @memberof com.example.dto.HeatMapRow
                 * @instance
                 */
                HeatMapRow.prototype.sampleAreas = $util.emptyArray;

                /**
                 * HeatMapRow sampleRatios.
                 * @member {Array.<com.example.dto.IOptionalFloat>} sampleRatios
                 * @memberof com.example.dto.HeatMapRow
                 * @instance
                 */
                HeatMapRow.prototype.sampleRatios = $util.emptyArray;

                /**
                 * HeatMapRow colour.
                 * @member {Array.<number>} colour
                 * @memberof com.example.dto.HeatMapRow
                 * @instance
                 */
                HeatMapRow.prototype.colour = $util.emptyArray;

                /**
                 * Creates a new HeatMapRow instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {com.example.dto.IHeatMapRow=} [properties] Properties to set
                 * @returns {com.example.dto.HeatMapRow} HeatMapRow instance
                 */
                HeatMapRow.create = function create(properties) {
                    return new HeatMapRow(properties);
                };

                /**
                 * Encodes the specified HeatMapRow message. Does not implicitly {@link com.example.dto.HeatMapRow.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {com.example.dto.IHeatMapRow} message HeatMapRow message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeatMapRow.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.accession);
                    if (message.sampleAreas != null && message.sampleAreas.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.sampleAreas.length; ++i)
                            writer.float(message.sampleAreas[i]);
                        writer.ldelim();
                    }
                    if (message.sampleRatios != null && message.sampleRatios.length)
                        for (var i = 0; i < message.sampleRatios.length; ++i)
                            $root.com.example.dto.OptionalFloat.encode(message.sampleRatios[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.colour != null && message.colour.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.colour.length; ++i)
                            writer.float(message.colour[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified HeatMapRow message, length delimited. Does not implicitly {@link com.example.dto.HeatMapRow.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {com.example.dto.IHeatMapRow} message HeatMapRow message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeatMapRow.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeatMapRow message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.HeatMapRow} HeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeatMapRow.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.HeatMapRow();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.accession = reader.string();
                            break;
                        case 2:
                            if (!(message.sampleAreas && message.sampleAreas.length))
                                message.sampleAreas = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.sampleAreas.push(reader.float());
                            } else
                                message.sampleAreas.push(reader.float());
                            break;
                        case 3:
                            if (!(message.sampleRatios && message.sampleRatios.length))
                                message.sampleRatios = [];
                            message.sampleRatios.push($root.com.example.dto.OptionalFloat.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.colour && message.colour.length))
                                message.colour = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.colour.push(reader.float());
                            } else
                                message.colour.push(reader.float());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeatMapRow message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.HeatMapRow} HeatMapRow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeatMapRow.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeatMapRow message.
                 * @function verify
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeatMapRow.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        if (!$util.isString(message.accession))
                            return "accession: string expected";
                    if (message.sampleAreas != null && message.hasOwnProperty("sampleAreas")) {
                        if (!Array.isArray(message.sampleAreas))
                            return "sampleAreas: array expected";
                        for (var i = 0; i < message.sampleAreas.length; ++i)
                            if (typeof message.sampleAreas[i] !== "number")
                                return "sampleAreas: number[] expected";
                    }
                    if (message.sampleRatios != null && message.hasOwnProperty("sampleRatios")) {
                        if (!Array.isArray(message.sampleRatios))
                            return "sampleRatios: array expected";
                        for (var i = 0; i < message.sampleRatios.length; ++i) {
                            var error = $root.com.example.dto.OptionalFloat.verify(message.sampleRatios[i]);
                            if (error)
                                return "sampleRatios." + error;
                        }
                    }
                    if (message.colour != null && message.hasOwnProperty("colour")) {
                        if (!Array.isArray(message.colour))
                            return "colour: array expected";
                        for (var i = 0; i < message.colour.length; ++i)
                            if (typeof message.colour[i] !== "number")
                                return "colour: number[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a HeatMapRow message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.HeatMapRow} HeatMapRow
                 */
                HeatMapRow.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.HeatMapRow)
                        return object;
                    var message = new $root.com.example.dto.HeatMapRow();
                    if (object.accession != null)
                        message.accession = String(object.accession);
                    if (object.sampleAreas) {
                        if (!Array.isArray(object.sampleAreas))
                            throw TypeError(".com.example.dto.HeatMapRow.sampleAreas: array expected");
                        message.sampleAreas = [];
                        for (var i = 0; i < object.sampleAreas.length; ++i)
                            message.sampleAreas[i] = Number(object.sampleAreas[i]);
                    }
                    if (object.sampleRatios) {
                        if (!Array.isArray(object.sampleRatios))
                            throw TypeError(".com.example.dto.HeatMapRow.sampleRatios: array expected");
                        message.sampleRatios = [];
                        for (var i = 0; i < object.sampleRatios.length; ++i) {
                            if (typeof object.sampleRatios[i] !== "object")
                                throw TypeError(".com.example.dto.HeatMapRow.sampleRatios: object expected");
                            message.sampleRatios[i] = $root.com.example.dto.OptionalFloat.fromObject(object.sampleRatios[i]);
                        }
                    }
                    if (object.colour) {
                        if (!Array.isArray(object.colour))
                            throw TypeError(".com.example.dto.HeatMapRow.colour: array expected");
                        message.colour = [];
                        for (var i = 0; i < object.colour.length; ++i)
                            message.colour[i] = Number(object.colour[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a HeatMapRow message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.HeatMapRow
                 * @static
                 * @param {com.example.dto.HeatMapRow} message HeatMapRow
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HeatMapRow.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.sampleAreas = [];
                        object.sampleRatios = [];
                        object.colour = [];
                    }
                    if (options.defaults)
                        object.accession = "";
                    if (message.accession != null && message.hasOwnProperty("accession"))
                        object.accession = message.accession;
                    if (message.sampleAreas && message.sampleAreas.length) {
                        object.sampleAreas = [];
                        for (var j = 0; j < message.sampleAreas.length; ++j)
                            object.sampleAreas[j] = options.json && !isFinite(message.sampleAreas[j]) ? String(message.sampleAreas[j]) : message.sampleAreas[j];
                    }
                    if (message.sampleRatios && message.sampleRatios.length) {
                        object.sampleRatios = [];
                        for (var j = 0; j < message.sampleRatios.length; ++j)
                            object.sampleRatios[j] = $root.com.example.dto.OptionalFloat.toObject(message.sampleRatios[j], options);
                    }
                    if (message.colour && message.colour.length) {
                        object.colour = [];
                        for (var j = 0; j < message.colour.length; ++j)
                            object.colour[j] = options.json && !isFinite(message.colour[j]) ? String(message.colour[j]) : message.colour[j];
                    }
                    return object;
                };

                /**
                 * Converts this HeatMapRow to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.HeatMapRow
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HeatMapRow.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HeatMapRow;
            })();

            dto.OptionalFloat = (function() {

                /**
                 * Properties of an OptionalFloat.
                 * @memberof com.example.dto
                 * @interface IOptionalFloat
                 * @property {boolean|null} [isPresent] OptionalFloat isPresent
                 * @property {number|null} [value] OptionalFloat value
                 */

                /**
                 * Constructs a new OptionalFloat.
                 * @memberof com.example.dto
                 * @classdesc Represents an OptionalFloat.
                 * @implements IOptionalFloat
                 * @constructor
                 * @param {com.example.dto.IOptionalFloat=} [properties] Properties to set
                 */
                function OptionalFloat(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OptionalFloat isPresent.
                 * @member {boolean} isPresent
                 * @memberof com.example.dto.OptionalFloat
                 * @instance
                 */
                OptionalFloat.prototype.isPresent = false;

                /**
                 * OptionalFloat value.
                 * @member {number} value
                 * @memberof com.example.dto.OptionalFloat
                 * @instance
                 */
                OptionalFloat.prototype.value = 0;

                /**
                 * Creates a new OptionalFloat instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {com.example.dto.IOptionalFloat=} [properties] Properties to set
                 * @returns {com.example.dto.OptionalFloat} OptionalFloat instance
                 */
                OptionalFloat.create = function create(properties) {
                    return new OptionalFloat(properties);
                };

                /**
                 * Encodes the specified OptionalFloat message. Does not implicitly {@link com.example.dto.OptionalFloat.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {com.example.dto.IOptionalFloat} message OptionalFloat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalFloat.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.isPresent != null && message.hasOwnProperty("isPresent"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPresent);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified OptionalFloat message, length delimited. Does not implicitly {@link com.example.dto.OptionalFloat.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {com.example.dto.IOptionalFloat} message OptionalFloat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalFloat.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OptionalFloat message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.OptionalFloat} OptionalFloat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalFloat.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.OptionalFloat();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.isPresent = reader.bool();
                            break;
                        case 2:
                            message.value = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OptionalFloat message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.OptionalFloat} OptionalFloat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalFloat.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OptionalFloat message.
                 * @function verify
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OptionalFloat.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.isPresent != null && message.hasOwnProperty("isPresent"))
                        if (typeof message.isPresent !== "boolean")
                            return "isPresent: boolean expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };

                /**
                 * Creates an OptionalFloat message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.OptionalFloat} OptionalFloat
                 */
                OptionalFloat.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.OptionalFloat)
                        return object;
                    var message = new $root.com.example.dto.OptionalFloat();
                    if (object.isPresent != null)
                        message.isPresent = Boolean(object.isPresent);
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };

                /**
                 * Creates a plain object from an OptionalFloat message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.OptionalFloat
                 * @static
                 * @param {com.example.dto.OptionalFloat} message OptionalFloat
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OptionalFloat.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.isPresent = false;
                        object.value = 0;
                    }
                    if (message.isPresent != null && message.hasOwnProperty("isPresent"))
                        object.isPresent = message.isPresent;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };

                /**
                 * Converts this OptionalFloat to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.OptionalFloat
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OptionalFloat.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return OptionalFloat;
            })();

            dto.ScanDenovoCandidate = (function() {

                /**
                 * Properties of a ScanDenovoCandidate.
                 * @memberof com.example.dto
                 * @interface IScanDenovoCandidate
                 * @property {string|null} [fractionId] ScanDenovoCandidate fractionId
                 * @property {number|null} [scannum] ScanDenovoCandidate scannum
                 * @property {number|null} [mz] ScanDenovoCandidate mz
                 * @property {number|null} [z] ScanDenovoCandidate z
                 * @property {number|Long|null} [retentionTime] ScanDenovoCandidate retentionTime
                 * @property {Array.<com.example.dto.IDenovoCandidate>|null} [denovoCandidate] ScanDenovoCandidate denovoCandidate
                 * @property {com.example.dto.ActivationMethod|null} [activationMethod] ScanDenovoCandidate activationMethod
                 */

                /**
                 * Constructs a new ScanDenovoCandidate.
                 * @memberof com.example.dto
                 * @classdesc Represents a ScanDenovoCandidate.
                 * @implements IScanDenovoCandidate
                 * @constructor
                 * @param {com.example.dto.IScanDenovoCandidate=} [properties] Properties to set
                 */
                function ScanDenovoCandidate(properties) {
                    this.denovoCandidate = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ScanDenovoCandidate fractionId.
                 * @member {string} fractionId
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.fractionId = "";

                /**
                 * ScanDenovoCandidate scannum.
                 * @member {number} scannum
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.scannum = 0;

                /**
                 * ScanDenovoCandidate mz.
                 * @member {number} mz
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.mz = 0;

                /**
                 * ScanDenovoCandidate z.
                 * @member {number} z
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.z = 0;

                /**
                 * ScanDenovoCandidate retentionTime.
                 * @member {number|Long} retentionTime
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.retentionTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * ScanDenovoCandidate denovoCandidate.
                 * @member {Array.<com.example.dto.IDenovoCandidate>} denovoCandidate
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.denovoCandidate = $util.emptyArray;

                /**
                 * ScanDenovoCandidate activationMethod.
                 * @member {com.example.dto.ActivationMethod} activationMethod
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 */
                ScanDenovoCandidate.prototype.activationMethod = 0;

                /**
                 * Creates a new ScanDenovoCandidate instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {com.example.dto.IScanDenovoCandidate=} [properties] Properties to set
                 * @returns {com.example.dto.ScanDenovoCandidate} ScanDenovoCandidate instance
                 */
                ScanDenovoCandidate.create = function create(properties) {
                    return new ScanDenovoCandidate(properties);
                };

                /**
                 * Encodes the specified ScanDenovoCandidate message. Does not implicitly {@link com.example.dto.ScanDenovoCandidate.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {com.example.dto.IScanDenovoCandidate} message ScanDenovoCandidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ScanDenovoCandidate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.scannum != null && message.hasOwnProperty("scannum"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.scannum);
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.mz);
                    if (message.z != null && message.hasOwnProperty("z"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.z);
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.retentionTime);
                    if (message.denovoCandidate != null && message.denovoCandidate.length)
                        for (var i = 0; i < message.denovoCandidate.length; ++i)
                            $root.com.example.dto.DenovoCandidate.encode(message.denovoCandidate[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.fractionId != null && message.hasOwnProperty("fractionId"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.fractionId);
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.activationMethod);
                    return writer;
                };

                /**
                 * Encodes the specified ScanDenovoCandidate message, length delimited. Does not implicitly {@link com.example.dto.ScanDenovoCandidate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {com.example.dto.IScanDenovoCandidate} message ScanDenovoCandidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ScanDenovoCandidate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ScanDenovoCandidate message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.ScanDenovoCandidate} ScanDenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ScanDenovoCandidate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.ScanDenovoCandidate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 6:
                            message.fractionId = reader.string();
                            break;
                        case 1:
                            message.scannum = reader.uint32();
                            break;
                        case 2:
                            message.mz = reader.float();
                            break;
                        case 3:
                            message.z = reader.uint32();
                            break;
                        case 4:
                            message.retentionTime = reader.uint64();
                            break;
                        case 5:
                            if (!(message.denovoCandidate && message.denovoCandidate.length))
                                message.denovoCandidate = [];
                            message.denovoCandidate.push($root.com.example.dto.DenovoCandidate.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.activationMethod = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ScanDenovoCandidate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.ScanDenovoCandidate} ScanDenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ScanDenovoCandidate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ScanDenovoCandidate message.
                 * @function verify
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ScanDenovoCandidate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.fractionId != null && message.hasOwnProperty("fractionId"))
                        if (!$util.isString(message.fractionId))
                            return "fractionId: string expected";
                    if (message.scannum != null && message.hasOwnProperty("scannum"))
                        if (!$util.isInteger(message.scannum))
                            return "scannum: integer expected";
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        if (typeof message.mz !== "number")
                            return "mz: number expected";
                    if (message.z != null && message.hasOwnProperty("z"))
                        if (!$util.isInteger(message.z))
                            return "z: integer expected";
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (!$util.isInteger(message.retentionTime) && !(message.retentionTime && $util.isInteger(message.retentionTime.low) && $util.isInteger(message.retentionTime.high)))
                            return "retentionTime: integer|Long expected";
                    if (message.denovoCandidate != null && message.hasOwnProperty("denovoCandidate")) {
                        if (!Array.isArray(message.denovoCandidate))
                            return "denovoCandidate: array expected";
                        for (var i = 0; i < message.denovoCandidate.length; ++i) {
                            var error = $root.com.example.dto.DenovoCandidate.verify(message.denovoCandidate[i]);
                            if (error)
                                return "denovoCandidate." + error;
                        }
                    }
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        switch (message.activationMethod) {
                        default:
                            return "activationMethod: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a ScanDenovoCandidate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.ScanDenovoCandidate} ScanDenovoCandidate
                 */
                ScanDenovoCandidate.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.ScanDenovoCandidate)
                        return object;
                    var message = new $root.com.example.dto.ScanDenovoCandidate();
                    if (object.fractionId != null)
                        message.fractionId = String(object.fractionId);
                    if (object.scannum != null)
                        message.scannum = object.scannum >>> 0;
                    if (object.mz != null)
                        message.mz = Number(object.mz);
                    if (object.z != null)
                        message.z = object.z >>> 0;
                    if (object.retentionTime != null)
                        if ($util.Long)
                            (message.retentionTime = $util.Long.fromValue(object.retentionTime)).unsigned = true;
                        else if (typeof object.retentionTime === "string")
                            message.retentionTime = parseInt(object.retentionTime, 10);
                        else if (typeof object.retentionTime === "number")
                            message.retentionTime = object.retentionTime;
                        else if (typeof object.retentionTime === "object")
                            message.retentionTime = new $util.LongBits(object.retentionTime.low >>> 0, object.retentionTime.high >>> 0).toNumber(true);
                    if (object.denovoCandidate) {
                        if (!Array.isArray(object.denovoCandidate))
                            throw TypeError(".com.example.dto.ScanDenovoCandidate.denovoCandidate: array expected");
                        message.denovoCandidate = [];
                        for (var i = 0; i < object.denovoCandidate.length; ++i) {
                            if (typeof object.denovoCandidate[i] !== "object")
                                throw TypeError(".com.example.dto.ScanDenovoCandidate.denovoCandidate: object expected");
                            message.denovoCandidate[i] = $root.com.example.dto.DenovoCandidate.fromObject(object.denovoCandidate[i]);
                        }
                    }
                    switch (object.activationMethod) {
                    case "UNDEFINED":
                    case 0:
                        message.activationMethod = 0;
                        break;
                    case "CID":
                    case 1:
                        message.activationMethod = 1;
                        break;
                    case "HCD":
                    case 2:
                        message.activationMethod = 2;
                        break;
                    case "ECD":
                    case 3:
                        message.activationMethod = 3;
                        break;
                    case "MIX":
                    case 4:
                        message.activationMethod = 4;
                        break;
                    case "PQD":
                    case 5:
                        message.activationMethod = 5;
                        break;
                    case "IRMPD":
                    case 6:
                        message.activationMethod = 6;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ScanDenovoCandidate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @static
                 * @param {com.example.dto.ScanDenovoCandidate} message ScanDenovoCandidate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ScanDenovoCandidate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.denovoCandidate = [];
                    if (options.defaults) {
                        object.scannum = 0;
                        object.mz = 0;
                        object.z = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.retentionTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.retentionTime = options.longs === String ? "0" : 0;
                        object.fractionId = "";
                        object.activationMethod = options.enums === String ? "UNDEFINED" : 0;
                    }
                    if (message.scannum != null && message.hasOwnProperty("scannum"))
                        object.scannum = message.scannum;
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        object.mz = options.json && !isFinite(message.mz) ? String(message.mz) : message.mz;
                    if (message.z != null && message.hasOwnProperty("z"))
                        object.z = message.z;
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (typeof message.retentionTime === "number")
                            object.retentionTime = options.longs === String ? String(message.retentionTime) : message.retentionTime;
                        else
                            object.retentionTime = options.longs === String ? $util.Long.prototype.toString.call(message.retentionTime) : options.longs === Number ? new $util.LongBits(message.retentionTime.low >>> 0, message.retentionTime.high >>> 0).toNumber(true) : message.retentionTime;
                    if (message.denovoCandidate && message.denovoCandidate.length) {
                        object.denovoCandidate = [];
                        for (var j = 0; j < message.denovoCandidate.length; ++j)
                            object.denovoCandidate[j] = $root.com.example.dto.DenovoCandidate.toObject(message.denovoCandidate[j], options);
                    }
                    if (message.fractionId != null && message.hasOwnProperty("fractionId"))
                        object.fractionId = message.fractionId;
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        object.activationMethod = options.enums === String ? $root.com.example.dto.ActivationMethod[message.activationMethod] : message.activationMethod;
                    return object;
                };

                /**
                 * Converts this ScanDenovoCandidate to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.ScanDenovoCandidate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ScanDenovoCandidate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ScanDenovoCandidate;
            })();

            dto.DenovoCandidate = (function() {

                /**
                 * Properties of a DenovoCandidate.
                 * @memberof com.example.dto
                 * @interface IDenovoCandidate
                 * @property {string|null} [sequence] DenovoCandidate sequence
                 * @property {number|null} [mass] DenovoCandidate mass
                 * @property {number|null} [length] DenovoCandidate length
                 * @property {number|null} [area] DenovoCandidate area
                 * @property {number|null} [ppm] DenovoCandidate ppm
                 * @property {number|null} [alc] DenovoCandidate alc
                 * @property {Array.<number>|null} [positionConfidence] DenovoCandidate positionConfidence
                 * @property {Array.<com.example.dto.IAbbreviateModification>|null} [modifications] DenovoCandidate modifications
                 * @property {number|null} [maxIntensity] DenovoCandidate maxIntensity
                 */

                /**
                 * Constructs a new DenovoCandidate.
                 * @memberof com.example.dto
                 * @classdesc Represents a DenovoCandidate.
                 * @implements IDenovoCandidate
                 * @constructor
                 * @param {com.example.dto.IDenovoCandidate=} [properties] Properties to set
                 */
                function DenovoCandidate(properties) {
                    this.positionConfidence = [];
                    this.modifications = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DenovoCandidate sequence.
                 * @member {string} sequence
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.sequence = "";

                /**
                 * DenovoCandidate mass.
                 * @member {number} mass
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.mass = 0;

                /**
                 * DenovoCandidate length.
                 * @member {number} length
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.length = 0;

                /**
                 * DenovoCandidate area.
                 * @member {number} area
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.area = 0;

                /**
                 * DenovoCandidate ppm.
                 * @member {number} ppm
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.ppm = 0;

                /**
                 * DenovoCandidate alc.
                 * @member {number} alc
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.alc = 0;

                /**
                 * DenovoCandidate positionConfidence.
                 * @member {Array.<number>} positionConfidence
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.positionConfidence = $util.emptyArray;

                /**
                 * DenovoCandidate modifications.
                 * @member {Array.<com.example.dto.IAbbreviateModification>} modifications
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.modifications = $util.emptyArray;

                /**
                 * DenovoCandidate maxIntensity.
                 * @member {number} maxIntensity
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 */
                DenovoCandidate.prototype.maxIntensity = 0;

                /**
                 * Creates a new DenovoCandidate instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {com.example.dto.IDenovoCandidate=} [properties] Properties to set
                 * @returns {com.example.dto.DenovoCandidate} DenovoCandidate instance
                 */
                DenovoCandidate.create = function create(properties) {
                    return new DenovoCandidate(properties);
                };

                /**
                 * Encodes the specified DenovoCandidate message. Does not implicitly {@link com.example.dto.DenovoCandidate.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {com.example.dto.IDenovoCandidate} message DenovoCandidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DenovoCandidate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sequence);
                    if (message.mass != null && message.hasOwnProperty("mass"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.mass);
                    if (message.length != null && message.hasOwnProperty("length"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.length);
                    if (message.area != null && message.hasOwnProperty("area"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.area);
                    if (message.ppm != null && message.hasOwnProperty("ppm"))
                        writer.uint32(/* id 5, wireType 5 =*/45).float(message.ppm);
                    if (message.alc != null && message.hasOwnProperty("alc"))
                        writer.uint32(/* id 6, wireType 5 =*/53).float(message.alc);
                    if (message.positionConfidence != null && message.positionConfidence.length) {
                        writer.uint32(/* id 7, wireType 2 =*/58).fork();
                        for (var i = 0; i < message.positionConfidence.length; ++i)
                            writer.float(message.positionConfidence[i]);
                        writer.ldelim();
                    }
                    if (message.modifications != null && message.modifications.length)
                        for (var i = 0; i < message.modifications.length; ++i)
                            $root.com.example.dto.AbbreviateModification.encode(message.modifications[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.maxIntensity != null && message.hasOwnProperty("maxIntensity"))
                        writer.uint32(/* id 9, wireType 5 =*/77).float(message.maxIntensity);
                    return writer;
                };

                /**
                 * Encodes the specified DenovoCandidate message, length delimited. Does not implicitly {@link com.example.dto.DenovoCandidate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {com.example.dto.IDenovoCandidate} message DenovoCandidate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DenovoCandidate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DenovoCandidate message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.DenovoCandidate} DenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DenovoCandidate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.DenovoCandidate();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sequence = reader.string();
                            break;
                        case 2:
                            message.mass = reader.float();
                            break;
                        case 3:
                            message.length = reader.uint32();
                            break;
                        case 4:
                            message.area = reader.float();
                            break;
                        case 5:
                            message.ppm = reader.float();
                            break;
                        case 6:
                            message.alc = reader.float();
                            break;
                        case 7:
                            if (!(message.positionConfidence && message.positionConfidence.length))
                                message.positionConfidence = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.positionConfidence.push(reader.float());
                            } else
                                message.positionConfidence.push(reader.float());
                            break;
                        case 8:
                            if (!(message.modifications && message.modifications.length))
                                message.modifications = [];
                            message.modifications.push($root.com.example.dto.AbbreviateModification.decode(reader, reader.uint32()));
                            break;
                        case 9:
                            message.maxIntensity = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DenovoCandidate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.DenovoCandidate} DenovoCandidate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DenovoCandidate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DenovoCandidate message.
                 * @function verify
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DenovoCandidate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        if (!$util.isString(message.sequence))
                            return "sequence: string expected";
                    if (message.mass != null && message.hasOwnProperty("mass"))
                        if (typeof message.mass !== "number")
                            return "mass: number expected";
                    if (message.length != null && message.hasOwnProperty("length"))
                        if (!$util.isInteger(message.length))
                            return "length: integer expected";
                    if (message.area != null && message.hasOwnProperty("area"))
                        if (typeof message.area !== "number")
                            return "area: number expected";
                    if (message.ppm != null && message.hasOwnProperty("ppm"))
                        if (typeof message.ppm !== "number")
                            return "ppm: number expected";
                    if (message.alc != null && message.hasOwnProperty("alc"))
                        if (typeof message.alc !== "number")
                            return "alc: number expected";
                    if (message.positionConfidence != null && message.hasOwnProperty("positionConfidence")) {
                        if (!Array.isArray(message.positionConfidence))
                            return "positionConfidence: array expected";
                        for (var i = 0; i < message.positionConfidence.length; ++i)
                            if (typeof message.positionConfidence[i] !== "number")
                                return "positionConfidence: number[] expected";
                    }
                    if (message.modifications != null && message.hasOwnProperty("modifications")) {
                        if (!Array.isArray(message.modifications))
                            return "modifications: array expected";
                        for (var i = 0; i < message.modifications.length; ++i) {
                            var error = $root.com.example.dto.AbbreviateModification.verify(message.modifications[i]);
                            if (error)
                                return "modifications." + error;
                        }
                    }
                    if (message.maxIntensity != null && message.hasOwnProperty("maxIntensity"))
                        if (typeof message.maxIntensity !== "number")
                            return "maxIntensity: number expected";
                    return null;
                };

                /**
                 * Creates a DenovoCandidate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.DenovoCandidate} DenovoCandidate
                 */
                DenovoCandidate.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.DenovoCandidate)
                        return object;
                    var message = new $root.com.example.dto.DenovoCandidate();
                    if (object.sequence != null)
                        message.sequence = String(object.sequence);
                    if (object.mass != null)
                        message.mass = Number(object.mass);
                    if (object.length != null)
                        message.length = object.length >>> 0;
                    if (object.area != null)
                        message.area = Number(object.area);
                    if (object.ppm != null)
                        message.ppm = Number(object.ppm);
                    if (object.alc != null)
                        message.alc = Number(object.alc);
                    if (object.positionConfidence) {
                        if (!Array.isArray(object.positionConfidence))
                            throw TypeError(".com.example.dto.DenovoCandidate.positionConfidence: array expected");
                        message.positionConfidence = [];
                        for (var i = 0; i < object.positionConfidence.length; ++i)
                            message.positionConfidence[i] = Number(object.positionConfidence[i]);
                    }
                    if (object.modifications) {
                        if (!Array.isArray(object.modifications))
                            throw TypeError(".com.example.dto.DenovoCandidate.modifications: array expected");
                        message.modifications = [];
                        for (var i = 0; i < object.modifications.length; ++i) {
                            if (typeof object.modifications[i] !== "object")
                                throw TypeError(".com.example.dto.DenovoCandidate.modifications: object expected");
                            message.modifications[i] = $root.com.example.dto.AbbreviateModification.fromObject(object.modifications[i]);
                        }
                    }
                    if (object.maxIntensity != null)
                        message.maxIntensity = Number(object.maxIntensity);
                    return message;
                };

                /**
                 * Creates a plain object from a DenovoCandidate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.DenovoCandidate
                 * @static
                 * @param {com.example.dto.DenovoCandidate} message DenovoCandidate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DenovoCandidate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.positionConfidence = [];
                        object.modifications = [];
                    }
                    if (options.defaults) {
                        object.sequence = "";
                        object.mass = 0;
                        object.length = 0;
                        object.area = 0;
                        object.ppm = 0;
                        object.alc = 0;
                        object.maxIntensity = 0;
                    }
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        object.sequence = message.sequence;
                    if (message.mass != null && message.hasOwnProperty("mass"))
                        object.mass = options.json && !isFinite(message.mass) ? String(message.mass) : message.mass;
                    if (message.length != null && message.hasOwnProperty("length"))
                        object.length = message.length;
                    if (message.area != null && message.hasOwnProperty("area"))
                        object.area = options.json && !isFinite(message.area) ? String(message.area) : message.area;
                    if (message.ppm != null && message.hasOwnProperty("ppm"))
                        object.ppm = options.json && !isFinite(message.ppm) ? String(message.ppm) : message.ppm;
                    if (message.alc != null && message.hasOwnProperty("alc"))
                        object.alc = options.json && !isFinite(message.alc) ? String(message.alc) : message.alc;
                    if (message.positionConfidence && message.positionConfidence.length) {
                        object.positionConfidence = [];
                        for (var j = 0; j < message.positionConfidence.length; ++j)
                            object.positionConfidence[j] = options.json && !isFinite(message.positionConfidence[j]) ? String(message.positionConfidence[j]) : message.positionConfidence[j];
                    }
                    if (message.modifications && message.modifications.length) {
                        object.modifications = [];
                        for (var j = 0; j < message.modifications.length; ++j)
                            object.modifications[j] = $root.com.example.dto.AbbreviateModification.toObject(message.modifications[j], options);
                    }
                    if (message.maxIntensity != null && message.hasOwnProperty("maxIntensity"))
                        object.maxIntensity = options.json && !isFinite(message.maxIntensity) ? String(message.maxIntensity) : message.maxIntensity;
                    return object;
                };

                /**
                 * Converts this DenovoCandidate to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.DenovoCandidate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DenovoCandidate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DenovoCandidate;
            })();

            dto.AbbreviateModification = (function() {

                /**
                 * Properties of an AbbreviateModification.
                 * @memberof com.example.dto
                 * @interface IAbbreviateModification
                 * @property {string|null} [name] AbbreviateModification name
                 * @property {string|null} [abbreviation] AbbreviateModification abbreviation
                 * @property {number|null} [monoMass] AbbreviateModification monoMass
                 * @property {com.example.dto.ModificationType|null} [type] AbbreviateModification type
                 * @property {string|null} [anywhereResidues] AbbreviateModification anywhereResidues
                 */

                /**
                 * Constructs a new AbbreviateModification.
                 * @memberof com.example.dto
                 * @classdesc Represents an AbbreviateModification.
                 * @implements IAbbreviateModification
                 * @constructor
                 * @param {com.example.dto.IAbbreviateModification=} [properties] Properties to set
                 */
                function AbbreviateModification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AbbreviateModification name.
                 * @member {string} name
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 */
                AbbreviateModification.prototype.name = "";

                /**
                 * AbbreviateModification abbreviation.
                 * @member {string} abbreviation
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 */
                AbbreviateModification.prototype.abbreviation = "";

                /**
                 * AbbreviateModification monoMass.
                 * @member {number} monoMass
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 */
                AbbreviateModification.prototype.monoMass = 0;

                /**
                 * AbbreviateModification type.
                 * @member {com.example.dto.ModificationType} type
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 */
                AbbreviateModification.prototype.type = 0;

                /**
                 * AbbreviateModification anywhereResidues.
                 * @member {string} anywhereResidues
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 */
                AbbreviateModification.prototype.anywhereResidues = "";

                /**
                 * Creates a new AbbreviateModification instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {com.example.dto.IAbbreviateModification=} [properties] Properties to set
                 * @returns {com.example.dto.AbbreviateModification} AbbreviateModification instance
                 */
                AbbreviateModification.create = function create(properties) {
                    return new AbbreviateModification(properties);
                };

                /**
                 * Encodes the specified AbbreviateModification message. Does not implicitly {@link com.example.dto.AbbreviateModification.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {com.example.dto.IAbbreviateModification} message AbbreviateModification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AbbreviateModification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.abbreviation != null && message.hasOwnProperty("abbreviation"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.abbreviation);
                    if (message.monoMass != null && message.hasOwnProperty("monoMass"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.monoMass);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
                    if (message.anywhereResidues != null && message.hasOwnProperty("anywhereResidues"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.anywhereResidues);
                    return writer;
                };

                /**
                 * Encodes the specified AbbreviateModification message, length delimited. Does not implicitly {@link com.example.dto.AbbreviateModification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {com.example.dto.IAbbreviateModification} message AbbreviateModification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AbbreviateModification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AbbreviateModification message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.AbbreviateModification} AbbreviateModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AbbreviateModification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.AbbreviateModification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.abbreviation = reader.string();
                            break;
                        case 3:
                            message.monoMass = reader.float();
                            break;
                        case 4:
                            message.type = reader.int32();
                            break;
                        case 5:
                            message.anywhereResidues = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AbbreviateModification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.AbbreviateModification} AbbreviateModification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AbbreviateModification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AbbreviateModification message.
                 * @function verify
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AbbreviateModification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.abbreviation != null && message.hasOwnProperty("abbreviation"))
                        if (!$util.isString(message.abbreviation))
                            return "abbreviation: string expected";
                    if (message.monoMass != null && message.hasOwnProperty("monoMass"))
                        if (typeof message.monoMass !== "number")
                            return "monoMass: number expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.anywhereResidues != null && message.hasOwnProperty("anywhereResidues"))
                        if (!$util.isString(message.anywhereResidues))
                            return "anywhereResidues: string expected";
                    return null;
                };

                /**
                 * Creates an AbbreviateModification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.AbbreviateModification} AbbreviateModification
                 */
                AbbreviateModification.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.AbbreviateModification)
                        return object;
                    var message = new $root.com.example.dto.AbbreviateModification();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.abbreviation != null)
                        message.abbreviation = String(object.abbreviation);
                    if (object.monoMass != null)
                        message.monoMass = Number(object.monoMass);
                    switch (object.type) {
                    case "PTM":
                    case 0:
                        message.type = 0;
                        break;
                    case "MUTATION":
                    case 1:
                        message.type = 1;
                        break;
                    case "INSERTION":
                    case 2:
                        message.type = 2;
                        break;
                    case "DELETION":
                    case 3:
                        message.type = 3;
                        break;
                    }
                    if (object.anywhereResidues != null)
                        message.anywhereResidues = String(object.anywhereResidues);
                    return message;
                };

                /**
                 * Creates a plain object from an AbbreviateModification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.AbbreviateModification
                 * @static
                 * @param {com.example.dto.AbbreviateModification} message AbbreviateModification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AbbreviateModification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.abbreviation = "";
                        object.monoMass = 0;
                        object.type = options.enums === String ? "PTM" : 0;
                        object.anywhereResidues = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.abbreviation != null && message.hasOwnProperty("abbreviation"))
                        object.abbreviation = message.abbreviation;
                    if (message.monoMass != null && message.hasOwnProperty("monoMass"))
                        object.monoMass = options.json && !isFinite(message.monoMass) ? String(message.monoMass) : message.monoMass;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.example.dto.ModificationType[message.type] : message.type;
                    if (message.anywhereResidues != null && message.hasOwnProperty("anywhereResidues"))
                        object.anywhereResidues = message.anywhereResidues;
                    return object;
                };

                /**
                 * Converts this AbbreviateModification to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.AbbreviateModification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AbbreviateModification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AbbreviateModification;
            })();

            /**
             * ModificationType enum.
             * @name com.example.dto.ModificationType
             * @enum {string}
             * @property {number} PTM=0 PTM value
             * @property {number} MUTATION=1 MUTATION value
             * @property {number} INSERTION=2 INSERTION value
             * @property {number} DELETION=3 DELETION value
             */
            dto.ModificationType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PTM"] = 0;
                values[valuesById[1] = "MUTATION"] = 1;
                values[valuesById[2] = "INSERTION"] = 2;
                values[valuesById[3] = "DELETION"] = 3;
                return values;
            })();

            dto.FileNode = (function() {

                /**
                 * Properties of a FileNode.
                 * @memberof com.example.dto
                 * @interface IFileNode
                 * @property {string|null} [filename] FileNode filename
                 * @property {com.example.dto.FileNode.Type|null} [type] FileNode type
                 * @property {Array.<com.example.dto.IFileNode>|null} [children] FileNode children
                 */

                /**
                 * Constructs a new FileNode.
                 * @memberof com.example.dto
                 * @classdesc Represents a FileNode.
                 * @implements IFileNode
                 * @constructor
                 * @param {com.example.dto.IFileNode=} [properties] Properties to set
                 */
                function FileNode(properties) {
                    this.children = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FileNode filename.
                 * @member {string} filename
                 * @memberof com.example.dto.FileNode
                 * @instance
                 */
                FileNode.prototype.filename = "";

                /**
                 * FileNode type.
                 * @member {com.example.dto.FileNode.Type} type
                 * @memberof com.example.dto.FileNode
                 * @instance
                 */
                FileNode.prototype.type = 0;

                /**
                 * FileNode children.
                 * @member {Array.<com.example.dto.IFileNode>} children
                 * @memberof com.example.dto.FileNode
                 * @instance
                 */
                FileNode.prototype.children = $util.emptyArray;

                /**
                 * Creates a new FileNode instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {com.example.dto.IFileNode=} [properties] Properties to set
                 * @returns {com.example.dto.FileNode} FileNode instance
                 */
                FileNode.create = function create(properties) {
                    return new FileNode(properties);
                };

                /**
                 * Encodes the specified FileNode message. Does not implicitly {@link com.example.dto.FileNode.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {com.example.dto.IFileNode} message FileNode message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileNode.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.filename != null && message.hasOwnProperty("filename"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    if (message.children != null && message.children.length)
                        for (var i = 0; i < message.children.length; ++i)
                            $root.com.example.dto.FileNode.encode(message.children[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FileNode message, length delimited. Does not implicitly {@link com.example.dto.FileNode.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {com.example.dto.IFileNode} message FileNode message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileNode.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FileNode message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.FileNode} FileNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileNode.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.FileNode();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.filename = reader.string();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        case 3:
                            if (!(message.children && message.children.length))
                                message.children = [];
                            message.children.push($root.com.example.dto.FileNode.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FileNode message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.FileNode} FileNode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileNode.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FileNode message.
                 * @function verify
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileNode.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.filename != null && message.hasOwnProperty("filename"))
                        if (!$util.isString(message.filename))
                            return "filename: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.children != null && message.hasOwnProperty("children")) {
                        if (!Array.isArray(message.children))
                            return "children: array expected";
                        for (var i = 0; i < message.children.length; ++i) {
                            var error = $root.com.example.dto.FileNode.verify(message.children[i]);
                            if (error)
                                return "children." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a FileNode message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.FileNode} FileNode
                 */
                FileNode.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.FileNode)
                        return object;
                    var message = new $root.com.example.dto.FileNode();
                    if (object.filename != null)
                        message.filename = String(object.filename);
                    switch (object.type) {
                    case "FILE":
                    case 0:
                        message.type = 0;
                        break;
                    case "DIR":
                    case 1:
                        message.type = 1;
                        break;
                    }
                    if (object.children) {
                        if (!Array.isArray(object.children))
                            throw TypeError(".com.example.dto.FileNode.children: array expected");
                        message.children = [];
                        for (var i = 0; i < object.children.length; ++i) {
                            if (typeof object.children[i] !== "object")
                                throw TypeError(".com.example.dto.FileNode.children: object expected");
                            message.children[i] = $root.com.example.dto.FileNode.fromObject(object.children[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FileNode message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.FileNode
                 * @static
                 * @param {com.example.dto.FileNode} message FileNode
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileNode.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.children = [];
                    if (options.defaults) {
                        object.filename = "";
                        object.type = options.enums === String ? "FILE" : 0;
                    }
                    if (message.filename != null && message.hasOwnProperty("filename"))
                        object.filename = message.filename;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.example.dto.FileNode.Type[message.type] : message.type;
                    if (message.children && message.children.length) {
                        object.children = [];
                        for (var j = 0; j < message.children.length; ++j)
                            object.children[j] = $root.com.example.dto.FileNode.toObject(message.children[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this FileNode to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.FileNode
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileNode.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Type enum.
                 * @name com.example.dto.FileNode.Type
                 * @enum {string}
                 * @property {number} FILE=0 FILE value
                 * @property {number} DIR=1 DIR value
                 */
                FileNode.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "FILE"] = 0;
                    values[valuesById[1] = "DIR"] = 1;
                    return values;
                })();

                return FileNode;
            })();

            /**
             * IonType enum.
             * @name com.example.dto.IonType
             * @enum {string}
             * @property {number} A=0 A value
             * @property {number} B=1 B value
             * @property {number} C=2 C value
             * @property {number} X=3 X value
             * @property {number} Y=4 Y value
             * @property {number} Z=5 Z value
             * @property {number} Z_PRIME=6 Z_PRIME value
             * @property {number} IMMONIUM=7 IMMONIUM value
             * @property {number} PRECURSOR=8 PRECURSOR value
             * @property {number} A_MINUS_H2O=16 A_MINUS_H2O value
             * @property {number} B_MINUS_H2O=17 B_MINUS_H2O value
             * @property {number} C_MINUS_H2O=18 C_MINUS_H2O value
             * @property {number} X_MINUS_H2O=19 X_MINUS_H2O value
             * @property {number} Y_MINUS_H2O=20 Y_MINUS_H2O value
             * @property {number} Z_MINUS_H2O=21 Z_MINUS_H2O value
             * @property {number} Z_PRIME_MINUS_H2O=22 Z_PRIME_MINUS_H2O value
             * @property {number} A_MINUS_NH3=32 A_MINUS_NH3 value
             * @property {number} B_MINUS_NH3=33 B_MINUS_NH3 value
             * @property {number} C_MINUS_NH3=34 C_MINUS_NH3 value
             * @property {number} X_MINUS_NH3=35 X_MINUS_NH3 value
             * @property {number} Y_MINUS_NH3=36 Y_MINUS_NH3 value
             * @property {number} Z_MINUS_NH3=37 Z_MINUS_NH3 value
             * @property {number} Z_PRIME_MINUS_NH3=38 Z_PRIME_MINUS_NH3 value
             * @property {number} A_CHARGE2=48 A_CHARGE2 value
             * @property {number} B_CHARGE2=49 B_CHARGE2 value
             * @property {number} C_CHARGE2=50 C_CHARGE2 value
             * @property {number} X_CHARGE2=51 X_CHARGE2 value
             * @property {number} Y_CHARGE2=52 Y_CHARGE2 value
             * @property {number} Z_CHARGE2=53 Z_CHARGE2 value
             * @property {number} Z_PRIME_CHARGE2=54 Z_PRIME_CHARGE2 value
             * @property {number} C_MINUS_H=66 C_MINUS_H value
             */
            dto.IonType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "A"] = 0;
                values[valuesById[1] = "B"] = 1;
                values[valuesById[2] = "C"] = 2;
                values[valuesById[3] = "X"] = 3;
                values[valuesById[4] = "Y"] = 4;
                values[valuesById[5] = "Z"] = 5;
                values[valuesById[6] = "Z_PRIME"] = 6;
                values[valuesById[7] = "IMMONIUM"] = 7;
                values[valuesById[8] = "PRECURSOR"] = 8;
                values[valuesById[16] = "A_MINUS_H2O"] = 16;
                values[valuesById[17] = "B_MINUS_H2O"] = 17;
                values[valuesById[18] = "C_MINUS_H2O"] = 18;
                values[valuesById[19] = "X_MINUS_H2O"] = 19;
                values[valuesById[20] = "Y_MINUS_H2O"] = 20;
                values[valuesById[21] = "Z_MINUS_H2O"] = 21;
                values[valuesById[22] = "Z_PRIME_MINUS_H2O"] = 22;
                values[valuesById[32] = "A_MINUS_NH3"] = 32;
                values[valuesById[33] = "B_MINUS_NH3"] = 33;
                values[valuesById[34] = "C_MINUS_NH3"] = 34;
                values[valuesById[35] = "X_MINUS_NH3"] = 35;
                values[valuesById[36] = "Y_MINUS_NH3"] = 36;
                values[valuesById[37] = "Z_MINUS_NH3"] = 37;
                values[valuesById[38] = "Z_PRIME_MINUS_NH3"] = 38;
                values[valuesById[48] = "A_CHARGE2"] = 48;
                values[valuesById[49] = "B_CHARGE2"] = 49;
                values[valuesById[50] = "C_CHARGE2"] = 50;
                values[valuesById[51] = "X_CHARGE2"] = 51;
                values[valuesById[52] = "Y_CHARGE2"] = 52;
                values[valuesById[53] = "Z_CHARGE2"] = 53;
                values[valuesById[54] = "Z_PRIME_CHARGE2"] = 54;
                values[valuesById[66] = "C_MINUS_H"] = 66;
                return values;
            })();

            dto.TheoreticalIons = (function() {

                /**
                 * Properties of a TheoreticalIons.
                 * @memberof com.example.dto
                 * @interface ITheoreticalIons
                 * @property {com.example.dto.IonType|null} [type] TheoreticalIons type
                 * @property {Array.<number>|null} [mz] TheoreticalIons mz
                 */

                /**
                 * Constructs a new TheoreticalIons.
                 * @memberof com.example.dto
                 * @classdesc Represents a TheoreticalIons.
                 * @implements ITheoreticalIons
                 * @constructor
                 * @param {com.example.dto.ITheoreticalIons=} [properties] Properties to set
                 */
                function TheoreticalIons(properties) {
                    this.mz = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TheoreticalIons type.
                 * @member {com.example.dto.IonType} type
                 * @memberof com.example.dto.TheoreticalIons
                 * @instance
                 */
                TheoreticalIons.prototype.type = 0;

                /**
                 * TheoreticalIons mz.
                 * @member {Array.<number>} mz
                 * @memberof com.example.dto.TheoreticalIons
                 * @instance
                 */
                TheoreticalIons.prototype.mz = $util.emptyArray;

                /**
                 * Creates a new TheoreticalIons instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {com.example.dto.ITheoreticalIons=} [properties] Properties to set
                 * @returns {com.example.dto.TheoreticalIons} TheoreticalIons instance
                 */
                TheoreticalIons.create = function create(properties) {
                    return new TheoreticalIons(properties);
                };

                /**
                 * Encodes the specified TheoreticalIons message. Does not implicitly {@link com.example.dto.TheoreticalIons.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {com.example.dto.ITheoreticalIons} message TheoreticalIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TheoreticalIons.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.mz != null && message.mz.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.mz.length; ++i)
                            writer.float(message.mz[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                /**
                 * Encodes the specified TheoreticalIons message, length delimited. Does not implicitly {@link com.example.dto.TheoreticalIons.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {com.example.dto.ITheoreticalIons} message TheoreticalIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TheoreticalIons.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TheoreticalIons message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.TheoreticalIons} TheoreticalIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TheoreticalIons.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.TheoreticalIons();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            if (!(message.mz && message.mz.length))
                                message.mz = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.mz.push(reader.float());
                            } else
                                message.mz.push(reader.float());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TheoreticalIons message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.TheoreticalIons} TheoreticalIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TheoreticalIons.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TheoreticalIons message.
                 * @function verify
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TheoreticalIons.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 66:
                            break;
                        }
                    if (message.mz != null && message.hasOwnProperty("mz")) {
                        if (!Array.isArray(message.mz))
                            return "mz: array expected";
                        for (var i = 0; i < message.mz.length; ++i)
                            if (typeof message.mz[i] !== "number")
                                return "mz: number[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a TheoreticalIons message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.TheoreticalIons} TheoreticalIons
                 */
                TheoreticalIons.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.TheoreticalIons)
                        return object;
                    var message = new $root.com.example.dto.TheoreticalIons();
                    switch (object.type) {
                    case "A":
                    case 0:
                        message.type = 0;
                        break;
                    case "B":
                    case 1:
                        message.type = 1;
                        break;
                    case "C":
                    case 2:
                        message.type = 2;
                        break;
                    case "X":
                    case 3:
                        message.type = 3;
                        break;
                    case "Y":
                    case 4:
                        message.type = 4;
                        break;
                    case "Z":
                    case 5:
                        message.type = 5;
                        break;
                    case "Z_PRIME":
                    case 6:
                        message.type = 6;
                        break;
                    case "IMMONIUM":
                    case 7:
                        message.type = 7;
                        break;
                    case "PRECURSOR":
                    case 8:
                        message.type = 8;
                        break;
                    case "A_MINUS_H2O":
                    case 16:
                        message.type = 16;
                        break;
                    case "B_MINUS_H2O":
                    case 17:
                        message.type = 17;
                        break;
                    case "C_MINUS_H2O":
                    case 18:
                        message.type = 18;
                        break;
                    case "X_MINUS_H2O":
                    case 19:
                        message.type = 19;
                        break;
                    case "Y_MINUS_H2O":
                    case 20:
                        message.type = 20;
                        break;
                    case "Z_MINUS_H2O":
                    case 21:
                        message.type = 21;
                        break;
                    case "Z_PRIME_MINUS_H2O":
                    case 22:
                        message.type = 22;
                        break;
                    case "A_MINUS_NH3":
                    case 32:
                        message.type = 32;
                        break;
                    case "B_MINUS_NH3":
                    case 33:
                        message.type = 33;
                        break;
                    case "C_MINUS_NH3":
                    case 34:
                        message.type = 34;
                        break;
                    case "X_MINUS_NH3":
                    case 35:
                        message.type = 35;
                        break;
                    case "Y_MINUS_NH3":
                    case 36:
                        message.type = 36;
                        break;
                    case "Z_MINUS_NH3":
                    case 37:
                        message.type = 37;
                        break;
                    case "Z_PRIME_MINUS_NH3":
                    case 38:
                        message.type = 38;
                        break;
                    case "A_CHARGE2":
                    case 48:
                        message.type = 48;
                        break;
                    case "B_CHARGE2":
                    case 49:
                        message.type = 49;
                        break;
                    case "C_CHARGE2":
                    case 50:
                        message.type = 50;
                        break;
                    case "X_CHARGE2":
                    case 51:
                        message.type = 51;
                        break;
                    case "Y_CHARGE2":
                    case 52:
                        message.type = 52;
                        break;
                    case "Z_CHARGE2":
                    case 53:
                        message.type = 53;
                        break;
                    case "Z_PRIME_CHARGE2":
                    case 54:
                        message.type = 54;
                        break;
                    case "C_MINUS_H":
                    case 66:
                        message.type = 66;
                        break;
                    }
                    if (object.mz) {
                        if (!Array.isArray(object.mz))
                            throw TypeError(".com.example.dto.TheoreticalIons.mz: array expected");
                        message.mz = [];
                        for (var i = 0; i < object.mz.length; ++i)
                            message.mz[i] = Number(object.mz[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TheoreticalIons message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.TheoreticalIons
                 * @static
                 * @param {com.example.dto.TheoreticalIons} message TheoreticalIons
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TheoreticalIons.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.mz = [];
                    if (options.defaults)
                        object.type = options.enums === String ? "A" : 0;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.example.dto.IonType[message.type] : message.type;
                    if (message.mz && message.mz.length) {
                        object.mz = [];
                        for (var j = 0; j < message.mz.length; ++j)
                            object.mz[j] = options.json && !isFinite(message.mz[j]) ? String(message.mz[j]) : message.mz[j];
                    }
                    return object;
                };

                /**
                 * Converts this TheoreticalIons to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.TheoreticalIons
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TheoreticalIons.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TheoreticalIons;
            })();

            dto.Ion = (function() {

                /**
                 * Properties of an Ion.
                 * @memberof com.example.dto
                 * @interface IIon
                 * @property {com.example.dto.IonType|null} [type] Ion type
                 * @property {number|null} [mz] Ion mz
                 * @property {number|null} [h] Ion h
                 * @property {number|null} [pos] Ion pos
                 */

                /**
                 * Constructs a new Ion.
                 * @memberof com.example.dto
                 * @classdesc Represents an Ion.
                 * @implements IIon
                 * @constructor
                 * @param {com.example.dto.IIon=} [properties] Properties to set
                 */
                function Ion(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Ion type.
                 * @member {com.example.dto.IonType} type
                 * @memberof com.example.dto.Ion
                 * @instance
                 */
                Ion.prototype.type = 0;

                /**
                 * Ion mz.
                 * @member {number} mz
                 * @memberof com.example.dto.Ion
                 * @instance
                 */
                Ion.prototype.mz = 0;

                /**
                 * Ion h.
                 * @member {number} h
                 * @memberof com.example.dto.Ion
                 * @instance
                 */
                Ion.prototype.h = 0;

                /**
                 * Ion pos.
                 * @member {number} pos
                 * @memberof com.example.dto.Ion
                 * @instance
                 */
                Ion.prototype.pos = 0;

                /**
                 * Creates a new Ion instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {com.example.dto.IIon=} [properties] Properties to set
                 * @returns {com.example.dto.Ion} Ion instance
                 */
                Ion.create = function create(properties) {
                    return new Ion(properties);
                };

                /**
                 * Encodes the specified Ion message. Does not implicitly {@link com.example.dto.Ion.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {com.example.dto.IIon} message Ion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.mz);
                    if (message.h != null && message.hasOwnProperty("h"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.h);
                    if (message.pos != null && message.hasOwnProperty("pos"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pos);
                    return writer;
                };

                /**
                 * Encodes the specified Ion message, length delimited. Does not implicitly {@link com.example.dto.Ion.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {com.example.dto.IIon} message Ion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ion.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Ion message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Ion} Ion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Ion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type = reader.int32();
                            break;
                        case 2:
                            message.mz = reader.float();
                            break;
                        case 3:
                            message.h = reader.float();
                            break;
                        case 4:
                            message.pos = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Ion message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Ion} Ion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ion.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Ion message.
                 * @function verify
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ion.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                        case 36:
                        case 37:
                        case 38:
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 66:
                            break;
                        }
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        if (typeof message.mz !== "number")
                            return "mz: number expected";
                    if (message.h != null && message.hasOwnProperty("h"))
                        if (typeof message.h !== "number")
                            return "h: number expected";
                    if (message.pos != null && message.hasOwnProperty("pos"))
                        if (!$util.isInteger(message.pos))
                            return "pos: integer expected";
                    return null;
                };

                /**
                 * Creates an Ion message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Ion} Ion
                 */
                Ion.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Ion)
                        return object;
                    var message = new $root.com.example.dto.Ion();
                    switch (object.type) {
                    case "A":
                    case 0:
                        message.type = 0;
                        break;
                    case "B":
                    case 1:
                        message.type = 1;
                        break;
                    case "C":
                    case 2:
                        message.type = 2;
                        break;
                    case "X":
                    case 3:
                        message.type = 3;
                        break;
                    case "Y":
                    case 4:
                        message.type = 4;
                        break;
                    case "Z":
                    case 5:
                        message.type = 5;
                        break;
                    case "Z_PRIME":
                    case 6:
                        message.type = 6;
                        break;
                    case "IMMONIUM":
                    case 7:
                        message.type = 7;
                        break;
                    case "PRECURSOR":
                    case 8:
                        message.type = 8;
                        break;
                    case "A_MINUS_H2O":
                    case 16:
                        message.type = 16;
                        break;
                    case "B_MINUS_H2O":
                    case 17:
                        message.type = 17;
                        break;
                    case "C_MINUS_H2O":
                    case 18:
                        message.type = 18;
                        break;
                    case "X_MINUS_H2O":
                    case 19:
                        message.type = 19;
                        break;
                    case "Y_MINUS_H2O":
                    case 20:
                        message.type = 20;
                        break;
                    case "Z_MINUS_H2O":
                    case 21:
                        message.type = 21;
                        break;
                    case "Z_PRIME_MINUS_H2O":
                    case 22:
                        message.type = 22;
                        break;
                    case "A_MINUS_NH3":
                    case 32:
                        message.type = 32;
                        break;
                    case "B_MINUS_NH3":
                    case 33:
                        message.type = 33;
                        break;
                    case "C_MINUS_NH3":
                    case 34:
                        message.type = 34;
                        break;
                    case "X_MINUS_NH3":
                    case 35:
                        message.type = 35;
                        break;
                    case "Y_MINUS_NH3":
                    case 36:
                        message.type = 36;
                        break;
                    case "Z_MINUS_NH3":
                    case 37:
                        message.type = 37;
                        break;
                    case "Z_PRIME_MINUS_NH3":
                    case 38:
                        message.type = 38;
                        break;
                    case "A_CHARGE2":
                    case 48:
                        message.type = 48;
                        break;
                    case "B_CHARGE2":
                    case 49:
                        message.type = 49;
                        break;
                    case "C_CHARGE2":
                    case 50:
                        message.type = 50;
                        break;
                    case "X_CHARGE2":
                    case 51:
                        message.type = 51;
                        break;
                    case "Y_CHARGE2":
                    case 52:
                        message.type = 52;
                        break;
                    case "Z_CHARGE2":
                    case 53:
                        message.type = 53;
                        break;
                    case "Z_PRIME_CHARGE2":
                    case 54:
                        message.type = 54;
                        break;
                    case "C_MINUS_H":
                    case 66:
                        message.type = 66;
                        break;
                    }
                    if (object.mz != null)
                        message.mz = Number(object.mz);
                    if (object.h != null)
                        message.h = Number(object.h);
                    if (object.pos != null)
                        message.pos = object.pos >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Ion message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Ion
                 * @static
                 * @param {com.example.dto.Ion} message Ion
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ion.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "A" : 0;
                        object.mz = 0;
                        object.h = 0;
                        object.pos = 0;
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.example.dto.IonType[message.type] : message.type;
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        object.mz = options.json && !isFinite(message.mz) ? String(message.mz) : message.mz;
                    if (message.h != null && message.hasOwnProperty("h"))
                        object.h = options.json && !isFinite(message.h) ? String(message.h) : message.h;
                    if (message.pos != null && message.hasOwnProperty("pos"))
                        object.pos = message.pos;
                    return object;
                };

                /**
                 * Converts this Ion to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Ion
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ion.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Ion;
            })();

            dto.Ms1Stats = (function() {

                /**
                 * Properties of a Ms1Stats.
                 * @memberof com.example.dto
                 * @interface IMs1Stats
                 * @property {number|Long|null} [retentionTime] Ms1Stats retentionTime
                 * @property {number|null} [tic] Ms1Stats tic
                 * @property {number|null} [scan] Ms1Stats scan
                 * @property {number|null} [basePeakIntensity] Ms1Stats basePeakIntensity
                 */

                /**
                 * Constructs a new Ms1Stats.
                 * @memberof com.example.dto
                 * @classdesc Represents a Ms1Stats.
                 * @implements IMs1Stats
                 * @constructor
                 * @param {com.example.dto.IMs1Stats=} [properties] Properties to set
                 */
                function Ms1Stats(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Ms1Stats retentionTime.
                 * @member {number|Long} retentionTime
                 * @memberof com.example.dto.Ms1Stats
                 * @instance
                 */
                Ms1Stats.prototype.retentionTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Ms1Stats tic.
                 * @member {number} tic
                 * @memberof com.example.dto.Ms1Stats
                 * @instance
                 */
                Ms1Stats.prototype.tic = 0;

                /**
                 * Ms1Stats scan.
                 * @member {number} scan
                 * @memberof com.example.dto.Ms1Stats
                 * @instance
                 */
                Ms1Stats.prototype.scan = 0;

                /**
                 * Ms1Stats basePeakIntensity.
                 * @member {number} basePeakIntensity
                 * @memberof com.example.dto.Ms1Stats
                 * @instance
                 */
                Ms1Stats.prototype.basePeakIntensity = 0;

                /**
                 * Creates a new Ms1Stats instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {com.example.dto.IMs1Stats=} [properties] Properties to set
                 * @returns {com.example.dto.Ms1Stats} Ms1Stats instance
                 */
                Ms1Stats.create = function create(properties) {
                    return new Ms1Stats(properties);
                };

                /**
                 * Encodes the specified Ms1Stats message. Does not implicitly {@link com.example.dto.Ms1Stats.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {com.example.dto.IMs1Stats} message Ms1Stats message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ms1Stats.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.retentionTime);
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.tic);
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.scan);
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.basePeakIntensity);
                    return writer;
                };

                /**
                 * Encodes the specified Ms1Stats message, length delimited. Does not implicitly {@link com.example.dto.Ms1Stats.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {com.example.dto.IMs1Stats} message Ms1Stats message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ms1Stats.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Ms1Stats message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Ms1Stats} Ms1Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ms1Stats.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Ms1Stats();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.retentionTime = reader.uint64();
                            break;
                        case 2:
                            message.tic = reader.float();
                            break;
                        case 3:
                            message.scan = reader.uint32();
                            break;
                        case 4:
                            message.basePeakIntensity = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Ms1Stats message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Ms1Stats} Ms1Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ms1Stats.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Ms1Stats message.
                 * @function verify
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ms1Stats.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (!$util.isInteger(message.retentionTime) && !(message.retentionTime && $util.isInteger(message.retentionTime.low) && $util.isInteger(message.retentionTime.high)))
                            return "retentionTime: integer|Long expected";
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        if (typeof message.tic !== "number")
                            return "tic: number expected";
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        if (!$util.isInteger(message.scan))
                            return "scan: integer expected";
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        if (typeof message.basePeakIntensity !== "number")
                            return "basePeakIntensity: number expected";
                    return null;
                };

                /**
                 * Creates a Ms1Stats message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Ms1Stats} Ms1Stats
                 */
                Ms1Stats.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Ms1Stats)
                        return object;
                    var message = new $root.com.example.dto.Ms1Stats();
                    if (object.retentionTime != null)
                        if ($util.Long)
                            (message.retentionTime = $util.Long.fromValue(object.retentionTime)).unsigned = true;
                        else if (typeof object.retentionTime === "string")
                            message.retentionTime = parseInt(object.retentionTime, 10);
                        else if (typeof object.retentionTime === "number")
                            message.retentionTime = object.retentionTime;
                        else if (typeof object.retentionTime === "object")
                            message.retentionTime = new $util.LongBits(object.retentionTime.low >>> 0, object.retentionTime.high >>> 0).toNumber(true);
                    if (object.tic != null)
                        message.tic = Number(object.tic);
                    if (object.scan != null)
                        message.scan = object.scan >>> 0;
                    if (object.basePeakIntensity != null)
                        message.basePeakIntensity = Number(object.basePeakIntensity);
                    return message;
                };

                /**
                 * Creates a plain object from a Ms1Stats message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Ms1Stats
                 * @static
                 * @param {com.example.dto.Ms1Stats} message Ms1Stats
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ms1Stats.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.retentionTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.retentionTime = options.longs === String ? "0" : 0;
                        object.tic = 0;
                        object.scan = 0;
                        object.basePeakIntensity = 0;
                    }
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (typeof message.retentionTime === "number")
                            object.retentionTime = options.longs === String ? String(message.retentionTime) : message.retentionTime;
                        else
                            object.retentionTime = options.longs === String ? $util.Long.prototype.toString.call(message.retentionTime) : options.longs === Number ? new $util.LongBits(message.retentionTime.low >>> 0, message.retentionTime.high >>> 0).toNumber(true) : message.retentionTime;
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        object.tic = options.json && !isFinite(message.tic) ? String(message.tic) : message.tic;
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        object.scan = message.scan;
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        object.basePeakIntensity = options.json && !isFinite(message.basePeakIntensity) ? String(message.basePeakIntensity) : message.basePeakIntensity;
                    return object;
                };

                /**
                 * Converts this Ms1Stats to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Ms1Stats
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ms1Stats.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Ms1Stats;
            })();

            dto.Ms2Stats = (function() {

                /**
                 * Properties of a Ms2Stats.
                 * @memberof com.example.dto
                 * @interface IMs2Stats
                 * @property {number|Long|null} [retentionTime] Ms2Stats retentionTime
                 * @property {number|null} [tic] Ms2Stats tic
                 * @property {number|null} [scan] Ms2Stats scan
                 * @property {number|null} [ms1Scan] Ms2Stats ms1Scan
                 * @property {number|null} [precursorMz] Ms2Stats precursorMz
                 * @property {number|null} [precursorCharge] Ms2Stats precursorCharge
                 * @property {number|null} [basePeakIntensity] Ms2Stats basePeakIntensity
                 */

                /**
                 * Constructs a new Ms2Stats.
                 * @memberof com.example.dto
                 * @classdesc Represents a Ms2Stats.
                 * @implements IMs2Stats
                 * @constructor
                 * @param {com.example.dto.IMs2Stats=} [properties] Properties to set
                 */
                function Ms2Stats(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Ms2Stats retentionTime.
                 * @member {number|Long} retentionTime
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.retentionTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Ms2Stats tic.
                 * @member {number} tic
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.tic = 0;

                /**
                 * Ms2Stats scan.
                 * @member {number} scan
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.scan = 0;

                /**
                 * Ms2Stats ms1Scan.
                 * @member {number} ms1Scan
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.ms1Scan = 0;

                /**
                 * Ms2Stats precursorMz.
                 * @member {number} precursorMz
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.precursorMz = 0;

                /**
                 * Ms2Stats precursorCharge.
                 * @member {number} precursorCharge
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.precursorCharge = 0;

                /**
                 * Ms2Stats basePeakIntensity.
                 * @member {number} basePeakIntensity
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 */
                Ms2Stats.prototype.basePeakIntensity = 0;

                /**
                 * Creates a new Ms2Stats instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {com.example.dto.IMs2Stats=} [properties] Properties to set
                 * @returns {com.example.dto.Ms2Stats} Ms2Stats instance
                 */
                Ms2Stats.create = function create(properties) {
                    return new Ms2Stats(properties);
                };

                /**
                 * Encodes the specified Ms2Stats message. Does not implicitly {@link com.example.dto.Ms2Stats.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {com.example.dto.IMs2Stats} message Ms2Stats message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ms2Stats.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.retentionTime);
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.tic);
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.scan);
                    if (message.ms1Scan != null && message.hasOwnProperty("ms1Scan"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ms1Scan);
                    if (message.precursorMz != null && message.hasOwnProperty("precursorMz"))
                        writer.uint32(/* id 5, wireType 5 =*/45).float(message.precursorMz);
                    if (message.precursorCharge != null && message.hasOwnProperty("precursorCharge"))
                        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.precursorCharge);
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        writer.uint32(/* id 7, wireType 5 =*/61).float(message.basePeakIntensity);
                    return writer;
                };

                /**
                 * Encodes the specified Ms2Stats message, length delimited. Does not implicitly {@link com.example.dto.Ms2Stats.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {com.example.dto.IMs2Stats} message Ms2Stats message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ms2Stats.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Ms2Stats message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Ms2Stats} Ms2Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ms2Stats.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Ms2Stats();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.retentionTime = reader.uint64();
                            break;
                        case 2:
                            message.tic = reader.float();
                            break;
                        case 3:
                            message.scan = reader.uint32();
                            break;
                        case 4:
                            message.ms1Scan = reader.uint32();
                            break;
                        case 5:
                            message.precursorMz = reader.float();
                            break;
                        case 6:
                            message.precursorCharge = reader.uint32();
                            break;
                        case 7:
                            message.basePeakIntensity = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Ms2Stats message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Ms2Stats} Ms2Stats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ms2Stats.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Ms2Stats message.
                 * @function verify
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ms2Stats.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (!$util.isInteger(message.retentionTime) && !(message.retentionTime && $util.isInteger(message.retentionTime.low) && $util.isInteger(message.retentionTime.high)))
                            return "retentionTime: integer|Long expected";
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        if (typeof message.tic !== "number")
                            return "tic: number expected";
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        if (!$util.isInteger(message.scan))
                            return "scan: integer expected";
                    if (message.ms1Scan != null && message.hasOwnProperty("ms1Scan"))
                        if (!$util.isInteger(message.ms1Scan))
                            return "ms1Scan: integer expected";
                    if (message.precursorMz != null && message.hasOwnProperty("precursorMz"))
                        if (typeof message.precursorMz !== "number")
                            return "precursorMz: number expected";
                    if (message.precursorCharge != null && message.hasOwnProperty("precursorCharge"))
                        if (!$util.isInteger(message.precursorCharge))
                            return "precursorCharge: integer expected";
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        if (typeof message.basePeakIntensity !== "number")
                            return "basePeakIntensity: number expected";
                    return null;
                };

                /**
                 * Creates a Ms2Stats message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Ms2Stats} Ms2Stats
                 */
                Ms2Stats.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Ms2Stats)
                        return object;
                    var message = new $root.com.example.dto.Ms2Stats();
                    if (object.retentionTime != null)
                        if ($util.Long)
                            (message.retentionTime = $util.Long.fromValue(object.retentionTime)).unsigned = true;
                        else if (typeof object.retentionTime === "string")
                            message.retentionTime = parseInt(object.retentionTime, 10);
                        else if (typeof object.retentionTime === "number")
                            message.retentionTime = object.retentionTime;
                        else if (typeof object.retentionTime === "object")
                            message.retentionTime = new $util.LongBits(object.retentionTime.low >>> 0, object.retentionTime.high >>> 0).toNumber(true);
                    if (object.tic != null)
                        message.tic = Number(object.tic);
                    if (object.scan != null)
                        message.scan = object.scan >>> 0;
                    if (object.ms1Scan != null)
                        message.ms1Scan = object.ms1Scan >>> 0;
                    if (object.precursorMz != null)
                        message.precursorMz = Number(object.precursorMz);
                    if (object.precursorCharge != null)
                        message.precursorCharge = object.precursorCharge >>> 0;
                    if (object.basePeakIntensity != null)
                        message.basePeakIntensity = Number(object.basePeakIntensity);
                    return message;
                };

                /**
                 * Creates a plain object from a Ms2Stats message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Ms2Stats
                 * @static
                 * @param {com.example.dto.Ms2Stats} message Ms2Stats
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ms2Stats.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.retentionTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.retentionTime = options.longs === String ? "0" : 0;
                        object.tic = 0;
                        object.scan = 0;
                        object.ms1Scan = 0;
                        object.precursorMz = 0;
                        object.precursorCharge = 0;
                        object.basePeakIntensity = 0;
                    }
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (typeof message.retentionTime === "number")
                            object.retentionTime = options.longs === String ? String(message.retentionTime) : message.retentionTime;
                        else
                            object.retentionTime = options.longs === String ? $util.Long.prototype.toString.call(message.retentionTime) : options.longs === Number ? new $util.LongBits(message.retentionTime.low >>> 0, message.retentionTime.high >>> 0).toNumber(true) : message.retentionTime;
                    if (message.tic != null && message.hasOwnProperty("tic"))
                        object.tic = options.json && !isFinite(message.tic) ? String(message.tic) : message.tic;
                    if (message.scan != null && message.hasOwnProperty("scan"))
                        object.scan = message.scan;
                    if (message.ms1Scan != null && message.hasOwnProperty("ms1Scan"))
                        object.ms1Scan = message.ms1Scan;
                    if (message.precursorMz != null && message.hasOwnProperty("precursorMz"))
                        object.precursorMz = options.json && !isFinite(message.precursorMz) ? String(message.precursorMz) : message.precursorMz;
                    if (message.precursorCharge != null && message.hasOwnProperty("precursorCharge"))
                        object.precursorCharge = message.precursorCharge;
                    if (message.basePeakIntensity != null && message.hasOwnProperty("basePeakIntensity"))
                        object.basePeakIntensity = options.json && !isFinite(message.basePeakIntensity) ? String(message.basePeakIntensity) : message.basePeakIntensity;
                    return object;
                };

                /**
                 * Converts this Ms2Stats to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Ms2Stats
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ms2Stats.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Ms2Stats;
            })();

            dto.Spectrum = (function() {

                /**
                 * Properties of a Spectrum.
                 * @memberof com.example.dto
                 * @interface ISpectrum
                 * @property {Array.<number>|null} [mz] Spectrum mz
                 * @property {Array.<number>|null} [intensity] Spectrum intensity
                 * @property {com.example.dto.IMs1Stats|null} [ms1Stats] Spectrum ms1Stats
                 * @property {com.example.dto.IMs2Stats|null} [ms2Stats] Spectrum ms2Stats
                 */

                /**
                 * Constructs a new Spectrum.
                 * @memberof com.example.dto
                 * @classdesc Represents a Spectrum.
                 * @implements ISpectrum
                 * @constructor
                 * @param {com.example.dto.ISpectrum=} [properties] Properties to set
                 */
                function Spectrum(properties) {
                    this.mz = [];
                    this.intensity = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Spectrum mz.
                 * @member {Array.<number>} mz
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 */
                Spectrum.prototype.mz = $util.emptyArray;

                /**
                 * Spectrum intensity.
                 * @member {Array.<number>} intensity
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 */
                Spectrum.prototype.intensity = $util.emptyArray;

                /**
                 * Spectrum ms1Stats.
                 * @member {com.example.dto.IMs1Stats|null|undefined} ms1Stats
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 */
                Spectrum.prototype.ms1Stats = null;

                /**
                 * Spectrum ms2Stats.
                 * @member {com.example.dto.IMs2Stats|null|undefined} ms2Stats
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 */
                Spectrum.prototype.ms2Stats = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Spectrum stat.
                 * @member {"ms1Stats"|"ms2Stats"|undefined} stat
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 */
                Object.defineProperty(Spectrum.prototype, "stat", {
                    get: $util.oneOfGetter($oneOfFields = ["ms1Stats", "ms2Stats"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Spectrum instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {com.example.dto.ISpectrum=} [properties] Properties to set
                 * @returns {com.example.dto.Spectrum} Spectrum instance
                 */
                Spectrum.create = function create(properties) {
                    return new Spectrum(properties);
                };

                /**
                 * Encodes the specified Spectrum message. Does not implicitly {@link com.example.dto.Spectrum.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {com.example.dto.ISpectrum} message Spectrum message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Spectrum.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.mz != null && message.mz.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.mz.length; ++i)
                            writer.float(message.mz[i]);
                        writer.ldelim();
                    }
                    if (message.intensity != null && message.intensity.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.intensity.length; ++i)
                            writer.float(message.intensity[i]);
                        writer.ldelim();
                    }
                    if (message.ms1Stats != null && message.hasOwnProperty("ms1Stats"))
                        $root.com.example.dto.Ms1Stats.encode(message.ms1Stats, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.ms2Stats != null && message.hasOwnProperty("ms2Stats"))
                        $root.com.example.dto.Ms2Stats.encode(message.ms2Stats, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Spectrum message, length delimited. Does not implicitly {@link com.example.dto.Spectrum.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {com.example.dto.ISpectrum} message Spectrum message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Spectrum.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Spectrum message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.Spectrum} Spectrum
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Spectrum.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.Spectrum();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.mz && message.mz.length))
                                message.mz = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.mz.push(reader.float());
                            } else
                                message.mz.push(reader.float());
                            break;
                        case 2:
                            if (!(message.intensity && message.intensity.length))
                                message.intensity = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.intensity.push(reader.float());
                            } else
                                message.intensity.push(reader.float());
                            break;
                        case 4:
                            message.ms1Stats = $root.com.example.dto.Ms1Stats.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.ms2Stats = $root.com.example.dto.Ms2Stats.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Spectrum message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.Spectrum} Spectrum
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Spectrum.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Spectrum message.
                 * @function verify
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Spectrum.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.mz != null && message.hasOwnProperty("mz")) {
                        if (!Array.isArray(message.mz))
                            return "mz: array expected";
                        for (var i = 0; i < message.mz.length; ++i)
                            if (typeof message.mz[i] !== "number")
                                return "mz: number[] expected";
                    }
                    if (message.intensity != null && message.hasOwnProperty("intensity")) {
                        if (!Array.isArray(message.intensity))
                            return "intensity: array expected";
                        for (var i = 0; i < message.intensity.length; ++i)
                            if (typeof message.intensity[i] !== "number")
                                return "intensity: number[] expected";
                    }
                    if (message.ms1Stats != null && message.hasOwnProperty("ms1Stats")) {
                        properties.stat = 1;
                        {
                            var error = $root.com.example.dto.Ms1Stats.verify(message.ms1Stats);
                            if (error)
                                return "ms1Stats." + error;
                        }
                    }
                    if (message.ms2Stats != null && message.hasOwnProperty("ms2Stats")) {
                        if (properties.stat === 1)
                            return "stat: multiple values";
                        properties.stat = 1;
                        {
                            var error = $root.com.example.dto.Ms2Stats.verify(message.ms2Stats);
                            if (error)
                                return "ms2Stats." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Spectrum message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.Spectrum} Spectrum
                 */
                Spectrum.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.Spectrum)
                        return object;
                    var message = new $root.com.example.dto.Spectrum();
                    if (object.mz) {
                        if (!Array.isArray(object.mz))
                            throw TypeError(".com.example.dto.Spectrum.mz: array expected");
                        message.mz = [];
                        for (var i = 0; i < object.mz.length; ++i)
                            message.mz[i] = Number(object.mz[i]);
                    }
                    if (object.intensity) {
                        if (!Array.isArray(object.intensity))
                            throw TypeError(".com.example.dto.Spectrum.intensity: array expected");
                        message.intensity = [];
                        for (var i = 0; i < object.intensity.length; ++i)
                            message.intensity[i] = Number(object.intensity[i]);
                    }
                    if (object.ms1Stats != null) {
                        if (typeof object.ms1Stats !== "object")
                            throw TypeError(".com.example.dto.Spectrum.ms1Stats: object expected");
                        message.ms1Stats = $root.com.example.dto.Ms1Stats.fromObject(object.ms1Stats);
                    }
                    if (object.ms2Stats != null) {
                        if (typeof object.ms2Stats !== "object")
                            throw TypeError(".com.example.dto.Spectrum.ms2Stats: object expected");
                        message.ms2Stats = $root.com.example.dto.Ms2Stats.fromObject(object.ms2Stats);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Spectrum message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.Spectrum
                 * @static
                 * @param {com.example.dto.Spectrum} message Spectrum
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Spectrum.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.mz = [];
                        object.intensity = [];
                    }
                    if (message.mz && message.mz.length) {
                        object.mz = [];
                        for (var j = 0; j < message.mz.length; ++j)
                            object.mz[j] = options.json && !isFinite(message.mz[j]) ? String(message.mz[j]) : message.mz[j];
                    }
                    if (message.intensity && message.intensity.length) {
                        object.intensity = [];
                        for (var j = 0; j < message.intensity.length; ++j)
                            object.intensity[j] = options.json && !isFinite(message.intensity[j]) ? String(message.intensity[j]) : message.intensity[j];
                    }
                    if (message.ms1Stats != null && message.hasOwnProperty("ms1Stats")) {
                        object.ms1Stats = $root.com.example.dto.Ms1Stats.toObject(message.ms1Stats, options);
                        if (options.oneofs)
                            object.stat = "ms1Stats";
                    }
                    if (message.ms2Stats != null && message.hasOwnProperty("ms2Stats")) {
                        object.ms2Stats = $root.com.example.dto.Ms2Stats.toObject(message.ms2Stats, options);
                        if (options.oneofs)
                            object.stat = "ms2Stats";
                    }
                    return object;
                };

                /**
                 * Converts this Spectrum to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.Spectrum
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Spectrum.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Spectrum;
            })();

            dto.ObservedIons = (function() {

                /**
                 * Properties of an ObservedIons.
                 * @memberof com.example.dto
                 * @interface IObservedIons
                 * @property {Array.<com.example.dto.IIon>|null} [ions] ObservedIons ions
                 * @property {com.example.dto.ISpectrum|null} [spectrum] ObservedIons spectrum
                 * @property {number|null} [mz] ObservedIons mz
                 * @property {number|null} [z] ObservedIons z
                 * @property {number|Long|null} [retentionTime] ObservedIons retentionTime
                 */

                /**
                 * Constructs a new ObservedIons.
                 * @memberof com.example.dto
                 * @classdesc Represents an ObservedIons.
                 * @implements IObservedIons
                 * @constructor
                 * @param {com.example.dto.IObservedIons=} [properties] Properties to set
                 */
                function ObservedIons(properties) {
                    this.ions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ObservedIons ions.
                 * @member {Array.<com.example.dto.IIon>} ions
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 */
                ObservedIons.prototype.ions = $util.emptyArray;

                /**
                 * ObservedIons spectrum.
                 * @member {com.example.dto.ISpectrum|null|undefined} spectrum
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 */
                ObservedIons.prototype.spectrum = null;

                /**
                 * ObservedIons mz.
                 * @member {number} mz
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 */
                ObservedIons.prototype.mz = 0;

                /**
                 * ObservedIons z.
                 * @member {number} z
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 */
                ObservedIons.prototype.z = 0;

                /**
                 * ObservedIons retentionTime.
                 * @member {number|Long} retentionTime
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 */
                ObservedIons.prototype.retentionTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new ObservedIons instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {com.example.dto.IObservedIons=} [properties] Properties to set
                 * @returns {com.example.dto.ObservedIons} ObservedIons instance
                 */
                ObservedIons.create = function create(properties) {
                    return new ObservedIons(properties);
                };

                /**
                 * Encodes the specified ObservedIons message. Does not implicitly {@link com.example.dto.ObservedIons.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {com.example.dto.IObservedIons} message ObservedIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObservedIons.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ions != null && message.ions.length)
                        for (var i = 0; i < message.ions.length; ++i)
                            $root.com.example.dto.Ion.encode(message.ions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.spectrum != null && message.hasOwnProperty("spectrum"))
                        $root.com.example.dto.Spectrum.encode(message.spectrum, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        writer.uint32(/* id 4, wireType 5 =*/37).float(message.mz);
                    if (message.z != null && message.hasOwnProperty("z"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.z);
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.retentionTime);
                    return writer;
                };

                /**
                 * Encodes the specified ObservedIons message, length delimited. Does not implicitly {@link com.example.dto.ObservedIons.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {com.example.dto.IObservedIons} message ObservedIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObservedIons.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ObservedIons message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.ObservedIons} ObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObservedIons.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.ObservedIons();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.ions && message.ions.length))
                                message.ions = [];
                            message.ions.push($root.com.example.dto.Ion.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.spectrum = $root.com.example.dto.Spectrum.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.mz = reader.float();
                            break;
                        case 5:
                            message.z = reader.uint32();
                            break;
                        case 6:
                            message.retentionTime = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ObservedIons message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.ObservedIons} ObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObservedIons.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ObservedIons message.
                 * @function verify
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ObservedIons.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ions != null && message.hasOwnProperty("ions")) {
                        if (!Array.isArray(message.ions))
                            return "ions: array expected";
                        for (var i = 0; i < message.ions.length; ++i) {
                            var error = $root.com.example.dto.Ion.verify(message.ions[i]);
                            if (error)
                                return "ions." + error;
                        }
                    }
                    if (message.spectrum != null && message.hasOwnProperty("spectrum")) {
                        var error = $root.com.example.dto.Spectrum.verify(message.spectrum);
                        if (error)
                            return "spectrum." + error;
                    }
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        if (typeof message.mz !== "number")
                            return "mz: number expected";
                    if (message.z != null && message.hasOwnProperty("z"))
                        if (!$util.isInteger(message.z))
                            return "z: integer expected";
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (!$util.isInteger(message.retentionTime) && !(message.retentionTime && $util.isInteger(message.retentionTime.low) && $util.isInteger(message.retentionTime.high)))
                            return "retentionTime: integer|Long expected";
                    return null;
                };

                /**
                 * Creates an ObservedIons message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.ObservedIons} ObservedIons
                 */
                ObservedIons.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.ObservedIons)
                        return object;
                    var message = new $root.com.example.dto.ObservedIons();
                    if (object.ions) {
                        if (!Array.isArray(object.ions))
                            throw TypeError(".com.example.dto.ObservedIons.ions: array expected");
                        message.ions = [];
                        for (var i = 0; i < object.ions.length; ++i) {
                            if (typeof object.ions[i] !== "object")
                                throw TypeError(".com.example.dto.ObservedIons.ions: object expected");
                            message.ions[i] = $root.com.example.dto.Ion.fromObject(object.ions[i]);
                        }
                    }
                    if (object.spectrum != null) {
                        if (typeof object.spectrum !== "object")
                            throw TypeError(".com.example.dto.ObservedIons.spectrum: object expected");
                        message.spectrum = $root.com.example.dto.Spectrum.fromObject(object.spectrum);
                    }
                    if (object.mz != null)
                        message.mz = Number(object.mz);
                    if (object.z != null)
                        message.z = object.z >>> 0;
                    if (object.retentionTime != null)
                        if ($util.Long)
                            (message.retentionTime = $util.Long.fromValue(object.retentionTime)).unsigned = true;
                        else if (typeof object.retentionTime === "string")
                            message.retentionTime = parseInt(object.retentionTime, 10);
                        else if (typeof object.retentionTime === "number")
                            message.retentionTime = object.retentionTime;
                        else if (typeof object.retentionTime === "object")
                            message.retentionTime = new $util.LongBits(object.retentionTime.low >>> 0, object.retentionTime.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from an ObservedIons message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.ObservedIons
                 * @static
                 * @param {com.example.dto.ObservedIons} message ObservedIons
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ObservedIons.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.ions = [];
                    if (options.defaults) {
                        object.spectrum = null;
                        object.mz = 0;
                        object.z = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.retentionTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.retentionTime = options.longs === String ? "0" : 0;
                    }
                    if (message.ions && message.ions.length) {
                        object.ions = [];
                        for (var j = 0; j < message.ions.length; ++j)
                            object.ions[j] = $root.com.example.dto.Ion.toObject(message.ions[j], options);
                    }
                    if (message.spectrum != null && message.hasOwnProperty("spectrum"))
                        object.spectrum = $root.com.example.dto.Spectrum.toObject(message.spectrum, options);
                    if (message.mz != null && message.hasOwnProperty("mz"))
                        object.mz = options.json && !isFinite(message.mz) ? String(message.mz) : message.mz;
                    if (message.z != null && message.hasOwnProperty("z"))
                        object.z = message.z;
                    if (message.retentionTime != null && message.hasOwnProperty("retentionTime"))
                        if (typeof message.retentionTime === "number")
                            object.retentionTime = options.longs === String ? String(message.retentionTime) : message.retentionTime;
                        else
                            object.retentionTime = options.longs === String ? $util.Long.prototype.toString.call(message.retentionTime) : options.longs === Number ? new $util.LongBits(message.retentionTime.low >>> 0, message.retentionTime.high >>> 0).toNumber(true) : message.retentionTime;
                    return object;
                };

                /**
                 * Converts this ObservedIons to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.ObservedIons
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ObservedIons.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ObservedIons;
            })();

            dto.FractionObservedIons = (function() {

                /**
                 * Properties of a FractionObservedIons.
                 * @memberof com.example.dto
                 * @interface IFractionObservedIons
                 * @property {Object.<string,com.example.dto.IObservedIons>|null} [scanumObservedIons] FractionObservedIons scanumObservedIons
                 */

                /**
                 * Constructs a new FractionObservedIons.
                 * @memberof com.example.dto
                 * @classdesc Represents a FractionObservedIons.
                 * @implements IFractionObservedIons
                 * @constructor
                 * @param {com.example.dto.IFractionObservedIons=} [properties] Properties to set
                 */
                function FractionObservedIons(properties) {
                    this.scanumObservedIons = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FractionObservedIons scanumObservedIons.
                 * @member {Object.<string,com.example.dto.IObservedIons>} scanumObservedIons
                 * @memberof com.example.dto.FractionObservedIons
                 * @instance
                 */
                FractionObservedIons.prototype.scanumObservedIons = $util.emptyObject;

                /**
                 * Creates a new FractionObservedIons instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {com.example.dto.IFractionObservedIons=} [properties] Properties to set
                 * @returns {com.example.dto.FractionObservedIons} FractionObservedIons instance
                 */
                FractionObservedIons.create = function create(properties) {
                    return new FractionObservedIons(properties);
                };

                /**
                 * Encodes the specified FractionObservedIons message. Does not implicitly {@link com.example.dto.FractionObservedIons.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {com.example.dto.IFractionObservedIons} message FractionObservedIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FractionObservedIons.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.scanumObservedIons != null && message.hasOwnProperty("scanumObservedIons"))
                        for (var keys = Object.keys(message.scanumObservedIons), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                            $root.com.example.dto.ObservedIons.encode(message.scanumObservedIons[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified FractionObservedIons message, length delimited. Does not implicitly {@link com.example.dto.FractionObservedIons.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {com.example.dto.IFractionObservedIons} message FractionObservedIons message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FractionObservedIons.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FractionObservedIons message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.FractionObservedIons} FractionObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FractionObservedIons.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.FractionObservedIons(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            reader.skip().pos++;
                            if (message.scanumObservedIons === $util.emptyObject)
                                message.scanumObservedIons = {};
                            key = reader.uint32();
                            reader.pos++;
                            message.scanumObservedIons[key] = $root.com.example.dto.ObservedIons.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FractionObservedIons message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.FractionObservedIons} FractionObservedIons
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FractionObservedIons.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FractionObservedIons message.
                 * @function verify
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FractionObservedIons.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.scanumObservedIons != null && message.hasOwnProperty("scanumObservedIons")) {
                        if (!$util.isObject(message.scanumObservedIons))
                            return "scanumObservedIons: object expected";
                        var key = Object.keys(message.scanumObservedIons);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "scanumObservedIons: integer key{k:uint32} expected";
                            {
                                var error = $root.com.example.dto.ObservedIons.verify(message.scanumObservedIons[key[i]]);
                                if (error)
                                    return "scanumObservedIons." + error;
                            }
                        }
                    }
                    return null;
                };

                /**
                 * Creates a FractionObservedIons message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.FractionObservedIons} FractionObservedIons
                 */
                FractionObservedIons.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.FractionObservedIons)
                        return object;
                    var message = new $root.com.example.dto.FractionObservedIons();
                    if (object.scanumObservedIons) {
                        if (typeof object.scanumObservedIons !== "object")
                            throw TypeError(".com.example.dto.FractionObservedIons.scanumObservedIons: object expected");
                        message.scanumObservedIons = {};
                        for (var keys = Object.keys(object.scanumObservedIons), i = 0; i < keys.length; ++i) {
                            if (typeof object.scanumObservedIons[keys[i]] !== "object")
                                throw TypeError(".com.example.dto.FractionObservedIons.scanumObservedIons: object expected");
                            message.scanumObservedIons[keys[i]] = $root.com.example.dto.ObservedIons.fromObject(object.scanumObservedIons[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FractionObservedIons message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.FractionObservedIons
                 * @static
                 * @param {com.example.dto.FractionObservedIons} message FractionObservedIons
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FractionObservedIons.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.scanumObservedIons = {};
                    var keys2;
                    if (message.scanumObservedIons && (keys2 = Object.keys(message.scanumObservedIons)).length) {
                        object.scanumObservedIons = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.scanumObservedIons[keys2[j]] = $root.com.example.dto.ObservedIons.toObject(message.scanumObservedIons[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this FractionObservedIons to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.FractionObservedIons
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FractionObservedIons.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FractionObservedIons;
            })();

            dto.PsmIonMatch = (function() {

                /**
                 * Properties of a PsmIonMatch.
                 * @memberof com.example.dto
                 * @interface IPsmIonMatch
                 * @property {string|null} [sequence] PsmIonMatch sequence
                 * @property {Object.<string,com.example.dto.IFractionObservedIons>|null} [fractionObservedIons] PsmIonMatch fractionObservedIons
                 * @property {Array.<com.example.dto.ITheoreticalIons>|null} [theoreticalIons] PsmIonMatch theoreticalIons
                 * @property {com.example.dto.ActivationMethod|null} [activationMethod] PsmIonMatch activationMethod
                 */

                /**
                 * Constructs a new PsmIonMatch.
                 * @memberof com.example.dto
                 * @classdesc Represents a PsmIonMatch.
                 * @implements IPsmIonMatch
                 * @constructor
                 * @param {com.example.dto.IPsmIonMatch=} [properties] Properties to set
                 */
                function PsmIonMatch(properties) {
                    this.fractionObservedIons = {};
                    this.theoreticalIons = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PsmIonMatch sequence.
                 * @member {string} sequence
                 * @memberof com.example.dto.PsmIonMatch
                 * @instance
                 */
                PsmIonMatch.prototype.sequence = "";

                /**
                 * PsmIonMatch fractionObservedIons.
                 * @member {Object.<string,com.example.dto.IFractionObservedIons>} fractionObservedIons
                 * @memberof com.example.dto.PsmIonMatch
                 * @instance
                 */
                PsmIonMatch.prototype.fractionObservedIons = $util.emptyObject;

                /**
                 * PsmIonMatch theoreticalIons.
                 * @member {Array.<com.example.dto.ITheoreticalIons>} theoreticalIons
                 * @memberof com.example.dto.PsmIonMatch
                 * @instance
                 */
                PsmIonMatch.prototype.theoreticalIons = $util.emptyArray;

                /**
                 * PsmIonMatch activationMethod.
                 * @member {com.example.dto.ActivationMethod} activationMethod
                 * @memberof com.example.dto.PsmIonMatch
                 * @instance
                 */
                PsmIonMatch.prototype.activationMethod = 0;

                /**
                 * Creates a new PsmIonMatch instance using the specified properties.
                 * @function create
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {com.example.dto.IPsmIonMatch=} [properties] Properties to set
                 * @returns {com.example.dto.PsmIonMatch} PsmIonMatch instance
                 */
                PsmIonMatch.create = function create(properties) {
                    return new PsmIonMatch(properties);
                };

                /**
                 * Encodes the specified PsmIonMatch message. Does not implicitly {@link com.example.dto.PsmIonMatch.verify|verify} messages.
                 * @function encode
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {com.example.dto.IPsmIonMatch} message PsmIonMatch message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PsmIonMatch.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sequence);
                    if (message.fractionObservedIons != null && message.hasOwnProperty("fractionObservedIons"))
                        for (var keys = Object.keys(message.fractionObservedIons), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.com.example.dto.FractionObservedIons.encode(message.fractionObservedIons[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.theoreticalIons != null && message.theoreticalIons.length)
                        for (var i = 0; i < message.theoreticalIons.length; ++i)
                            $root.com.example.dto.TheoreticalIons.encode(message.theoreticalIons[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.activationMethod);
                    return writer;
                };

                /**
                 * Encodes the specified PsmIonMatch message, length delimited. Does not implicitly {@link com.example.dto.PsmIonMatch.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {com.example.dto.IPsmIonMatch} message PsmIonMatch message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PsmIonMatch.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PsmIonMatch message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.example.dto.PsmIonMatch} PsmIonMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PsmIonMatch.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.example.dto.PsmIonMatch(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sequence = reader.string();
                            break;
                        case 2:
                            reader.skip().pos++;
                            if (message.fractionObservedIons === $util.emptyObject)
                                message.fractionObservedIons = {};
                            key = reader.string();
                            reader.pos++;
                            message.fractionObservedIons[key] = $root.com.example.dto.FractionObservedIons.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.theoreticalIons && message.theoreticalIons.length))
                                message.theoreticalIons = [];
                            message.theoreticalIons.push($root.com.example.dto.TheoreticalIons.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            message.activationMethod = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PsmIonMatch message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.example.dto.PsmIonMatch} PsmIonMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PsmIonMatch.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PsmIonMatch message.
                 * @function verify
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PsmIonMatch.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        if (!$util.isString(message.sequence))
                            return "sequence: string expected";
                    if (message.fractionObservedIons != null && message.hasOwnProperty("fractionObservedIons")) {
                        if (!$util.isObject(message.fractionObservedIons))
                            return "fractionObservedIons: object expected";
                        var key = Object.keys(message.fractionObservedIons);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.com.example.dto.FractionObservedIons.verify(message.fractionObservedIons[key[i]]);
                            if (error)
                                return "fractionObservedIons." + error;
                        }
                    }
                    if (message.theoreticalIons != null && message.hasOwnProperty("theoreticalIons")) {
                        if (!Array.isArray(message.theoreticalIons))
                            return "theoreticalIons: array expected";
                        for (var i = 0; i < message.theoreticalIons.length; ++i) {
                            var error = $root.com.example.dto.TheoreticalIons.verify(message.theoreticalIons[i]);
                            if (error)
                                return "theoreticalIons." + error;
                        }
                    }
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        switch (message.activationMethod) {
                        default:
                            return "activationMethod: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a PsmIonMatch message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.example.dto.PsmIonMatch} PsmIonMatch
                 */
                PsmIonMatch.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.example.dto.PsmIonMatch)
                        return object;
                    var message = new $root.com.example.dto.PsmIonMatch();
                    if (object.sequence != null)
                        message.sequence = String(object.sequence);
                    if (object.fractionObservedIons) {
                        if (typeof object.fractionObservedIons !== "object")
                            throw TypeError(".com.example.dto.PsmIonMatch.fractionObservedIons: object expected");
                        message.fractionObservedIons = {};
                        for (var keys = Object.keys(object.fractionObservedIons), i = 0; i < keys.length; ++i) {
                            if (typeof object.fractionObservedIons[keys[i]] !== "object")
                                throw TypeError(".com.example.dto.PsmIonMatch.fractionObservedIons: object expected");
                            message.fractionObservedIons[keys[i]] = $root.com.example.dto.FractionObservedIons.fromObject(object.fractionObservedIons[keys[i]]);
                        }
                    }
                    if (object.theoreticalIons) {
                        if (!Array.isArray(object.theoreticalIons))
                            throw TypeError(".com.example.dto.PsmIonMatch.theoreticalIons: array expected");
                        message.theoreticalIons = [];
                        for (var i = 0; i < object.theoreticalIons.length; ++i) {
                            if (typeof object.theoreticalIons[i] !== "object")
                                throw TypeError(".com.example.dto.PsmIonMatch.theoreticalIons: object expected");
                            message.theoreticalIons[i] = $root.com.example.dto.TheoreticalIons.fromObject(object.theoreticalIons[i]);
                        }
                    }
                    switch (object.activationMethod) {
                    case "UNDEFINED":
                    case 0:
                        message.activationMethod = 0;
                        break;
                    case "CID":
                    case 1:
                        message.activationMethod = 1;
                        break;
                    case "HCD":
                    case 2:
                        message.activationMethod = 2;
                        break;
                    case "ECD":
                    case 3:
                        message.activationMethod = 3;
                        break;
                    case "MIX":
                    case 4:
                        message.activationMethod = 4;
                        break;
                    case "PQD":
                    case 5:
                        message.activationMethod = 5;
                        break;
                    case "IRMPD":
                    case 6:
                        message.activationMethod = 6;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PsmIonMatch message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.example.dto.PsmIonMatch
                 * @static
                 * @param {com.example.dto.PsmIonMatch} message PsmIonMatch
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PsmIonMatch.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.theoreticalIons = [];
                    if (options.objects || options.defaults)
                        object.fractionObservedIons = {};
                    if (options.defaults) {
                        object.sequence = "";
                        object.activationMethod = options.enums === String ? "UNDEFINED" : 0;
                    }
                    if (message.sequence != null && message.hasOwnProperty("sequence"))
                        object.sequence = message.sequence;
                    var keys2;
                    if (message.fractionObservedIons && (keys2 = Object.keys(message.fractionObservedIons)).length) {
                        object.fractionObservedIons = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.fractionObservedIons[keys2[j]] = $root.com.example.dto.FractionObservedIons.toObject(message.fractionObservedIons[keys2[j]], options);
                    }
                    if (message.theoreticalIons && message.theoreticalIons.length) {
                        object.theoreticalIons = [];
                        for (var j = 0; j < message.theoreticalIons.length; ++j)
                            object.theoreticalIons[j] = $root.com.example.dto.TheoreticalIons.toObject(message.theoreticalIons[j], options);
                    }
                    if (message.activationMethod != null && message.hasOwnProperty("activationMethod"))
                        object.activationMethod = options.enums === String ? $root.com.example.dto.ActivationMethod[message.activationMethod] : message.activationMethod;
                    return object;
                };

                /**
                 * Converts this PsmIonMatch to JSON.
                 * @function toJSON
                 * @memberof com.example.dto.PsmIonMatch
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PsmIonMatch.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PsmIonMatch;
            })();

            return dto;
        })();

        return example;
    })();

    return com;
})();

module.exports = $root;
