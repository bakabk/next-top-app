import React from 'react';
import HTag from '../components/HTag/HTag';
import Button from '../components/Button/Button';
import P from '../components/P/P';

export default function Home(): JSX.Element {
  const handleClick = (): void => {
    console.log(1111);
  };

  return (
    <div>
      <HTag tag='h1'>Заголовок первого уровня</HTag>
      <Button apperanse='primary' onClick={handleClick} arrow='down'>primary button</Button>
      <Button apperanse='ghost' arrow='right'>ghost button</Button>
      <P size='s'>Маленький Маленький Маленький Маленький Маленький</P>
      <P>Средний Средний Средний Средний Средний Средний Средний</P>
      <P size='l'>Большой Большой Большой Большой Большой Большой</P>
    </div>
  );
}
