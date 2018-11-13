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

            return dto;
        })();

        return example;
    })();

    return com;
})();

module.exports = $root;
