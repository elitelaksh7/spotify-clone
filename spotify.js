console.log("welcome to spotify");

let arr= [0,1,2,3,4];
 let songs = ["let me love you","die you must","come on","get lost","mera naam"];
let getSongName1 = Array.from(document.getElementsByClassName('nameOfSongs')); 
 let getSongName2 = Array.from(document.getElementsByClassName('masterSongName')); 
let index=0;
/* let laabh; */
let myProgressBar=document.getElementById('myProgressBar');
let playButton=document.getElementById('playButton');
let audioElement = new Audio('songs/1.mp3');
let whichSong = Array.from(document.getElementsByClassName('songButton'));
/* let songbeingdisplayed = document.getElementById(index); */
/* let noob = document.getElementsByClassName('songButton'); */
let forwardButton=document.getElementById('forwardButton');
let backButton=document.getElementById('backButton');
let namechange=document.getElementById('masterSongName');

/* getSongName1.forEach((Element,i)=>{
    Element.addEventListener('load',(e)=>{
        e.getElementsByClassName('nameOfSongs').innerText = songs[i];
    })
}) */

playButton.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    dj.style.opacity=1;
    playButton.src='pause.png'
    }
    else{
        audioElement.pause();
        dj.style.opacity=0;
        playButton.src='play2.png'
    }
})

//DOUBT DOUBT



forwardButton.addEventListener('click',(    )=>{
    /* console.log("song being played is:" +laabh); */
   /*  presentSong =Array.from(document.getElementsByClassName('songButton'));
    presentSong.forEach((Element,i)=>{
        Element.id= arr[i];
        console.log(Element.target.id);
    }) */
       /*  if(presentSong.id !=4)
    audioElement.src = `songs/${i+1}.mp3`; */
if(index != 4){
index++;
    audioElement.src = `songs/${index+1}.mp3`
    for(i=0;i<5;i++){
       if(i == index){
        document.getElementById(index).setAttribute("style","width:80%");
           document.getElementById(index).setAttribute("src","pause.png");
       }
       else{
        document.getElementById(index).setAttribute("style","width:80%");
           document.getElementById(i).setAttribute("src","play2.png");  
       }
    }
    audioElement.currentTime=0;
    playButton.src='pause.png'; 
   /*  songbeingdisplayed.src='pause.png'; */
    audioElement.play();
    namechange.innerText = songs[index];
    dj.style.opacity=1;
   /*  e.target.src='pause.png';
     e.target.style.width = "70%"; */
}
else{
    index=0;
    audioElement.src = `songs/${index+1}.mp3`
    for(i=0;i<5;i++){
       if(i == index){
        document.getElementById(index).setAttribute("style","width:80%");
           document.getElementById(index).setAttribute("src","pause.png");
       }
       else{
        document.getElementById(index).setAttribute("style","width:80%");
           document.getElementById(i).setAttribute("src","play2.png");  
       }
    }
    audioElement.currentTime=0;
    playButton.src='pause.png';
   /*  songbeingdisplayed.src='pause.png'; */
    audioElement.play();
    namechange.innerText = songs[index];
    dj.style.opacity=1;
   /*  e.target.src='pause.png';
     e.target.style.width = "70%"; */
}
})

backButton.addEventListener('click',(    )=>{
    /*  presentSong =Array.from(document.getElementsByClassName('songButton'));
     presentSong.forEach((Element,i)=>{
         Element.id= arr[i];
         console.log(Element.target.id);
     }) */
        /*  if(presentSong.id !=4)
     audioElement.src = `songs/${i+1}.mp3`; */
 if(index != 0){
 index--;
     audioElement.src = `songs/${index+1}.mp3`;
     for(i=0;i<5;i++){
        if(i == index){
            document.getElementById(index).setAttribute("style","width:80%");
            document.getElementById(index).setAttribute("src","pause.png");
        }
        else{
            document.getElementById(index).setAttribute("style","width:80%");
            document.getElementById(i).setAttribute("src","play2.png");  
        }
     }
     audioElement.currentTime=0;
     playButton.src='pause.png';
    /*  songbeingdisplayed.src='pause.png'; */
     audioElement.play();
     namechange.innerText = songs[index];
     dj.style.opacity=1;
    /*  e.target.src='pause.png';
      e.target.style.width = "70%"; */
 }
 else{
     index=4;
     audioElement.src = `songs/${index+1}.mp3`;
     for(i=0;i<5;i++){
        if(i == index){
            document.getElementById(index).setAttribute("style","width:80%");
            document.getElementById(index).setAttribute("src","pause.png");
            
        }
        else{
            document.getElementById(index).setAttribute("style","width:80%");
            document.getElementById(i).setAttribute("src","play2.png");  
           
        }
     }
     audioElement.currentTime=0;
     playButton.src='pause.png';
    /*  songbeingdisplayed.src='pause.png'; */
     audioElement.play();
     namechange.innerText = songs[index];
     dj.style.opacity=1;
    /*  e.target.src='pause.png';
      e.target.style.width = "70%"; */
 }
 })
//then this will change when song part is changed
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    console.log(progress);
    myProgressBar.value=progress;
})
//while changing song part this will change first 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

whichSong.forEach((Element,i)=>{
Element.id= arr[i];
/* laabh = Element.id; */
/* let noob = document.getElementsByClassName('songButton') ;
console.log(noob.id); */
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songButton')).forEach((Element)=>{
    Element.src='play2.png';
    Element.style.width = "80%";
})
/* Array.from(document.getElementsByClassName('songButton')).forEach((Element,i)=>{
    Element.addEventListener('click',(e)=>{
Array.from(document.getElementsByClassName('songBox')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
    e.target.style.color = "green";
}
)
}
)
}
    )
}
) */
/* document.getElementsByClassName('songBox').style.color = "green";  */  
}

Array.from(document.getElementsByClassName('songButton')).forEach((Element,i)=>{
    Element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);
        console.log("target element is:" + e.target.id);
        playButton.src='pause.png';
        makeallplay();
        dj.style.opacity=1;
        namechange.innerText = songs[index]; 
        audioElement.src = `songs/${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        e.target.src='pause.png';
         e.target.style.width = "80%";
    })
})

