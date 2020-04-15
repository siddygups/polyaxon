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
 * 
 * @export
 * @interface V1OrganizationMember
 */
export interface V1OrganizationMember {
  /**
   *
   * @type {string}
   * @memberof V1OrganizationMember
   */
  user?: string;
  /**
   *
   * @type {string}
   * @memberof V1OrganizationMember
   */
  user_email?: string;
  /**
   *
   * @type {string}
   * @memberof V1OrganizationMember
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof V1OrganizationMember
   */
  role?: string;
  /**
   *
   * @type {Date}
   * @memberof V1OrganizationMember
   */
  created_at?: Date;
  /**
   *
   * @type {Date}
   * @memberof V1OrganizationMember
   */
  updated_at?: Date;
}

export function V1OrganizationMemberFromJSON(json: any): V1OrganizationMember {
  return V1OrganizationMemberFromJSONTyped(json, false);
}

export function V1OrganizationMemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1OrganizationMember {
  if ((json === undefined) || (json === null)) {
    return json;
  }
  return {

    'user': !exists(json, 'user') ? undefined : json['user'],
    'user_email': !exists(json, 'user_email') ? undefined : json['user_email'],
    'email': !exists(json, 'email') ? undefined : json['email'],
    'role': !exists(json, 'role') ? undefined : json['role'],
    'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
  };
}

export function V1OrganizationMemberToJSON(value?: V1OrganizationMember | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {

    'user': value.user,
    'user_email': value.user_email,
    'email': value.email,
    'role': value.role,
    'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
    'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
  };
}


