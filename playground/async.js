
const getQuote = () =>{

  const request=new XMLHttpRequest()
  request.open('GET','https://talaikis.com/api/quotes/random/')
    
  request.send()

  request.addEventListener('readystatechange',(e)=>{

  if(e.status === 200 && e.)

  })

}

getQuote()