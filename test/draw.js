var data={
  "0": {
    "name":"命軸剝奪 ‧ 諾索斯",
    "c":"3",
    "src":"https://i.imgur.com/7wdxiZK.png"
  },
  "1":{
    "name":"蜃樓星火 ‧ 伊斯塔",
    "c":"2",
    "src":"https://i.imgur.com/OuJp4Lp.png"
  },
  "2":{
    "name":"星辰之理 ‧ 蘇因",
    "c":"4",
    "src":"https://i.imgur.com/39ZFmBy.png"
  },
  "3":{
    "name":"命序解構 ‧ 瑪努恩",
    "c":"1",
    "src":"https://i.imgur.com/sM1hxiM.png"
  },
  "4":{
    "name":"品嚐生命 ‧ 烏素姆",
    "c":"2",
    "src":"https://i.imgur.com/rVq4j1M.png"
  },
  "5":{
    "name":"卑猥雙生 ‧ 羅伊戈與札爾",
    "c":"3",
    "src":"https://i.imgur.com/bqa5A9h.png"
  },
  "6":{
    "name":"天樞光華 ‧ 安沙爾",
    "c":"3",
    "src":"https://i.imgur.com/rVq4j1M.png"
  },
  "7":{
    "name":"魔蟲戾心 ‧ 修德梅耳",
    "c":"5",
    "src":""
  }
  
};
    
var fact = true
      var historye = 0
      var historyt = 0
      var historyb = 0
      var historyw = 0
      var switchmode = 1
      var his = 0

      
      
      
function d(num){
  var rt =$("#drawresult").width()
  if(600 < $(".container").width()){
    $("#drawresult").width(600)
  }
  rt = Math.floor(rt/5)
  //alert(rt)
  if(rt <= 100){  
    historyb = historyb + 1; 
    var aer = $("#c" + num + "s").html()
    aer++
    $("#c" + num + "s").html(aer)
    var er = rt + 2
    $("#drawresult").append('<div class="card" style="width:' + er + 'px;"><img id="k2" src="'+ data[num].src + '" height="' + rt + '"><div class="text-center">'+ data[num].name +'</div></div>')
    $("#we" + historyb).attr("data-original-title" , data[num].name)
    console.log(data[num].name)
     
  }else{
    rt = 100
    historyb = historyb + 1; 
    var aer = $("#c" + num + "s").html()
    aer++
    $("#c" + num + "s").html(aer)
    var er = rt + 2
    $("#drawresult").append('<div class="card" style="width:' + er + 'px;"><img id="k2" src="'+ data[num].src + '" height="' + rt + '"><div class="text-center">'+ data[num].name +'</div></div>')
    $("#we" + historyb).attr("data-original-title" , data[num].name)
    console.log(data[num].name)
    
  }
  
}

function draw(ewrt,b){
  if(b == 1){
    var c1 = 10
    var c2 = 45
    var c3 = 180
    var items=[];
    var itemsWeight=[];
    var json={};
    for(var t = 1;t<=10;t++){
      items.push(1)
    }
    for(var p = 1; p <= 10; p++){
      itemsWeight.push(0)
    }
    for(var o = 1; o <= 2; o++){
      for(var e = 1;e<=45;e++){
        itemsWeight.push(o)
      }
    }
    for(var y = 3; y <= 7; y++){
      for(var w = 0;w<180;w++){
        itemsWeight.push(y)
      }
    }
    var k = 0
    //console.log(itemsWeight.length)
    console.log("本次抽卡結果：");
    console.log("========================");
    $("#drawresult").html("")
    while(k<$("#inp").val()){
      var ff = itemsWeight.length
      var randomNumber=Math.floor(Math.random()*(ff));
      var wwe = itemsWeight[randomNumber]
      if(historyb == 34){
      	wwe = 0
      }
      console.log(wwe)
      d(wwe)
      k++
      his++
      //$("#s8").html(his)
      $("#storenum").html("累計次數:" + historyb)
      
      if(historyb == 35){
      	historyb =0
      }
    }
    console.log("========================");
    $(".container").append("<hr/><button class='btn btn-primary btn-block' onclick='restore()'>重來</button><br/><br/>")
  }else{
    var c1 = 25
    var c2 = 100
    var c3 = 155
    var items=[];
    var itemsWeight=[];
    var json={};
    for(var t = 1;t<=10;t++){
      items.push(1)
    }
    for(var p = 1; p <= 10; p++){
      itemsWeight.push(0)
    }
    for(var o = 1; o <= 2; o++){
      for(var e = 1;e<=45;e++){
        itemsWeight.push(o)
      }
    }
    for(var y = 3; y <= 7; y++){
      for(var w = 0;w<180;w++){
        itemsWeight.push(y)
      }
    }
    var k = 0
    //console.log(itemsWeight.length)
    console.log("本次抽卡結果：");
    console.log("========================");
    $("#drawresult").html("")
    while(k<$("#inp").val()){
      var ff = itemsWeight.length
      var randomNumber=Math.floor(Math.random()*(ff));
      var wwe = itemsWeight[randomNumber]
      if(historyb == 34){
      	wwe = 0
      }
      console.log(wwe)
      d(wwe)
      k++
      his++
      //$("#s8").html(his)
      $("#storenum").html("累計次數:" + historyb)
       
      if(historyb == 35){
      	historyb =0
      }
    }
    console.log("========================");
    $(".container").append("<hr/><button class='btn btn-primary btn-block' onclick='restore()'>重來</button><br/><br/>")
  }
}

function restore(){
  $(".container").html('<br><br><div class="d-flex flex-wrap justify-content-center" id="drawresult"><img id ="myContainer" style="width:300px;position:relative;" src="https://cdn.glitch.com/637bbe83-5a09-4478-bad7-0030c1ca0cba%2Fmaxresdefault.jpg?v=1594179031034" onclick="a()"><img id ="myAnimation" src="https://cdn.glitch.com/637bbe83-5a09-4478-bad7-0030c1ca0cba%2FOXuM1Qf.jpg?v=1594179035626" style="top:100px;width:239px;display: none;"></div>')
  if(screen.width < 300){
    $("#myContainer").attr("style","width:100%;position:relative;")  
  }
  $("#score").attr("style","height:" + (screen.height-60) + "px;overflow: auto;")
  var elem1 = document.getElementById("myContainer");
  var we = elem1.clientWidth
  we = we*0.58
  var position = getPosition(elem1);
  //alert("座標: " + position.x + ', ' + position.y);
  cardx = position.x
  cardy = position.y + 81
  $("#myAnimation").attr("style","top:" + position.y + ";width:" + we + "px;display:none;") 
}
