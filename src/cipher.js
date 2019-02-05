window.cipher = {
  
encode:  (offset, string) =>{
    let message = '';
   
    for(let i=0; i<string.length; i++){
      string[i].charCodeAt();
      let posicion = ((string[i].charCodeAt() - 65 + offset) % 26 + 65);
      let nletter = String.fromCharCode(posicion);

      console.log (nletter)
    }
  },
  decode: (offset, string) =>{
    let message = '';
   
    for(let i=0; i<string.length; i++){
      string[i].charCodeAt();
      let position = ((string[i].charCodeAt() + 65 - offset) % 26 + 65);
      let nletter = String.fromCharCode(position);

      console.log (nletter)
    }
  }
};
