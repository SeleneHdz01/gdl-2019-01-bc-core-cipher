const secctionTwo = ()=> {
    const screenOne= document.getElementById('homePage');
    const screenTwo = document.getElementById('appPage');
    homePage.style.display = 'none';
    appPage.style.display = 'block';
    
  }

const btnCipher=()=>{
    let string =document.getElementById("input").value;
    let offset = parseInt(document.getElementById("key").value);
    let txt = window.cipher.encode(offset, string);
    document.getElementById("result").value=txt;

};

const 