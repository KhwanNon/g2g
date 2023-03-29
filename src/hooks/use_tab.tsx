import {useState} from 'react';

const useTab = (initialIndex: number) => {
  const [index, setIndex] = useState<number>(initialIndex);

  const toggleValue = (idx: number) => setIndex(idx);

  return {index, toggleValue};
};

export default useTab;
