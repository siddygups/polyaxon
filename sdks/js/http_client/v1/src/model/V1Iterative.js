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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.79
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Iterative model module.
 * @module model/V1Iterative
 * @version 1.0.79
 */
class V1Iterative {
  /**
   * Constructs a new <code>V1Iterative</code>.
   * @alias module:model/V1Iterative
   */
  constructor() {

    V1Iterative.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {
  }

  /**
   * Constructs a <code>V1Iterative</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Iterative} obj Optional instance to populate.
   * @return {module:model/V1Iterative} The populated <code>V1Iterative</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V1Iterative();

      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], {'String': Object});
      }
      if (data.hasOwnProperty('num_iterations')) {
        obj['num_iterations'] = ApiClient.convertToType(data['num_iterations'], 'Number');
      }
      if (data.hasOwnProperty('container')) {
        obj['container'] = ApiClient.convertToType(data['container'], Object);
      }
      if (data.hasOwnProperty('seed')) {
        obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
      }
      if (data.hasOwnProperty('concurrency')) {
        obj['concurrency'] = ApiClient.convertToType(data['concurrency'], 'Number');
      }
      if (data.hasOwnProperty('early_stopping')) {
        obj['early_stopping'] = ApiClient.convertToType(data['early_stopping'], [Object]);
      }
    }
    return obj;
  }


}

/**
 * @member {String} kind
 * @default 'iterative'
 */
V1Iterative.prototype['kind'] = 'iterative';

/**
 * @member {Object.<String, Object>} params
 */
V1Iterative.prototype['params'] = undefined;

/**
 * @member {Number} num_iterations
 */
V1Iterative.prototype['num_iterations'] = undefined;

/**
 * @member {Object} container
 */
V1Iterative.prototype['container'] = undefined;

/**
 * @member {Number} seed
 */
V1Iterative.prototype['seed'] = undefined;

/**
 * @member {Number} concurrency
 */
V1Iterative.prototype['concurrency'] = undefined;

/**
 * @member {Array.<Object>} early_stopping
 */
V1Iterative.prototype['early_stopping'] = undefined;


export default V1Iterative;

