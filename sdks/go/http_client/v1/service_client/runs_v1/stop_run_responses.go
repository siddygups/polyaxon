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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// StopRunReader is a Reader for the StopRun structure.
type StopRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *StopRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewStopRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewStopRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewStopRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewStopRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewStopRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewStopRunOK creates a StopRunOK with default headers values
func NewStopRunOK() *StopRunOK {
	return &StopRunOK{}
}

/*StopRunOK handles this case with default header values.

A successful response.
*/
type StopRunOK struct {
	Payload interface{}
}

func (o *StopRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/stop][%d] stopRunOK  %+v", 200, o.Payload)
}

func (o *StopRunOK) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunNoContent creates a StopRunNoContent with default headers values
func NewStopRunNoContent() *StopRunNoContent {
	return &StopRunNoContent{}
}

/*StopRunNoContent handles this case with default header values.

No content.
*/
type StopRunNoContent struct {
	Payload interface{}
}

func (o *StopRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/stop][%d] stopRunNoContent  %+v", 204, o.Payload)
}

func (o *StopRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunForbidden creates a StopRunForbidden with default headers values
func NewStopRunForbidden() *StopRunForbidden {
	return &StopRunForbidden{}
}

/*StopRunForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type StopRunForbidden struct {
	Payload interface{}
}

func (o *StopRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/stop][%d] stopRunForbidden  %+v", 403, o.Payload)
}

func (o *StopRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunNotFound creates a StopRunNotFound with default headers values
func NewStopRunNotFound() *StopRunNotFound {
	return &StopRunNotFound{}
}

/*StopRunNotFound handles this case with default header values.

Resource does not exist.
*/
type StopRunNotFound struct {
	Payload interface{}
}

func (o *StopRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/stop][%d] stopRunNotFound  %+v", 404, o.Payload)
}

func (o *StopRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *StopRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopRunDefault creates a StopRunDefault with default headers values
func NewStopRunDefault(code int) *StopRunDefault {
	return &StopRunDefault{
		_statusCode: code,
	}
}

/*StopRunDefault handles this case with default header values.

An unexpected error response
*/
type StopRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the stop run default response
func (o *StopRunDefault) Code() int {
	return o._statusCode
}

func (o *StopRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/runs/{uuid}/stop][%d] StopRun default  %+v", o._statusCode, o.Payload)
}

func (o *StopRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *StopRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
