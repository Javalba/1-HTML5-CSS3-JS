class Board {
  constructor(Keyboard, Song, rows, columns) {
    this.keyboard = Keyboard;
    this.song = Song;
    console.log(this.song);
    this.rows = rows;
    this.columns = columns;

    this.assignControlsToKeys();
    window.addEventListener('keydown', activeKeydown);
    window.addEventListener("keyup", activateKeyup);
  }

  buildSong() {
    for (let i = 0; i < this.rows; i++) {
      let currentDiv = document.getElementsByClassName('sheet');
      for (let j = 0; j < this.columns; j++) {

        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        newDiv.setAttribute('data-row', i);
        newDiv.setAttribute('data-col', j);
        // let currentDiv = document.getElementsByClassName('sheet');
        currentDiv[0].append(newDiv);
      }
    }
  }

  update() {
    this.printSong(this.rows, this.cols);
    // console.log('hello');
    console.log(this.song);
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.update.bind(this), 500);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  assignControlsToKeys() {
    $('body').on('keydown', function(e) {
      switch (e.keyCode) {
        case 80: // p pause
          if (this.intervalId) {
            this.stop();
          } else {
            this.start();
          }
          break;
         case 65: // p pause
         this.checkNote(0);
        //     break;
          case 83:
          this.checkNote(1);
            break;
          case 68:
          this.checkNote(2);

            break;
          case 70:
          this.checkNote(3);

            break;
          case 71:
          this.checkNote(4);

            break;
          case 72:
          this.checkNote(5);

            break;
          case 74:
          this.checkNote(6);

            break;
          case 75:
          this.checkNote(7);

            break;
          default:

      }
    }.bind(this));
  }

/**
 * this.song.positionArray --> index of array
 * this.song.tempo --> times of notes
 * this.song.notes --> notes of song
 * @return {[type]}
 */

  printSong() {
    let element = document.querySelector(`[data-row="${this.song.tempo[this.song.positionArray]}"][data-col="${this.song.notes[this.song.positionArray]}"]`);
    if (element) {
      element.classList.add("notes");
    }

    for (let i = this.song.positionArray  ; i > 0; i--) {
      let prev = document.querySelector(`[data-row="${this.song.tempo[i-1]-1}"][data-col="${this.song.notes[i-1]}"]`);
      if(prev)  prev.classList.remove("notes");
      let next = document.querySelector(`[data-row="${this.song.tempo[i-1]}"][data-col="${this.song.notes[i-1]}"]`);
      if(next)next.classList.add('notes');
      this.song.tempo[i - 1]++;
    }
    if (this.song.notes.length >  this.song.positionArray) {
      this.song.tempo[this.song.positionArray]++;
      this.song.positionArray++;
    }
    if(this.song.tempo[this.song.tempo.length-1] === this.rows+1)this.stop();
  }

  checkNote(note){
    let keyPressed = document.querySelector(`[data-row="${rows-1}"][data-col="${note}"]`);
    if (!keyPressed) return;
  //  console.log(keyPressed);

    if (keyPressed.classList.contains("notes")) {
        console.log("AAAAAAAAAAAAAAA");
      keyPressed.classList.add("notes-active");
    }
  }
}


// const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b', '2'];
const rows = 8;
const cols = 8;
const keys = Array.from(document.querySelectorAll('.key')); // key's array
const val = 0;
const songs = ["cdefgab2", "ggag2bggagcbgggecbaffecdc"];


const keyboard = new Keyboard(keys);
let song = new Song(songs[0]);
const game = new Board(keyboard, song, rows, cols);
game.buildSong();
game.start();
