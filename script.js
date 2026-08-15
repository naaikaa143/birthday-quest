/*==================================================
              BIRTHDAY QUEST ❤️
                FINAL ENGINE
==================================================*/


// ======================================
// ✏️ EDIT STORY DI SINI
// ======================================

const story = [

`Haloo masku sayangg

ini spesial aku bikin khusus buat kamu.`,

`walaupun masih banyak kurangnya karena aku bener bener 0 tentang ginian, tapi aku tetep mau coba.`,

`let's gooooooo

selesaiin semuanya yaa biar dapat hadiah`,

`ada
10 Quest

untuk membuka
hadiah terakhir ❤️`

];

// ======================================
// ✏️ EDIT LOVE LETTER DI SINI
// ======================================

const loveLetter = `

Happy Birthday, Mas ❤️

Yang pertama aku mau ucapin terima kasih banyak karena semua effort yang udah kamu kasih ke aku, kamu laki-laki yang hebat!

Kedua, aku bangga punya kamu yang selalu bisa diandalkan, bisa jadi tempat bersandar.

Awal kali kita deket, hal yang aku notice dari kamu adalah stabilnya emosi kamu. itu hal yang bikin aku tertarik.

Makasih yaa sayang, udah hadir di hidup aku. Swmoga kita bisa lebih lama dan lebih lama lagi bareng-barengnya.

Doa aku selalu sama, panjang umur, sehat terus, banyak rezekinya, dimudahkan segala urusan dan jalan untuk mencapai mimpi.

Aku selalu support apapun mimpi kamu, selalu dukung kamu di segala situasi dan kondisi. Aku percaya kamu, sayang.

Happy Birthday sayangkuuu, happy for your parents too karena udah melahirkan dan mendidik kamu sampai jadi laki-laki yang bertanggung jawab.

I love you ❤️

`;
// ======================================
// GAME DATA
// ======================================

let currentStory = 0;
let currentQuestion = 0;
let hp = 3;


// ======================================
// ELEMENT
// ======================================

const screen = document.getElementById("screen");
const popup = document.getElementById("popup");
const flash = document.getElementById("flash");
const bgm = document.getElementById("bgm");


// ======================================
// HELPER
// ======================================

function render(html){

    screen.innerHTML = html;

}

function showPopup(text,duration=1200){

    popup.innerHTML=text;

    popup.classList.remove("hidden");

    setTimeout(()=>{

        popup.classList.add("hidden");

    },duration);

}
function showCluePopup(text,onClose){

    popup.innerHTML = text + "<br><br><small class='tap-text'>▼ TAP TO CONTINUE ▼</small>";

    popup.classList.remove("hidden");

    popup.onclick = ()=>{

        popup.classList.add("hidden");

        popup.onclick = null;

        if(onClose){

            onClose();

        }

    };

}

function flashScreen(){

    flash.style.opacity="0.12";

    setTimeout(()=>{

        flash.style.opacity="0";

    },120);

}

// ======================================
// START
// ======================================

window.addEventListener("load",()=>{

    renderTitle();

});


// ======================================
// TITLE
// ======================================

function renderTitle(){

render(`

<h1 class="title">

Birthday<br>Quest

</h1>

<p class="subtitle">

For Mas Pacar❤️

</p>

<button
class="game-btn blink"
id="startBtn">

PRESS START

</button>

`);

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    playClick();

    setTimeout(()=>{

        renderLoading();

    },100);

});

}
// ======================================
// LOADING
// ======================================

function renderLoading(){

render(`

<h1 class="title">

Loading...

</h1>

<p
id="loadingText"
class="subtitle">

Preparing your adventure...

</p>

<div id="loadingBar">
    <div id="loadingFill"></div>
</div>

`);

let progress=0;

const fill = document.getElementById("loadingFill");
const text=document.getElementById("loadingText");

const timer=setInterval(()=>{

progress++;

fill.style.width=progress+"%";

if(progress===25){

text.textContent="Loading memories...";

}

if(progress===50){

text.textContent="Preparing surprise...";

}

if(progress===75){

text.textContent="Almost Ready...";

}

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

currentStory=0;

renderStory();

},400);

}

},20);

}
// ======================================
// STORY
// ======================================

function renderStory(){

render(`

<div class="story-box">

<p class="typewriter">

${story[currentStory]}

</p>

<br><br>

<button
class="game-btn"
id="nextBtn">

${currentStory===story.length-1?"START QUEST":"NEXT"}

</button>

</div>

`);

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

flashScreen();

setTimeout(()=>{

if(currentStory<story.length-1){

currentStory++;

renderStory();

}else{

startQuest();

}

},250);

});

}


// ======================================
// START QUEST
// =====================================// ======================================
// ✏️ EDIT SEMUA PERTANYAAN DI SINI
// ======================================

const questions = [

{
    question:"Kapan pertama kali kita ketemu?",

    answers:[
        "2 Januari 2026",
        "4 Januari 2026",
        "5 Januari 2026",
        "6 Januari 2026"
    ],

    correct:0,

    clue:"INK"
},

{
    question:"Warna favorit aku?",

    answers:[
        "Hitam",
        "Pink",
        "Kuning",
        "Ungu"
    ],

    correct:1,

    clue:"(space detected)"
},

{
    question:"Makanan yang pertama kali kita makan bareng?",

    answers:[
        "Bakmie",
        "Pizza",
        "Sate ayam",
        "Ayam penyet"
    ],

    correct:2,

    clue:"LUCK"
},

{
    question:"Date pertama kali ke mana?",

    answers:[
        "Blok M",
        "Fauna Land",
        "Bioskop",
        "Photoism"
    ],

    correct:1,

    clue:"OVER"
},

{
    question:"Tempat yang paling berkesan buat aku?",

    answers:[
        "Blok M",
        "Photoism",
        "Gramedia",
        "Uniqlo"
    ],

    correct:2,

    clue:"VACATION"
},

{
    question:"Camilan favorit aku?",

    answers:[
        "Oreo",
        "Cookies",
        "Rumput laut",
        "Sosis"
    ],

    correct:3,

    clue:"ENGLISH"
},

{
    question:"Susu yang sering aku beli?",

    answers:[
        "Ultra Milk Plain",
        "Cimory Salted Caramel",
        "Mujigae Banana",
        "Oatmilk Chocolate"
    ],

    correct:2,

    clue:"(space detected)"
},

{
    question:"Es krim favorit aku?",

    answers:[
        "Cookies n Cream",
        "Chocolate Lava",
        "Fruit",
        "3 Color Walls"
    ],

    correct:0,

    clue:"YOGHURT"
},

{
    question:"Minuman yang selalu aku pesan?",

    answers:[
        "Americano",
        "Matcha",
        "Chocolate",
        "Latte"
    ],

    correct:2,

    clue:"OBJECT"
},

{
    question:"Apa yang aku suka dari kamu?",

    answers:[
        "Emotional yang stabil",
        "Humoris banget",
        "Tinggi badan",
        "Duiiiittttt"
    ],

    correct:0,

    clue:"UMBRELLA"
}

];
// ======================================
// QUIZ ENGINE
// ======================================

function startQuest(){

    currentQuestion = 0;
    hp = 3;

    renderQuestion();

}

function renderQuestion(){

    const q = questions[currentQuestion];

    render(`

<div id="hud">

<div id="hpBox">

<div id="hpText">LOVE</div>

<div id="hp">

<div id="loveBar">

${"❤️".repeat(hp)}
${"🩶".repeat(3-hp)}

</div>

</div>

</div>

<div id="quest">

QUEST

<br><br>

${currentQuestion+1} / ${questions.length}

</div>

</div>

<div class="story-box">

<p class="question">

${q.question}

</p>

<div class="answers">

${q.answers.map((item,index)=>`

<button
class="answer-btn"
data-index="${index}">

${item}

</button>

`).join("")}

</div>

</div>

`);

    document.querySelectorAll(".answer-btn").forEach(button=>{

        button.addEventListener("click",()=>{
playClick();

            checkAnswer(Number(button.dataset.index));

        });

    });

}
// ======================================
// CHECK ANSWER
// ======================================
      const correctSound = new Audio("sounds/correct.mp3");
correctSound.volume = 0.6;
      const wrongSound = new Audio("sounds/wrong.mp3");
wrongSound.volume = 0.5;
      const clickSound = new Audio("sounds/click.mp3");
clickSound.volume = 0.4;
      const gameOverSound = new Audio("sounds/gameover.mp3");
gameOverSound.volume = 0.6;
function playClick(){

    clickSound.currentTime = 0;
    clickSound.play().catch(()=>{});

}
function checkAnswer(index){

    const q = questions[currentQuestion];

    // ==========================
    // JAWABAN BENAR
    // ==========================
    if(index === q.correct){

        correctSound.currentTime = 0;
        correctSound.play().catch(()=>{});

        // Kalau ada clue
        if(q.clue){

            showCluePopup(
                "✨ CORRECT!<br><br>🔐 ENCRYPTED FILE SAVED<br><br><b>" + q.clue + "</b>",
                ()=>{

                    currentQuestion++;

                    if(currentQuestion >= questions.length){

                        showTerminal();

                    }else{

                        renderQuestion();

                    }

                }
            );

        }else{

            currentQuestion++;

            showPopup("✨ CORRECT!<br><br>🔐 ENCRYPTED FILE SAVED");

            setTimeout(()=>{

                if(currentQuestion >= questions.length){

                    showTerminal();

                }else{

                    renderQuestion();

                }

            },1200);

        }

    }

    // ==========================
    // JAWABAN SALAH
    // ==========================
    else{

        hp--;

        wrongSound.currentTime = 0;
        wrongSound.play().catch(()=>{});

        const box = document.querySelector(".story-box");

        if(box){

            box.classList.add("shake");

            setTimeout(()=>{

                box.classList.remove("shake");

            },350);

        }

        showPopup("💔<br><br>LOVE -1");

        setTimeout(()=>{

            if(hp <= 0){

                gameOver();

            }else{

                renderQuestion();

            }

        },1200);

    }

}

// ======================================
// ENDING
// ======================================

function showEnding(){

render(`

<div class="story-box ending-box">

<h1 class="title">

MISSION<br>COMPLETE

</h1>

<p class="subtitle">

Unlocking Final Gift...

</p>

<div class="loading">

<div class="loading-fill"></div>

</div>

</div>

`);

setTimeout(()=>{

showLetter();

},2500);

}

function showTerminal(){

    render(`

<div class="story-box">

<h2>ACCESS TERMINAL</h2>

<br>

<div id="terminalText">

Decrypting encrypted files...

<br><br>

█░░░░░░░░░ 10%

</div>

</div>

`);

const terminal = document.getElementById("terminalText");

setTimeout(()=>{

    terminal.innerHTML = `
    Decrypting encrypted files...

    <br><br>

    ███░░░░░░░ 35%
    `;

},800);

setTimeout(()=>{

    terminal.innerHTML = `
    Decrypting encrypted files...

    <br><br>

    ███████░░░ 70%
    `;

},1600);

setTimeout(()=>{

    terminal.innerHTML = `
    Decrypting encrypted files...

    <br><br>

    ██████████ 100%

    <br><br>

    ✔ FILES RECOVERED

    <br>

    ✔ MEMORY RESTORED
    `;

},2400);

setTimeout(()=>{

    terminal.innerHTML = `

    ✔ FILES RECOVERED

    <br>

    ✔ MEMORY RESTORED

    <br><br>

    PASSWORD REQUIRED

    <br><br>

    <input
        type="password"
        id="passwordInput"
        placeholder="Enter Password">

    <br><br>

    <button
        class="game-btn"
        id="unlockBtn">

        UNLOCK

    </button>

    `;

    // ⬇️ EVENT LISTENER PINDAH KE SINI
    document
    .getElementById("unlockBtn")
    .addEventListener("click",()=>{

        playClick();

        const password = document
        .getElementById("passwordInput")
        .value
        .trim()
        .toUpperCase();

        if(password === "I LOVE YOU"){

            showPopup("🔓 ACCESS GRANTED");

            setTimeout(()=>{

                showEnding();

            },1000);

        }else{

            showPopup(
                "❌ ACCESS DENIED<br><br>Hint: Remember the encrypted files."
            );

        }

    });

},4500);

}
// ======================================
// LOVE LETTER
// ======================================

function showLetter(){

render(`

<div class="story-box">

<div
id="letter"
class="typewriter">

</div>

<br>

<button
id="chatBtn"
class="game-btn hidden">

🎁 CLAIM YOUR GIFT

</button>

</div>

`);

const letter=document.getElementById("letter");
const btn=document.getElementById("chatBtn");

let index=0;

function typeWriter(){

if(index<loveLetter.length){

letter.innerHTML=

loveLetter.substring(0,index+1)+
'<span class="cursor">█</span>';
letter.scrollTop = letter.scrollHeight;

index++;

setTimeout(typeWriter,35);

}else{

letter.innerHTML=loveLetter;

setTimeout(()=>{

btn.classList.remove("hidden");

},1200);

}

}

typeWriter();

btn.addEventListener("click",()=>{

    showGift();

});

}
function showGift(){

    render(`
<div class="gift-box">

        <h1 class="title">

            GIFT<br>UNLOCKED

        </h1>

        <p class="typewriter">

📦 ON DELIVERY...

Your birthday gift is shipping to your house.

Please wait
just a little longer.

Happy Birthday.

        </p>

        <br>

        <button
    class="game-btn"
    onclick="location.reload()">

    THE END

        </button>

    </div>

    `);

}
// ======================================
// GAME OVER
// ======================================

function gameOver(){
  gameOverSound.currentTime = 0;
gameOverSound.play().catch(()=>{});

render(`

<div class="story-box">

<h1 class="game-over">

GAME OVER

</h1>

<p>

HP kamu habis.

</p>

<br>

<button
class="game-btn"
id="restartBtn">

RESTART

</button>

</div>

`);

document
.getElementById("restartBtn")
.addEventListener("click",()=>{

    playClick();

    setTimeout(()=>{

        location.reload();

    },100);

});

}
