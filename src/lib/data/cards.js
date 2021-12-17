import aurelia from "../assets/images/aurelia.svg";
import angular from "../assets/images/angular.svg";
import ember from "../assets/images/ember.svg";
import vue from "../assets/images/vue.svg";
import backbone from "../assets/images/backbone.svg";
import react from "../assets/images/react.svg";

const cards = [
  { id: 1, name: "aurelia", image: aurelia },
  { id: 2, name: "aurelia", image: aurelia },
  { id: 3, name: "angular", image: angular },
  { id: 4, name: "angular", image: angular },
  { id: 5, name: "ember", image: ember },
  { id: 6, name: "ember", image: ember },
  { id: 7, name: "vue", image: vue },
  { id: 8, name: "vue", image: vue },
  { id: 9, name: "backbone", image: backbone },
  { id: 10, name: "backbone", image: backbone },
  { id: 11, name: "react", image: react },
  { id: 12, name: "react", image: react },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
