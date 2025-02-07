function onComplete(duration){
    console.log(`Timer of ${duration} ms finished`)
  }
  
  function timer(duration){
      setTimeout(function() {
          onComplete(duration)
      }, duration);
    }
    
    timer(5000)