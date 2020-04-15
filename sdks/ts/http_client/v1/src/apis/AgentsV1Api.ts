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
  V1Agent,
  V1AgentFromJSON,
  V1AgentToJSON,
  V1AgentStateResponse,
  V1AgentStateResponseFromJSON,
  V1AgentStateResponseToJSON,
  V1AgentStatusBodyRequest,
  V1AgentStatusBodyRequestFromJSON,
  V1AgentStatusBodyRequestToJSON,
  V1ListAgentsResponse,
  V1ListAgentsResponseFromJSON,
  V1ListAgentsResponseToJSON,
  V1Status,
  V1StatusFromJSON,
  V1StatusToJSON,
} from '../models';

export interface CreateAgentRequest {
  owner: string;
  body: V1Agent;
}

export interface CreateAgentStatusRequest {
  owner: string;
  uuid: string;
  body: V1AgentStatusBodyRequest;
}

export interface DeleteAgentRequest {
  owner: string;
  uuid: string;
}

export interface GetAgentRequest {
  owner: string;
  uuid: string;
}

export interface GetAgentStateRequest {
  owner: string;
  uuid: string;
}

export interface GetAgentStatusesRequest {
  owner: string;
  uuid: string;
}

export interface ListAgentNamesRequest {
  owner: string;
  offset?: number;
  limit?: number;
  sort?: string;
  query?: string;
}

export interface ListAgentsRequest {
  owner: string;
  offset?: number;
  limit?: number;
  sort?: string;
  query?: string;
}

export interface PatchAgentRequest {
  owner: string;
  agentUuid: string;
  body: V1Agent;
}

export interface SyncAgentRequest {
  owner: string;
  agentUuid: string;
  body: V1Agent;
}

export interface UpdateAgentRequest {
  owner: string;
  agentUuid: string;
  body: V1Agent;
}

/**
 * Polyaxon's typescript client
 */
export class AgentsV1Api extends runtime.BaseAPI {

  /**
   * Create run profile
   */
  async createAgentRaw(requestParameters: CreateAgentRequest): Promise<runtime.ApiResponse<V1Agent>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling createAgent.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V1AgentToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
  }

  /**
   * Create run profile
   */
  async createAgent(requestParameters: CreateAgentRequest): Promise<V1Agent> {
    const response = await this.createAgentRaw(requestParameters);
    return await response.value();
  }

  /**
   */
  async createAgentStatusRaw(requestParameters: CreateAgentStatusRequest): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling createAgentStatus.');
    }

    if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
      throw new runtime.RequiredError('uuid', 'Required parameter requestParameters.uuid was null or undefined when calling createAgentStatus.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling createAgentStatus.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{uuid}/statuses`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: V1AgentStatusBodyRequestToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
  }

  /**
   */
  async createAgentStatus(requestParameters: CreateAgentStatusRequest): Promise<V1Status> {
    const response = await this.createAgentStatusRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete run profile
   */
  async deleteAgentRaw(requestParameters: DeleteAgentRequest): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling deleteAgent.');
    }

    if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
      throw new runtime.RequiredError('uuid', 'Required parameter requestParameters.uuid was null or undefined when calling deleteAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Delete run profile
   */
  async deleteAgent(requestParameters: DeleteAgentRequest): Promise<object> {
    const response = await this.deleteAgentRaw(requestParameters);
    return await response.value();
  }

  /**
   * Get run profile
   */
  async getAgentRaw(requestParameters: GetAgentRequest): Promise<runtime.ApiResponse<V1Agent>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling getAgent.');
    }

    if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
      throw new runtime.RequiredError('uuid', 'Required parameter requestParameters.uuid was null or undefined when calling getAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
  }

  /**
   * Get run profile
   */
  async getAgent(requestParameters: GetAgentRequest): Promise<V1Agent> {
    const response = await this.getAgentRaw(requestParameters);
    return await response.value();
  }

  /**
   */
  async getAgentStateRaw(requestParameters: GetAgentStateRequest): Promise<runtime.ApiResponse<V1AgentStateResponse>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling getAgentState.');
    }

    if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
      throw new runtime.RequiredError('uuid', 'Required parameter requestParameters.uuid was null or undefined when calling getAgentState.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{uuid}/state`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentStateResponseFromJSON(jsonValue));
  }

  /**
   */
  async getAgentState(requestParameters: GetAgentStateRequest): Promise<V1AgentStateResponse> {
    const response = await this.getAgentStateRaw(requestParameters);
    return await response.value();
  }

  /**
   */
  async getAgentStatusesRaw(requestParameters: GetAgentStatusesRequest): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling getAgentStatuses.');
    }

    if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
      throw new runtime.RequiredError('uuid', 'Required parameter requestParameters.uuid was null or undefined when calling getAgentStatuses.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{uuid}/statuses`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
  }

  /**
   */
  async getAgentStatuses(requestParameters: GetAgentStatusesRequest): Promise<V1Status> {
    const response = await this.getAgentStatusesRaw(requestParameters);
    return await response.value();
  }

  /**
   * List run profiles names
   */
  async listAgentNamesRaw(requestParameters: ListAgentNamesRequest): Promise<runtime.ApiResponse<V1ListAgentsResponse>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling listAgentNames.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.query !== undefined) {
      queryParameters['query'] = requestParameters.query;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1ListAgentsResponseFromJSON(jsonValue));
  }

  /**
   * List run profiles names
   */
  async listAgentNames(requestParameters: ListAgentNamesRequest): Promise<V1ListAgentsResponse> {
    const response = await this.listAgentNamesRaw(requestParameters);
    return await response.value();
  }

  /**
   * List run profiles
   */
  async listAgentsRaw(requestParameters: ListAgentsRequest): Promise<runtime.ApiResponse<V1ListAgentsResponse>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling listAgents.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    if (requestParameters.sort !== undefined) {
      queryParameters['sort'] = requestParameters.sort;
    }

    if (requestParameters.query !== undefined) {
      queryParameters['query'] = requestParameters.query;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1ListAgentsResponseFromJSON(jsonValue));
  }

  /**
   * List run profiles
   */
  async listAgents(requestParameters: ListAgentsRequest): Promise<V1ListAgentsResponse> {
    const response = await this.listAgentsRaw(requestParameters);
    return await response.value();
  }

  /**
   * Patch run profile
   */
  async patchAgentRaw(requestParameters: PatchAgentRequest): Promise<runtime.ApiResponse<V1Agent>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling patchAgent.');
    }

    if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
      throw new runtime.RequiredError('agentUuid', 'Required parameter requestParameters.agentUuid was null or undefined when calling patchAgent.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling patchAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{agent.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: V1AgentToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
  }

  /**
   * Patch run profile
   */
  async patchAgent(requestParameters: PatchAgentRequest): Promise<V1Agent> {
    const response = await this.patchAgentRaw(requestParameters);
    return await response.value();
  }

  /**
   */
  async syncAgentRaw(requestParameters: SyncAgentRequest): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling syncAgent.');
    }

    if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
      throw new runtime.RequiredError('agentUuid', 'Required parameter requestParameters.agentUuid was null or undefined when calling syncAgent.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling syncAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{agent.uuid}/sync`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: V1AgentToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   */
  async syncAgent(requestParameters: SyncAgentRequest): Promise<object> {
    const response = await this.syncAgentRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update run profile
   */
  async updateAgentRaw(requestParameters: UpdateAgentRequest): Promise<runtime.ApiResponse<V1Agent>> {
    if (requestParameters.owner === null || requestParameters.owner === undefined) {
      throw new runtime.RequiredError('owner', 'Required parameter requestParameters.owner was null or undefined when calling updateAgent.');
    }

    if (requestParameters.agentUuid === null || requestParameters.agentUuid === undefined) {
      throw new runtime.RequiredError('agentUuid', 'Required parameter requestParameters.agentUuid was null or undefined when calling updateAgent.');
    }

    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling updateAgent.');
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
    }

    const response = await this.request({
      path: `/api/v1/orgs/{owner}/agents/{agent.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"agent.uuid"}}`, encodeURIComponent(String(requestParameters.agentUuid))),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: V1AgentToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => V1AgentFromJSON(jsonValue));
  }

  /**
   * Update run profile
   */
  async updateAgent(requestParameters: UpdateAgentRequest): Promise<V1Agent> {
    const response = await this.updateAgentRaw(requestParameters);
    return await response.value();
  }

}
