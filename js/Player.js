class Player {
  constructor()
  {
    this.rank = null;
    this.index=null;
    this.distance=0;
    this.name=null;
  }
  getCars()
  {
    var CARref = database.ref('CARatEnd');
    CARref.on("value",(data)=>{
      this.rank = data.val();    
    })
  }
static updateCars(rank){
    database.ref('/').update({
      CARatEnd: rank
    })
}
  getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update()
  {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getpInfo()
  {
    database.ref('players').on('value',(data)=> {
      allPlayers=data.val();
    })
    
  }
}
