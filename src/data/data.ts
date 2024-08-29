import { DataTypeEnum, IData } from '../interfaces/data.interfaces';

const data: Array<IData> = [
  {
    type: DataTypeEnum.Sentence,
    text: 'Em tinnav',
    meaning: 'what did you eat?',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Nuvvu',
    meaning: 'you',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Meeru',
    meaning: 'you (respectful to address elders and all )',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Nenu',
    meaning: 'me',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Neeku',
    meaning: 'for you',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Neeku enduku',
    meaning: 'why for you?',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Naaku',
    meaning: 'for me (for myself)',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Kavali',
    meaning: 'want',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Naaku kavali',
    meaning: 'I want',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Kavala',
    meaning: 'do you want?',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Oddhu',
    meaning: 'no (to deny something which you don’t want) (just no)',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Naaku Oddhu',
    meaning: 'I don’t want',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Nachindha?',
    meaning: 'you like it?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Nachaledhu',
    meaning: 'I don’t like it',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Istam',
    meaning: 'we’ll use this word to say that you like something',
    examples: ['Naaku Idhi istam (I like this )'],
  },
  {
    type: DataTypeEnum.Word,
    text: 'Idhi',
    meaning: 'this one',
    meta: '(These both are more like to address something specific )',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Adhi',
    meaning: 'that one',
    meta: '(These both are more like to address something specific )',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Mari?',
    meaning: 'then what?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Padukuntunna',
    meaning: 'about to sleep',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Inka / inkenti',
    meaning: 'what else ? (Like aur kya ?)',
    examples: ['inka em kavali (what else do you want? )'],
  },
  {
    type: DataTypeEnum.Word,
    text: 'Ikkada',
    meaning: 'here',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Akkada',
    meaning: 'there',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Ela',
    meaning: 'how',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Enduku',
    meaning: 'why',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Ekkada',
    meaning: 'where',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Entidhi/Enti ',
    meaning: 'what',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Evaru',
    meaning: 'who',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Andaru',
    meaning: 'Everyone (all the members there)',
    examples: ['Evaru andaru (who all?) '],
  },
  {
    type: DataTypeEnum.Word,
    text: 'Cheppu',
    meaning: 'tell',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Cheppala',
    meaning: 'should I say?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Chepthunnava',
    meaning: ' are you saying? ',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Chepthunnava ledha?',
    meaning: 'are you gonna say or not? ',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Cheppindhi',
    meaning: 'she told',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Cheppadu',
    meaning: 'he told',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Chepparu',
    meaning: 'they told',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Cheppaledhu',
    meaning: 'didn’t tell',
    examples: ['Naaku evaru cheppaledhu ( nobody told me)'],
  },
  {
    type: DataTypeEnum.Word,
    text: 'Ela',
    meaning: 'how',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Unnava',
    meaning: 'are you there?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Ela unnav',
    meaning: 'how are you ?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Baagunna',
    meaning: 'I’m good',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Baalenu',
    meaning: 'I’m not good',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Tinnava',
    meaning: 'did you eat?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Tinnara',
    meaning:
      'did you eat(In a much formal way , especially when addressing elders)',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Ekkada',
    meaning: 'where?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Ekkada unnav',
    meaning: 'where are you?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Osthunnava',
    meaning: 'are you coming?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Tindhama?',
    meaning: 'shall we eat?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Padukunnava?',
    meaning: 'did you sleep',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Paduko',
    meaning: 'sleep no',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Thaagava?',
    meaning: 'did you drink?',
  },
  {
    type: DataTypeEnum.Word,
    text: 'Neellu',
    meaning: 'water',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Neellu thaagu',
    meaning: 'drink water',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Velthunna',
    meaning: 'I am leaving',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Vellava?',
    meaning: 'did you leave?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Vellocha?',
    meaning: 'can I leave?',
  },
  {
    type: DataTypeEnum.Sentence,
    text: 'Vellesi ocha',
    meaning: 'I went and came',
  },
];

export default data;
