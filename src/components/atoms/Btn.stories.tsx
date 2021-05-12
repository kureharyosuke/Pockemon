import React from 'react'
import Btn from './Btn'

export default {
  title: 'Atoms / Btn',
  component: Btn
}

export const button = () => {
  return <Btn>Btn</Btn>;
};

button.story = {
  name: 'default'
}

export const primartButton = () => {
  return <Btn>PRIMARY</Btn>
}