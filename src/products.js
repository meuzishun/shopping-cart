import babyBottleMicrophone from './images/baby_bottle_microphone.jpg';
import speaker from './images/e8_speaker.jpg';
import ksmMicrophone from './images/KSM_microphone.avif';
import soundcraftMixer from './images/soundcraft_mixer.jpg';
import uniqid from 'uniqid';

const products = [
  {
    name: 'Blue Microphones Baby Bottle SL Large-diaphragm Condenser Microphone',
    imgUrl: babyBottleMicrophone,
    description: 'cardioid condenser microphone',
    price: 399.99,
    id: uniqid(),
  },
  {
    name: 'PreSonus Eris E8 XT 8 inch Powered Studio Monitor',
    imgUrl: speaker,
    description: 'speaker',
    price: 259.95,
    id: uniqid(),
  },
  {
    name: 'Shure KSM141 Small-diaphragm Condenser Microphone',
    imgUrl: ksmMicrophone,
    description: 'cardioid condenser microphone',
    price: 899.0,
    id: uniqid(),
  },
  {
    name: 'Soundcraft Signature 12 MTK Mixer and Audio Interface with Effects',
    imgUrl: soundcraftMixer,
    description: 'mixer/interface',
    price: 585.0,
    id: uniqid(),
  },
  {
    name: 'item 5',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 6',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 7',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 8',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 9',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 10',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 11',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 12',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
  {
    name: 'item 13',
    description: 'it is cool',
    price: 1.23,
    id: uniqid(),
  },
  {
    name: 'item 14',
    description: 'it is also cool',
    price: 4.56,
    id: uniqid(),
  },
  {
    name: 'item 15',
    description: 'it sucks',
    price: 7.89,
    id: uniqid(),
  },
];

export default products;
