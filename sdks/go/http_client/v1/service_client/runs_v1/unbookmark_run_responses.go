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

// UnbookmarkRunReader is a Reader for the UnbookmarkRun structure.
type UnbookmarkRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UnbookmarkRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUnbookmarkRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewUnbookmarkRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewUnbookmarkRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUnbookmarkRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewUnbookmarkRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewUnbookmarkRunOK creates a UnbookmarkRunOK with default headers values
func NewUnbookmarkRunOK() *UnbookmarkRunOK {
	return &UnbookmarkRunOK{}
}

/*UnbookmarkRunOK handles this case with default header values.

A successful response.
*/
type UnbookmarkRunOK struct {
	Payload interface{}
}

func (o *UnbookmarkRunOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/runs/{uuid}/unbookmark][%d] unbookmarkRunOK  %+v", 200, o.Payload)
}

func (o *UnbookmarkRunOK) GetPayload() interface{} {
	return o.Payload
}

func (o *UnbookmarkRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUnbookmarkRunNoContent creates a UnbookmarkRunNoContent with default headers values
func NewUnbookmarkRunNoContent() *UnbookmarkRunNoContent {
	return &UnbookmarkRunNoContent{}
}

/*UnbookmarkRunNoContent handles this case with default header values.

No content.
*/
type UnbookmarkRunNoContent struct {
	Payload interface{}
}

func (o *UnbookmarkRunNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/runs/{uuid}/unbookmark][%d] unbookmarkRunNoContent  %+v", 204, o.Payload)
}

func (o *UnbookmarkRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *UnbookmarkRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUnbookmarkRunForbidden creates a UnbookmarkRunForbidden with default headers values
func NewUnbookmarkRunForbidden() *UnbookmarkRunForbidden {
	return &UnbookmarkRunForbidden{}
}

/*UnbookmarkRunForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type UnbookmarkRunForbidden struct {
	Payload interface{}
}

func (o *UnbookmarkRunForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/runs/{uuid}/unbookmark][%d] unbookmarkRunForbidden  %+v", 403, o.Payload)
}

func (o *UnbookmarkRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *UnbookmarkRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUnbookmarkRunNotFound creates a UnbookmarkRunNotFound with default headers values
func NewUnbookmarkRunNotFound() *UnbookmarkRunNotFound {
	return &UnbookmarkRunNotFound{}
}

/*UnbookmarkRunNotFound handles this case with default header values.

Resource does not exist.
*/
type UnbookmarkRunNotFound struct {
	Payload interface{}
}

func (o *UnbookmarkRunNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/runs/{uuid}/unbookmark][%d] unbookmarkRunNotFound  %+v", 404, o.Payload)
}

func (o *UnbookmarkRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *UnbookmarkRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewUnbookmarkRunDefault creates a UnbookmarkRunDefault with default headers values
func NewUnbookmarkRunDefault(code int) *UnbookmarkRunDefault {
	return &UnbookmarkRunDefault{
		_statusCode: code,
	}
}

/*UnbookmarkRunDefault handles this case with default header values.

An unexpected error response
*/
type UnbookmarkRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the unbookmark run default response
func (o *UnbookmarkRunDefault) Code() int {
	return o._statusCode
}

func (o *UnbookmarkRunDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/runs/{uuid}/unbookmark][%d] UnbookmarkRun default  %+v", o._statusCode, o.Payload)
}

func (o *UnbookmarkRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *UnbookmarkRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
