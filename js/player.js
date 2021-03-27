const video = document.getElementById('video');
const videoRoot = document.getElementById('video-root');
// const control = document.getElementById('controls'); 
const jsonD = window.location.search.split('=')[2];
console.log(jsonD);


// console.log(window.location.search.split('='))




if(jsonD == 'moves'){
  fetch(`../data/moves.json`).then(res => {return res.json();})
  .then(data =>{
    const allData = data[window.location.search.split('=')[1].split('&')[0]];
    console.log(allData);
    videoRoot.innerHTML = `
    <video id="moves-video" autoplay src="${allData.link}" controls>Error !</video>
    <p>${allData.tit}</p>
    `;
  });
}         
else if(jsonD == 'youtube'){
  fetch(`../data/youtube.json`).then(res => {return res.json();})
  .then(data =>{
    const allData = data[window.location.search.split('=')[1].split('&')[0]];
    console.log(allData)
    videoRoot.innerHTML = `
    <video id="moves-video" autoplay src="${allData.videoURL}" controls>Error !</video>
    <p>${allData.tit}</p>
    `;
  });
}


