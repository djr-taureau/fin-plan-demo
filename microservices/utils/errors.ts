export const handleError = (context, options?) => error => {

  if(options && options.message !== undefined) {
    context.log.error(`${options.message}:`, error);
  } else {
    context.log.error(error);
  }
  
  context.done();
}