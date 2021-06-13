import bird from '../images/bird.svg';
import bull from '../images/bull.svg';
import cat from '../images/cat.svg';
import cow from '../images/cow.svg';
import dog from '../images/dog.svg';
import duck from '../images/duck.svg';
import elephant from '../images/elephant.svg';
import fish from '../images/fish.svg';
import giraffe from '../images/giraffe.svg';
import goose from '../images/goose.svg';
import horse from '../images/horse.svg';
import mouse from '../images/mouse.svg';
import rabbit from '../images/rabbit.svg';
import monkey from '../images/monkey.svg';
import tiger from '../images/tiger.svg';
import zebra from '../images/zebra.svg';
import turtle from '../images/turtle.svg';
import wolf from '../images/wolf.svg';

const images = [
  bird,
  bull,
  cat,
  cow,
  dog,
  duck,
  elephant,
  fish,
  giraffe,
  goose,
  horse,
  mouse,
  rabbit,
  monkey,
  tiger,
  zebra,
  turtle,
  wolf
];

const API_URL = 'https://api.memory.listen-me.ru';

const errors = {
  nameIsEmpty: 'Please, enter the name.',
  saveResultFetchIsFailed: 'Sorry, saving the result is failed. =('
};

export {
  images,
  API_URL,
  errors
};
