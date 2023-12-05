import {Text} from 'react-native';
export interface text {
  input: string;
}
const Texts = ({input}: text) => {
  return <Text style={{color: 'black', fontWeight: 'bold'}}>{input}</Text>;
};
export default Texts;
