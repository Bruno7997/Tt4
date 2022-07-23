class Game {
  constructor() {
    this.r=0
    this.a=undefined
  }
  //Fazendo referencia ao valor do gameState
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
    
  }
 //Atualizando o gameState
  update(state) {
    
    database.ref("/").update({
      gameState: state
    })
    if(gameState==1){this.updateRound(Round+1);round=new Rounds;round.a=qdm;if(round.a>50){nl+=nl/2.25};this.r=1}
    if(gameState==0){this.updateQuant(qdm)}
    
  }

  
  start() {
    if(gameState==-2){
    player = new Player();
   playerCount = player.getCount();
    form = new Form();
    form.display();
  }
  }

  //Esconder o formulário
  handleElements() {
    form.hide();
  }

  //Criando os jogadores
  play() {
    this.handleElements();

    Player.getPlayersInfo();
    Monster.getMonstersInfo()

  
  for(var i=0;p.length!=playerCount;i++){
  this.sprite=createSprite(windowWidth/2, windowHeight/2,windowWidth/16, windowHeight/16)
  this.sprite.setCollider("rectangle", 0, 0, windowWidth/16,windowHeight/16)
  this.sprite.shapeColor= gco[i]
  p.push(this.sprite)
  }
  
  
  var indexp = 0;
for(var plr in allPlayers){
  var x=allPlayers[plr].positionX
  var y=allPlayers[plr].positionY
  var n=allPlayers[plr].name
  if(p[indexp]!=undefined){
  p[indexp].position.x = x
  p[indexp].position.y = y
  fill("black");textSize( Math.sqrt(width/4.25 , height/16*2).toFixed(0))
  text(n,  p[indexp].position.x-(p[indexp].width/2), p[indexp].position.y-(p[indexp].height))
  indexp+=1
  }
}
var indexmm = 0;

if(allMonsters>0){
  for(var plr in allMonsters){
    var x=allMonsters[plr].positionX
    var y=allMonsters[plr].positionY
    if(m[indexmm]!=undefined){
    m[indexmm].sprite.position.x = x
    m[indexmm].sprite.position.y = y
    indexmm+=1
    
    }
    
  }
  }
    }
    jnNpe(){
      if(gameState!=-2){
        clear()
        background(200,200,200);
        fill("red");textSize(25)
text("O jogo ja começou, você não pode mais entrar",windowWidth/2-windowWidth/4,windowHeight/2-windowHeight/4)
    fill("black")
    this.r=1}
    else{this.r=0}
}
colora(a){
  while(a>0){
    pC = database.ref("players/player"+a+"/color1")
    pC.on("value", data =>{info1 = data.val()})
    pC = database.ref("players/player"+a+"/color2")
    pC.on("value", data =>{info2 = data.val()})
    pC = database.ref("players/player"+a+"/color3")
    pC.on("value", data =>{info3 = data.val()})
    gco[a-1]=[info1,info2,info3]
    a-=1

  }
}
updateRound(count) {
  database.ref("/").update({
    round: count
    
  });
this.getRound()}
  getRound() {
      var rods = database.ref("round");
      rods.on("value", data => {
        Round = data.val();
      });
}
updateQuant(qdm) {
  database.ref("/").update({
    qdm: qdm
    
  });
this.getQuant()}
  getQuant() {
      var qdmm = database.ref("round");
      qdmm.on("value", data => {
        qdm = data.val();
      });

}
createMonster(){
  mons = new Monster(pX,pY,w,h,clr,lf,1);m.push(mons);mL.push(lf);indexm+=1
}
}

