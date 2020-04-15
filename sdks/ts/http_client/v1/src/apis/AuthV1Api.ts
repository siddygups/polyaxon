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


import * as runtime from '../runtime';
import {
  RuntimeError,
  RuntimeErrorFromJSON,
  RuntimeErrorToJSON,
  V1Auth,
  V1AuthFromJSON,
  V1AuthToJSON,
  V1CredsBodyRequest,
  V1CredsBodyRequestFromJSON,
  V1CredsBodyRequestToJSON,
} from '../models';

export interface LoginRequest {
  body: V1CredsBodyRequest;
}

/**
 * Polyaxon's typescript client
 */
export class AuthV1Api extends runtime.BaseAPI {

  /**
   * List organization level queues names
   */
  async loginRaw(requestParameters: LoginRequest): Promise<runtime.ApiResponse<V1Auth>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling login.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/users/token`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V1CredsBodyRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AuthFromJSON(jsonValue));
  }

  /**
   * List organization level queues names
   */
  async login(requestParameters: LoginRequest): Promise<V1Auth> {
    const response = await this.loginRaw(requestParameters);
    return await response.value();
  }

}
