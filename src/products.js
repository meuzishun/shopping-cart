import babyBottleMicrophone from './images/baby_bottle_microphone.jpg';
import speaker from './images/e8_speaker.jpg';
import ksmMicrophone from './images/KSM_microphone.avif';
import soundcraftMixer from './images/soundcraft_mixer.jpg';
import sennheiserHeadphones from './images/HD_600_ProductShot_03.webp';
import audioCables from './images/XLM5-XLF5-1.jpeg';
import micArm from './images/compass-specs-desktop.jpg';
import midiKeyboard from './images/KS88_angle_slug.jpg';
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
    name: 'Sennheiser HD 600 Open-back Audiophile / Professional Headphones',
    imgUrl: sennheiserHeadphones,
    description: 'headphones',
    price: 399.95,
    id: uniqid(),
  },
  {
    name: 'Pro Co EXM-25 Excellines Microphone Cable - 25 foot',
    imgUrl: audioCables,
    description: 'audio cables',
    price: 29.99,
    id: uniqid(),
  },
  {
    name: 'Blue Compass Microphone Arm',
    imgUrl: micArm,
    description: 'mic arm',
    price: 99.99,
    id: uniqid(),
  },
  {
    name: 'M-Audio Hammer 88 88-key Keyboard Controller',
    imgUrl: midiKeyboard,
    description: 'midi controller',
    price: 499.0,
    id: uniqid(),
  },
];

export default products;
