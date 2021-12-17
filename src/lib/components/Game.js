import React from "react";
import Card from "./Card";
import {cardsData} from '../data/cards'
import "./../assets/css/index.css";

class Game extends React.Component {
  constructor(){

    super();
    this.state={
      cards:cardsData,
      lastchangedCard:null,
      cancanged:true
    };
  }

  handleClick(id){

        this.setState({cancanged:false});

        let new_cards,current_card;

        if(this.state.lastchangedCard === null){
          [new_cards,current_card]=this.rotateCard(id);

          this.setState({
            cards:new_cards,
            lastchangedCard:current_card,
            cancanged:true
          });


        }else{

          let current_clicked_card =this.currentCard(id);
          const prevChangedCard=this.state.lastchangedCard;
          if(current_clicked_card.name === prevChangedCard.name){
            [new_cards,current_card]=this.rotateCard(id);
            this.setState({
                    cards:new_cards,
                    lastchangedCard:null,
                    cancanged:true
            });

          }else{
            [new_cards,current_card]=this.rotateCard(id);
            this.setState({
              cards:new_cards,
              lastchangedCard:null
            });

            setTimeout(()=>{
              new_cards =this.endGame();
              console.log('new_cards',new_cards);
              this.setState({
                cards:new_cards,
                lastchangedCard:null,
                cancanged:true
              });
            },1500)
          
            
          }
        }



        // console.log('new',new_cards);

  }

  rotateCard(id){
    const current_card=this.currentCard(id);
    const new_cards=this.state.cards.map(c=>{
      if(c.id === current_card.id){

        return {...current_card,isFlipped:true}
      }else{

      return c;
      }
    });
    return [new_cards,current_card];
  }

  currentCard(id){
    const current_card =this.state.cards.filter(c=>c.id===id)[0];
    return current_card;
  }
  endGame(){

    const resetCards=this.state.cards.map(c=>{
        return {...c,isFlipped:false}
    });

    return resetCards;
  }

  render(){
    return (

      <section className="memory-game">
        {
          this.state.cards.map((card,index)=><Card key={index} card={card} onClick={()=>this.state.cancanged ? this.handleClick(card.id) : {} } />)
        }
        
      </section>
    );
  }

//   render(){
//     return (

//       <section className="memory-game">
// Ansaramman
        
//       </section>
//     );
//   }
}

export default Game;
