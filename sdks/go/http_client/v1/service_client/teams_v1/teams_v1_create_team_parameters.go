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

// Code generated by go-swagger; DO NOT EDIT.

package teams_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewTeamsV1CreateTeamParams creates a new TeamsV1CreateTeamParams object
// with the default values initialized.
func NewTeamsV1CreateTeamParams() *TeamsV1CreateTeamParams {
	var ()
	return &TeamsV1CreateTeamParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewTeamsV1CreateTeamParamsWithTimeout creates a new TeamsV1CreateTeamParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewTeamsV1CreateTeamParamsWithTimeout(timeout time.Duration) *TeamsV1CreateTeamParams {
	var ()
	return &TeamsV1CreateTeamParams{

		timeout: timeout,
	}
}

// NewTeamsV1CreateTeamParamsWithContext creates a new TeamsV1CreateTeamParams object
// with the default values initialized, and the ability to set a context for a request
func NewTeamsV1CreateTeamParamsWithContext(ctx context.Context) *TeamsV1CreateTeamParams {
	var ()
	return &TeamsV1CreateTeamParams{

		Context: ctx,
	}
}

// NewTeamsV1CreateTeamParamsWithHTTPClient creates a new TeamsV1CreateTeamParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewTeamsV1CreateTeamParamsWithHTTPClient(client *http.Client) *TeamsV1CreateTeamParams {
	var ()
	return &TeamsV1CreateTeamParams{
		HTTPClient: client,
	}
}

/*TeamsV1CreateTeamParams contains all the parameters to send to the API endpoint
for the teams v1 create team operation typically these are written to a http.Request
*/
type TeamsV1CreateTeamParams struct {

	/*Body
	  Team body

	*/
	Body *service_model.V1Team
	/*Owner
	  Owner of the namespace

	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) WithTimeout(timeout time.Duration) *TeamsV1CreateTeamParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) WithContext(ctx context.Context) *TeamsV1CreateTeamParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) WithHTTPClient(client *http.Client) *TeamsV1CreateTeamParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) WithBody(body *service_model.V1Team) *TeamsV1CreateTeamParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) SetBody(body *service_model.V1Team) {
	o.Body = body
}

// WithOwner adds the owner to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) WithOwner(owner string) *TeamsV1CreateTeamParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the teams v1 create team params
func (o *TeamsV1CreateTeamParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *TeamsV1CreateTeamParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}