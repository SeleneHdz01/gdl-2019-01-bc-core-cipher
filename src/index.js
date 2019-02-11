
const sectionTwo = ()=> {
    const screenOne= document.getElementById('homePage');
    const screenTwo = document.getElementById('appPage');
    screenOne.style.display = 'none';
    screenTwo.style.display = 'block'; 
    

  };
    document.getElementById('sectionTwo').addEventListener('click',sectionTwo);
//const btnCipher=()=>{
   // let string =document.getElementById("payInMess").value;
    //let offset = document.getElementById("key").value;
    //let txt = window.cipher.encode(parseInt(offset), string);
    //document.getElementById("result").innerHTML= txt;

//};

const funcBtnOne = document.getElementById('btnCipher');
    funcBtnOne.addEventListener('click', function cipher(){
    let string =document.getElementById('payInMess').value;
    let offset = document.getElementById('key').value;
    document.getElementById('result').innerHTML = window.cipher.encode(parseInt(offset), string);

});

const funcBtnTwo = document.getElementById('btnDecipher');
    funcBtnTwo.addEventListener('click', function decipher(){
        let offset = document.getElementById('key').value;
        let string =document.getElementById('payInMess').value;
        document.getElementById('result').innerHTML = window.cipher.decode(parseInt(offset), string);

});
   
const clearBox = ()=> {
    document.getElementById('record').reset();
     };
    document.getElementById('clear').addEventListener('click', clearBox);  

    
const exit = ()=> {
        const screenOne= document.getElementById('homePage');
        const screenTwo = document.getElementById('appPage');
        screenOne.style.display = 'block';
        screenTwo.style.display = 'none';   
        location.reload();
      };
        document.getElementById('exit').addEventListener('click',exit);
    