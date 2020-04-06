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

package queues_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// QueuesV1UpdateQueueReader is a Reader for the QueuesV1UpdateQueue structure.
type QueuesV1UpdateQueueReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *QueuesV1UpdateQueueReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewQueuesV1UpdateQueueOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewQueuesV1UpdateQueueNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewQueuesV1UpdateQueueForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewQueuesV1UpdateQueueNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewQueuesV1UpdateQueueDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewQueuesV1UpdateQueueOK creates a QueuesV1UpdateQueueOK with default headers values
func NewQueuesV1UpdateQueueOK() *QueuesV1UpdateQueueOK {
	return &QueuesV1UpdateQueueOK{}
}

/*QueuesV1UpdateQueueOK handles this case with default header values.

A successful response.
*/
type QueuesV1UpdateQueueOK struct {
	Payload *service_model.V1Queue
}

func (o *QueuesV1UpdateQueueOK) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}][%d] queuesV1UpdateQueueOK  %+v", 200, o.Payload)
}

func (o *QueuesV1UpdateQueueOK) GetPayload() *service_model.V1Queue {
	return o.Payload
}

func (o *QueuesV1UpdateQueueOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Queue)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewQueuesV1UpdateQueueNoContent creates a QueuesV1UpdateQueueNoContent with default headers values
func NewQueuesV1UpdateQueueNoContent() *QueuesV1UpdateQueueNoContent {
	return &QueuesV1UpdateQueueNoContent{}
}

/*QueuesV1UpdateQueueNoContent handles this case with default header values.

No content.
*/
type QueuesV1UpdateQueueNoContent struct {
	Payload interface{}
}

func (o *QueuesV1UpdateQueueNoContent) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}][%d] queuesV1UpdateQueueNoContent  %+v", 204, o.Payload)
}

func (o *QueuesV1UpdateQueueNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *QueuesV1UpdateQueueNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewQueuesV1UpdateQueueForbidden creates a QueuesV1UpdateQueueForbidden with default headers values
func NewQueuesV1UpdateQueueForbidden() *QueuesV1UpdateQueueForbidden {
	return &QueuesV1UpdateQueueForbidden{}
}

/*QueuesV1UpdateQueueForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type QueuesV1UpdateQueueForbidden struct {
	Payload interface{}
}

func (o *QueuesV1UpdateQueueForbidden) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}][%d] queuesV1UpdateQueueForbidden  %+v", 403, o.Payload)
}

func (o *QueuesV1UpdateQueueForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *QueuesV1UpdateQueueForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewQueuesV1UpdateQueueNotFound creates a QueuesV1UpdateQueueNotFound with default headers values
func NewQueuesV1UpdateQueueNotFound() *QueuesV1UpdateQueueNotFound {
	return &QueuesV1UpdateQueueNotFound{}
}

/*QueuesV1UpdateQueueNotFound handles this case with default header values.

Resource does not exist.
*/
type QueuesV1UpdateQueueNotFound struct {
	Payload interface{}
}

func (o *QueuesV1UpdateQueueNotFound) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}][%d] queuesV1UpdateQueueNotFound  %+v", 404, o.Payload)
}

func (o *QueuesV1UpdateQueueNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *QueuesV1UpdateQueueNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewQueuesV1UpdateQueueDefault creates a QueuesV1UpdateQueueDefault with default headers values
func NewQueuesV1UpdateQueueDefault(code int) *QueuesV1UpdateQueueDefault {
	return &QueuesV1UpdateQueueDefault{
		_statusCode: code,
	}
}

/*QueuesV1UpdateQueueDefault handles this case with default header values.

An unexpected error response
*/
type QueuesV1UpdateQueueDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the queues v1 update queue default response
func (o *QueuesV1UpdateQueueDefault) Code() int {
	return o._statusCode
}

func (o *QueuesV1UpdateQueueDefault) Error() string {
	return fmt.Sprintf("[PUT /api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}][%d] QueuesV1_UpdateQueue default  %+v", o._statusCode, o.Payload)
}

func (o *QueuesV1UpdateQueueDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *QueuesV1UpdateQueueDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}