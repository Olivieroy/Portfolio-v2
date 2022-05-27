const textAnim = document.getElementById('textanim');

new Typewriter(textAnim, {
   loop: true,
})
.pauseFor(500)
.typeString('développeur Front-End !') 
.pauseFor(2000)
.deleteChars(23)
.pauseFor(800)
.typeString("graphiste !")
.pauseFor(2500)
.start()