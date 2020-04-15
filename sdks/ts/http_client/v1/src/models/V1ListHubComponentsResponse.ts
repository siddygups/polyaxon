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
import {
  V1HubComponent,
  V1HubComponentFromJSON,
  V1HubComponentFromJSONTyped,
  V1HubComponentToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1ListHubComponentsResponse
 */
export interface V1ListHubComponentsResponse {
  /**
   *
   * @type {number}
   * @memberof V1ListHubComponentsResponse
   */
  count?: number;
  /**
   *
   * @type {Array<V1HubComponent>}
   * @memberof V1ListHubComponentsResponse
   */
  results?: Array<V1HubComponent>;
  /**
   *
   * @type {string}
   * @memberof V1ListHubComponentsResponse
   */
  previous?: string;
  /**
   *
   * @type {string}
   * @memberof V1ListHubComponentsResponse
   */
  next?: string;
}

export function V1ListHubComponentsResponseFromJSON(json: any): V1ListHubComponentsResponse {
  return V1ListHubComponentsResponseFromJSONTyped(json, false);
}

export function V1ListHubComponentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListHubComponentsResponse {
  if ((json === undefined) || (json === null)) {
    return json;
  }
  return {

    'count': !exists(json, 'count') ? undefined : json['count'],
    'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1HubComponentFromJSON)),
    'previous': !exists(json, 'previous') ? undefined : json['previous'],
    'next': !exists(json, 'next') ? undefined : json['next'],
  };
}

export function V1ListHubComponentsResponseToJSON(value?: V1ListHubComponentsResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {

    'count': value.count,
    'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1HubComponentToJSON)),
    'previous': value.previous,
    'next': value.next,
  };
}


