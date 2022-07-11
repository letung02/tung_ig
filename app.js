var index =1;
changeImg = function(){
    var imgs=["./img/244628985_1567377700273809_4124222679327239302_n.jpg","./img/268488242_1609067769438135_369388233968620915_n.jpg","./img/273028227_1639578539720391_4137388264923445542_n.jpg"]
    document.getElementById('img').src=imgs[index];
    index++
    if(index==3){
        index=0
    }
}
setInterval(changeImg,3000)