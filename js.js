let isLoading = true
fetch('https://dwaapi.juvasquez88.vercel.app/letters')
  .then(res => res.json())
  .then(leaguesJson => {
    var array1 = leaguesJson
    var  x= array1.letters


  for(i=0; i<x.length;i++){
         a=leaguesJson.letters[i]
        document.getElementById("elemento").innerHTML = a.letter;
        var btn = document.createElement("BUTTON");
        btn.innerHTML = a.letter;
        document.body.appendChild(btn);
        console.log(a.letter)

    }

  })
  .catch(err => {
    throw new Error(err.message)
  })
  .finally(() =>  { isLoading = false })

console.log(isLoading)
