import React, { useState } from 'react';
import { View } from 'react-native';
import QuestionModel from '../QuesionModel/QuestionModel';

interface Option {
  title: string;
  onPress: () => void;
}

interface QuestionGroupProps {
  options: Option[];
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number, onPress: () => void) => {
    setSelectedIndex(index);
    onPress();
  };

  return (
    <View style={{width: '100%'}}>
      {options.map((option, index) => (
        <QuestionModel
          key={index}
          title={option.title}
          onPress={() => handleSelect(index, option.onPress)}
          isSelected={selectedIndex === index}
        />
      ))}
    </View>
  );
};

export default QuestionGroup;
