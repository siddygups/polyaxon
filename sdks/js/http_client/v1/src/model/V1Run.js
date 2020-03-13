// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.5
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1CloningStrategy', 'model/V1RunKind', 'model/V1StatusCondition', 'model/V1Statuses'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1CloningStrategy'), require('./V1RunKind'), require('./V1StatusCondition'), require('./V1Statuses'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Run = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1CloningStrategy, root.PolyaxonSdk.V1RunKind, root.PolyaxonSdk.V1StatusCondition, root.PolyaxonSdk.V1Statuses);
  }
}(this, function(ApiClient, V1CloningStrategy, V1RunKind, V1StatusCondition, V1Statuses) {
  'use strict';

  /**
   * The V1Run model module.
   * @module model/V1Run
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>V1Run</code>.
   * @alias module:model/V1Run
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Run</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Run} obj Optional instance to populate.
   * @return {module:model/V1Run} The populated <code>V1Run</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('project'))
        obj.project = ApiClient.convertToType(data['project'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.created_at = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updated_at = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('started_at'))
        obj.started_at = ApiClient.convertToType(data['started_at'], 'Date');
      if (data.hasOwnProperty('finished_at'))
        obj.finished_at = ApiClient.convertToType(data['finished_at'], 'Date');
      if (data.hasOwnProperty('run_time'))
        obj.run_time = ApiClient.convertToType(data['run_time'], 'Number');
      if (data.hasOwnProperty('is_managed'))
        obj.is_managed = ApiClient.convertToType(data['is_managed'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = V1Statuses.constructFromObject(data['status']);
      if (data.hasOwnProperty('bookmarked'))
        obj.bookmarked = ApiClient.convertToType(data['bookmarked'], 'Boolean');
      if (data.hasOwnProperty('meta_info'))
        obj.meta_info = ApiClient.convertToType(data['meta_info'], Object);
      if (data.hasOwnProperty('is_helper'))
        obj.is_helper = ApiClient.convertToType(data['is_helper'], 'Boolean');
      if (data.hasOwnProperty('kind'))
        obj.kind = V1RunKind.constructFromObject(data['kind']);
      if (data.hasOwnProperty('meta_kind'))
        obj.meta_kind = V1RunKind.constructFromObject(data['meta_kind']);
      if (data.hasOwnProperty('hub'))
        obj.hub = ApiClient.convertToType(data['hub'], 'String');
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], Object);
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], Object);
      if (data.hasOwnProperty('is_resume'))
        obj.is_resume = ApiClient.convertToType(data['is_resume'], 'Boolean');
      if (data.hasOwnProperty('is_clone'))
        obj.is_clone = ApiClient.convertToType(data['is_clone'], 'Boolean');
      if (data.hasOwnProperty('cloning_strategy'))
        obj.cloning_strategy = V1CloningStrategy.constructFromObject(data['cloning_strategy']);
      if (data.hasOwnProperty('pipeline'))
        obj.pipeline = ApiClient.convertToType(data['pipeline'], 'String');
      if (data.hasOwnProperty('original'))
        obj.original = ApiClient.convertToType(data['original'], 'String');
      if (data.hasOwnProperty('pipeline_name'))
        obj.pipeline_name = ApiClient.convertToType(data['pipeline_name'], 'String');
      if (data.hasOwnProperty('original_name'))
        obj.original_name = ApiClient.convertToType(data['original_name'], 'String');
      if (data.hasOwnProperty('status_conditions'))
        obj.status_conditions = ApiClient.convertToType(data['status_conditions'], [V1StatusCondition]);
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * @member {String} owner
   */
  exports.prototype.owner = undefined;

  /**
   * @member {String} project
   */
  exports.prototype.project = undefined;

  /**
   * @member {Date} created_at
   */
  exports.prototype.created_at = undefined;

  /**
   * @member {Date} updated_at
   */
  exports.prototype.updated_at = undefined;

  /**
   * @member {Date} started_at
   */
  exports.prototype.started_at = undefined;

  /**
   * @member {Date} finished_at
   */
  exports.prototype.finished_at = undefined;

  /**
   * @member {Number} run_time
   */
  exports.prototype.run_time = undefined;

  /**
   * @member {String} is_managed
   */
  exports.prototype.is_managed = undefined;

  /**
   * @member {String} content
   */
  exports.prototype.content = undefined;

  /**
   * @member {module:model/V1Statuses} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Boolean} bookmarked
   */
  exports.prototype.bookmarked = undefined;

  /**
   * @member {Object} meta_info
   */
  exports.prototype.meta_info = undefined;

  /**
   * @member {Boolean} is_helper
   */
  exports.prototype.is_helper = undefined;

  /**
   * @member {module:model/V1RunKind} kind
   */
  exports.prototype.kind = undefined;

  /**
   * @member {module:model/V1RunKind} meta_kind
   */
  exports.prototype.meta_kind = undefined;

  /**
   * @member {String} hub
   */
  exports.prototype.hub = undefined;

  /**
   * @member {Object} inputs
   */
  exports.prototype.inputs = undefined;

  /**
   * @member {Object} outputs
   */
  exports.prototype.outputs = undefined;

  /**
   * @member {Boolean} is_resume
   */
  exports.prototype.is_resume = undefined;

  /**
   * @member {Boolean} is_clone
   */
  exports.prototype.is_clone = undefined;

  /**
   * @member {module:model/V1CloningStrategy} cloning_strategy
   */
  exports.prototype.cloning_strategy = undefined;

  /**
   * @member {String} pipeline
   */
  exports.prototype.pipeline = undefined;

  /**
   * @member {String} original
   */
  exports.prototype.original = undefined;

  /**
   * @member {String} pipeline_name
   */
  exports.prototype.pipeline_name = undefined;

  /**
   * @member {String} original_name
   */
  exports.prototype.original_name = undefined;

  /**
   * @member {Array.<module:model/V1StatusCondition>} status_conditions
   */
  exports.prototype.status_conditions = undefined;

  return exports;

}));
