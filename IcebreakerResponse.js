function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(email){return new IcebreakerResponse(email)})
}


<<<<<<< HEAD
//dont forget to include first return
=======
//dont forget to include first return
>>>>>>> 13c9ab2de571f00449c9c9a7fb1e6ca6c5310e0c
