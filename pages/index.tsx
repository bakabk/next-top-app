import React, { useState } from 'react';
import HTag from '../components/HTag/HTag';
import Button from '../components/Button/Button';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import {WithLayout} from '../Layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState(4);
  const handleClick = (): void => {
    console.log(1111);
  };

  return (
    <>
      <HTag tag='h1'>Заголовок первого уровня</HTag>
      <Button apperanse='primary' onClick={handleClick} arrow='down'>primary button</Button>
      <Button apperanse='ghost' arrow='right'>ghost button</Button>
      <hr />
      <P size='s'>Маленький Маленький Маленький Маленький Маленький</P>
      <P>Средний Средний Средний Средний Средний Средний Средний</P>
      <P size='l'>Большой Большой Большой Большой Большой Большой</P>
      <hr />
      <Tag size='s'>Маленький тэг</Tag>
      <Tag size='m'>Обычный тэг</Tag>
      <Tag type='ghost'>Ghost тэг</Tag>
      <Tag type='primary'>Primary тэг</Tag>
      <Tag type='green'>Green тэг</Tag>
      <Tag type='red'>Red тэг</Tag>
      <Tag type='grey' href='https://ya.ru'>Grey тэг</Tag>
      <hr />
      <Rating rating={rating} isEditable onChangeRating={setRating}></Rating>
    </>
  );
}

export default WithLayout(Home);