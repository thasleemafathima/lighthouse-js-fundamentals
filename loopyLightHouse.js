for(i=100;i<=200;i++){
  if(i%3 === 0 && i%5 === 0){
    console.log("LoopyLightHouse");
  }
  else if(i%3 === 0){
    console.log("Loopy");
  }
  else if(i%5 === 0)
  {
    console.log("Lighthouse");
  }
  else
  {
    console.log(i);
  }
}
