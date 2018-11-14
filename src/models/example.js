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

            return dto;
        })();

        return example;
    })();

    return com;
})();

module.exports = $root;
