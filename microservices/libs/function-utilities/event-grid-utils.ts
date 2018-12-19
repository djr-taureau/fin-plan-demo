import { Context, HttpRequest } from '../azure-function-types';

export function isEventGridReq(req:HttpRequest) {
  if(
    req.body[0].eventType === 'Microsoft.EventGrid.SubscriptionValidationEvent' ||
    req.headers['aeg-subscription-name']
  ) {
    return true;
  } else {
    return false;
  }
}

export function isEventGridMessageQueue(message:any) {
  if(
    message.eventType
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Will structure a respoinse for httpTrigger EventGrid Validation handshake
 * @param context azure function context
 * @param req azure function request object
 */
export function eventGridValidationHandshake(context:Context, req:HttpRequest) {
  if(req.body[0].eventType == "Microsoft.EventGrid.SubscriptionValidationEvent") {
    context.log('validation handshake');
    return {
        validationResponse: req.body[0].data.validationCode
    };
  } else {
    return false;
  }
}