export class AppError extends Error{
     constructor(
          public  message : string,
          public statuscode : number
     ){
          super(message);

     this.message = 'App Error'
     }

     
}