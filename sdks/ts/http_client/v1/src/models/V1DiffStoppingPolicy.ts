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

/* tslint:disable */
/* eslint-disable */
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
 */

import {exists, mapValues} from '../runtime';
/**
 * Early stopping with diff factor stopping, this policy computes checks runs against the best run and stops those whose performance is worse than the best by the factor defined by the user.
 * @export
 * @interface V1DiffStoppingPolicy
 */
export interface V1DiffStoppingPolicy {
  /**
   *
   * @type {string}
   * @memberof V1DiffStoppingPolicy
   */
  kind?: string;
  /**
   *
   * @type {number}
   * @memberof V1DiffStoppingPolicy
   */
  percent?: number;
  /**
   * Interval/Frequency for applying the policy.
   * @type {number}
   * @memberof V1DiffStoppingPolicy
   */
  evaluation_interval?: number;
  /**
   *
   * @type {number}
   * @memberof V1DiffStoppingPolicy
   */
  min_interval?: number;
  /**
   *
   * @type {number}
   * @memberof V1DiffStoppingPolicy
   */
  min_samples?: number;
}

export function V1DiffStoppingPolicyFromJSON(json: any): V1DiffStoppingPolicy {
  return V1DiffStoppingPolicyFromJSONTyped(json, false);
}

export function V1DiffStoppingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DiffStoppingPolicy {
  if ((json === undefined) || (json === null)) {
    return json;
  }
  return {

    'kind': !exists(json, 'kind') ? undefined : json['kind'],
    'percent': !exists(json, 'percent') ? undefined : json['percent'],
    'evaluation_interval': !exists(json, 'evaluation_interval') ? undefined : json['evaluation_interval'],
    'min_interval': !exists(json, 'min_interval') ? undefined : json['min_interval'],
    'min_samples': !exists(json, 'min_samples') ? undefined : json['min_samples'],
  };
}

export function V1DiffStoppingPolicyToJSON(value?: V1DiffStoppingPolicy | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {

    'kind': value.kind,
    'percent': value.percent,
    'evaluation_interval': value.evaluation_interval,
    'min_interval': value.min_interval,
    'min_samples': value.min_samples,
  };
}


