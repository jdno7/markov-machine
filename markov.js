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
    // console.log(this.chains)
  }


  /** return random text from chains */

  makeText(numWords) {
    const arr = []
    const finalArr = []
    this.text 
    
    for (let key in this.chains){

       arr.push(key)
    }

    for (let i = 0; i <= numWords+5; i++){
      const rand = Math.floor(Math.random() * arr.length)
    
        if(finalArr.length === numWords){
          this.text = finalArr.join(' ')
          return 
        }
        else if (this.chains[arr[rand]][0] === null){
          // console.log('catching and should continue')
          continue 
        }
 
        else if (this.chains[arr[rand]].length > 1){
     
          const randTwo = Math.floor(Math.random() * this.chains[arr[rand]].length)
  
          finalArr.push(this.chains[arr[rand]][randTwo]);
        }
        finalArr.push(this.chains[arr[rand]][0]);
        
    }
    this.text = finalArr.join(' ')
      }
      
    }
    
    



// let mm = new MarkovMachine('the arsenist has odly shaped has feet')
// // const chains = {}



module.exports = { MarkovMachine }