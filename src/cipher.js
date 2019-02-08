window.cipher = {
  
encode:  (offset, string) =>{
    let message = '';
    let upperCase = string.toUpperCase();
   
    for(let i=0; i<string.length; i++){
      upperCase[i].charCodeAt();
      let position = ((upperCase[i].charCodeAt() - 65 + offset) % 26 + 65);
      let newMessage = String.fromCharCode(position);
      message += newMessage;
    }
    return message; 
  },
  decode: (offset, string) =>{
    let message = '';
    let upperCase = string.toUpperCase();
    for(let i=0; i<upperCase.length; i++){
      upperCase[i].charCodeAt();
      let position = ((upperCase[i].charCodeAt() + 65 - offset) % 26 + 65);
      let newMessage = String.fromCharCode(position);
      message += newMessage;
    }
    return message; 
  }
};
