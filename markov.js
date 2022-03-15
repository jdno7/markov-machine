/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
    
    
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {}
    // console.log(this.words)
    // console.log(this.chains)
    for (let i = 0; i < this.words.length; i++){
      // console.log(mm.words[i], mm.words[i+1])
      if (i === this.words.length-1){
        this.chains[this.words[i]] = [null]
      }
      else if (this.chains[this.words[i]]) {
        this.chains[this.words[i]].push(this.words[i+1]);
      }
      else {
        this.chains[this.words[i]] = [this.words[i+1]]
      }
     
    }
    console.log(this.chains)
  }


  /** return random text from chains */

  makeText(numWords) {
    // const arr = []
    // let newText = '' 
    // for (let key in this.chains){
    //   // console.log(this.chains[key])
    //    arr.push(key)
    // }
    // const rand = Math.floor(Math.random() * arr.length+1)
    // // console.log(arr[rand])
    // for (let i = 0; i < numWords; i++){
    //   if (i = 0){
    //     newText += arr[rand];
    //     newText += ' ';
    //     if (this.chains[arr[rand]] === undefined){
    //       newText += ''
    //     }
    //     newText += this.chains[arr[rand]];
    //     newText += ' ';
    //   }
      
    // }
    // console.log(newText)
    }

}

let mm = new MarkovMachine('the arsenist has odly shaped has feet')
// const chains = {}

mm.makeText(5)

// console.log(chains)