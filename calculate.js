window.onload=function(){
    string=""
b=Array.from(document.querySelectorAll('.btn'))
b.forEach(element => {
    element.addEventListener('click',(e)=>{
        x=e.target.innerHTML
        if(x=='C'){
            document.getElementById('display').value=""
        }
        else if(x=='&lt;-'){
            b=document.getElementById('display').value;
            document.getElementById('display').value=b.slice(0,-1)
        }
        else if(x=='='){
            try{
                document.getElementById('display').value=eval(document.getElementById('display').value)
            }catch{
                document.getElementById('display').value="Error!"
            }
        }
        else{
            document.getElementById('display').value+=x;
        }
    })

});
}
