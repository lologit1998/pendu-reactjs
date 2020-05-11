import React, { Component } from 'react';

import './App.css';

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const dictionnary = ["alphabet","propre","moche","esquimaux","carton","table","armoire"]
const MAX = dictionnary.length-1
const rand = Math.round(Math.random() * (MAX));
const VISUAL_PAUSE_MSECS = 750;
const misteryWord = "_".repeat(dictionnary[rand].length);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedLetter : '',
      word : dictionnary[rand],
      misteryWord : misteryWord,
      showMenu : false,
    }
  }

  /*genere un nouveau mot*/
  generateWord = rand =>{
    this.setState({
      word : dictionnary[rand],
      misteryWord : "_".repeat(dictionnary[rand].length),
      selectedLetter : '',
    })
  }

  /*verifie si la lettre existe et si oui elle remplace le "_" dans misteryword
  au bon index */
  searchChar(selectedLetter,word){
    let replaceWord = this.state.misteryWord
    if(word.includes(selectedLetter)){
      for(let i=0;i<word.length;i++){
        if(word[i]===selectedLetter)
          replaceWord = replaceWord.substr(0,i)+selectedLetter+replaceWord.substr(i+selectedLetter.length)
        }
    }else{
      console.log("no")
    }
    setTimeout(() => this.setState({ misteryWord: replaceWord }), VISUAL_PAUSE_MSECS)
  }

  /*met à jour le composant selectedLetter et lance la méthode searchChar */
  handleKeyClick = index => {
    this.setState({
      selectedLetter : alphabet[index],
    })
    this.searchChar(this.state.selectedLetter,this.state.word)
  }

  /*verifie si le mot est trouvé */
  continue(){
    return this.state.misteryWord===this.state.word
  }

  render() {
    const rand = Math.round(Math.random() * (MAX));
    let play = this.continue();
    console.log(play)

    return(
        <div>
          <div>Hello world</div>
          <div>
            {alphabet.map((letter,index) => (
                <button type="button"  value={letter} key={index}  onClick={()=> this.handleKeyClick(index)} >{letter}</button>
            ))}
          </div>
          <div>
            <span> Mystery Word : {this.state.misteryWord}</span>
          </div>
          <div> 
            <span>Key Value : {this.state.selectedLetter}</span>
          </div>
          <div> 
            <button onClick={() =>this.generateWord(rand)}>Créez un mot</button>
          </div>
          <div>
            <span> Word : {this.state.word}</span>
          </div>
        </div>
    )
  }
}

export default App;
