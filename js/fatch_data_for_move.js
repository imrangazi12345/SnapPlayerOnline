const root = document.getElementById('root');

// < fatch data from api
fetch('../data/moves.json').then(res => {return res.json();})

.then(data =>{
  data.forEach((value,index)=>{
    root.innerHTML += `
    <div class="content">
      <div id="${index}" class="img" style="background-image: url(${value.thumb});">
        <div id="loading-height-${index}" style="height:200px"></div>
        <div class="loading" id="loading-${index}"></div>
      </div>
      <p>${value.tit}</p>
    </div>`;


    // sping & Loading
    function getBgUrl(el) {
      var bg = "";
      if (el.currentStyle) { // IE
          bg = el.currentStyle.backgroundImage;
      } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
          bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
      } else { // try and get inline style
          bg = el.style.backgroundImage;
      }
      return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
    }
    var image = document.createElement('img');
    image.src = getBgUrl(document.getElementById(index));
    image.onload = function () {
      console.log('Loaded!');
      document.getElementById(`loading-height-${index}`).style.display = 'none';
      document.getElementById(`loading-${index}`).style.display = 'none';
    };
    image.onerror = ()=>{
      document.getElementById(index).style.backgroundImage = 'none';
    }
      
    if(index+1 == data.length){
      let allTarget = document.querySelectorAll(".content");
      allTarget.forEach((dataObj)=>{
        dataObj.addEventListener('click',(e)=>{
          if(!(e.target.id=='')){
            // console.log(e.target.id);
            window.location.href = `../pages/videoplayer.html?id=${e.target.id}&json=moves`;
          }
        });
      });
    }
  });
});


