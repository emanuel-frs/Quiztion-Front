import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { playClickSound } from '../../utills/sound';

interface ButtonHeaderProps {
  title: string;
  onPress: () => void;
  style: object;
  textStyle: object;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ title, onPress, style, textStyle }) => {
  const handlePress = () => {
    playClickSound();
    onPress();
  };

  return (
    <Pressable style={({ pressed }) => [style, pressed && styles.btnPressed]} onPress={handlePress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default ButtonHeader;
