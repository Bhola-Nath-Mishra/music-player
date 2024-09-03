let musicList = document.querySelector(".musicList");
function addcard(songCover,songUrl,name,discription){
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<audio id="raat" src="${songUrl}"></audio>
                <button class="button" onclick="document.getElementById('raat').pause()">
                    <img class="songCover" src="${songCover}" alt="Raat ki Rani">
                </button>
                <div class="playBtn center">
                    <button class="button" onclick="document.getElementById('raat').play()">
                        <img id="raat" src="playBtn.svg" alt="playBtn">
                    </button>
                </div>
                <div class="detail">
                    <h2>${name}</h2>
                    <p>${discription}</p>
                    </div>`
                musicList.append(card);
}
addcard("song1.png","song1.mp3","Raat Ki Raani");
addcard("song2.jpg","song2.mp3","Bhairava Anthem");
