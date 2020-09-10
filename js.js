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
        document.body.appendChild(btn);


        var img = document.createElement("img");
        img.src = a.image;
        console.log(a.image)
        document.body.appendChild(img);
        
    
    }

    

  })
  .catch(err => {
    throw new Error(err.message)
  })
  .finally(() =>  { isLoading = false })

console.log(isLoading)
