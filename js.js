let isLoading = true
fetch('https://dwaapi.juvasquez88.vercel.app/letters')
  .then(res => res.json())
  .then(leaguesJson => {
    var array1 = leaguesJson
    var  x= array1.letters
//console.log(leaguesJson)

  for(i=0; i<x.length;i++){
         a=leaguesJson.letters[i]
        var btn = document.createElement("BUTTON");
        btn.innerHTML = a.letter;
        btn.id=a.letter;
        btn.getElementById=btn.id;
        console.log(a.image);
        btn.onclick =imagen(a.image)
        document.getElementById("contenedor").innerHTML=document.getElementById("contenedor").innerHTML+"<button id='boton' type='button' onclick='imagen(" + '"' + a.image + '"' + ");'>"+ a.letter+"</button>"

    }



  })
  .catch(err => {
    throw new Error(err.message)
  })
  .finally(() =>  { isLoading = false })

console.log(isLoading)

function imagen(id){
    document.getElementById('img').style.backgroundImage="url(" + id + ")";

}