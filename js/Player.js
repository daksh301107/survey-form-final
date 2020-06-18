class Player {
  constructor(){
    this.index= null;
    this.name=null;
    this.answer=null;
  }

  

  update(answer,index){
    var playerIndex = "Question" + index;
    database.ref(playerIndex).set({
      name:this.name,
     answer:answer
    });
  }
    
  
  static getPlayerInfo(){
    var listen=database.ref("players");
   listen.on("value",(data)=>{
     allPlayers=data.val();
   
   })
  }
}
