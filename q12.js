
function Loading(time){
    count=0
    lode=setInterval(()=>{
      console.log("Loading....")
      count++
    if(count==5){
      clearInterval(lode)
      console.log("Loaded successfully!")
    }
    },time)
  }
  Loading(1000)