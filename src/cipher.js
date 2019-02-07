window.cipher = {
  
encode:  (offset, string) =>{
    let message = '';
   
    for(let i=0; i<string.length; i++){
      string[i].charCodeAt();
      let position = ((string[i].charCodeAt() - 65 + offset) % 26 + 65);
      let newMessage = String.fromCharCode(position);
      message += newMessage;
    }
    return message; 
  },
  decode: (offset, string) =>{
    let message = '';
   
    for(let i=0; i<string.length; i++){
      string[i].charCodeAt();
      let position = ((string[i].charCodeAt() + 65 - offset) % 26 + 65);
      let newMessage = String.fromCharCode(position);
      message += newMessage;
    }
    return message; 
  }
};
