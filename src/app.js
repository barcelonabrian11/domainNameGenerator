
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".us", ".net",".io"]
  for (let i = 0; i < pronoun.length; i++) {
 
    for (let j = 0; j < adj.length; j++){
   
      for(let m = 0; m < noun.length; m++){
        
        for(let n = 0; n < extension.length; n++) {
          console.log(pronoun[i]+adj[j]+noun[m]+extension[n]);
        }    }
    }
  }
