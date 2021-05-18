import { Card, PokemonCard, PokemonListItem } from '../Card'
import { IMAGE_URL, MAX_POKEMON_COUNT, TITLE_IMAGE } from '../../constants/common'
import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import * as Styles from './styles'
import { useTranslation } from "next-i18next";


interface CardsProps {
  pokemonList: PokemonListItem[];
}

export const Cards = ({ pokemonList }: CardsProps) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const [translateX, setTranslateX] = useState<number>(0);
  const [cards, setCards] = useState<PokemonCard[]>([]);

  useEffect(() => {
    setCards(
      pokemonList.map(pokemon => ({
        ...pokemon,
        image:`${IMAGE_URL}${pokemon.number}.png`,
      })),
    )
  }, []);

  useEffect(() => {
    let count: number = 1;
    let moveUnit: number = 9;
    const interval: NodeJS.Timeout = setInterval(() => {
      setTranslateX(moveUnit * -1);
      if(((MAX_POKEMON_COUNT * count) / 2) * 9 <= moveUnit) {
        setCards(prev => [
          ...prev,
          ...prev.filter((item, index) =>  index <  MAX_POKEMON_COUNT),
        ])
        count += 1;
      }
      moveUnit += 9;
    }, 1000);

    return () =>  {
      clearInterval(interval)
    }
  }, []);

  const handleClickFindPokemon = useCallback(() => {
    router.push('docs');
  }, [])

  return (
    <Styles.Container>
      <Styles.Image src={TITLE_IMAGE} alt="titleImage"/>
      <Styles.Content translateX={translateX}>
        {cards.map((card, index) => (
          <Styles.CardWrapper key={index}>
            <Card pokemon={card}/>
          </Styles.CardWrapper>
        ))}
      </Styles.Content>
      <Styles.Text onClick={handleClickFindPokemon}>{t('title')}</Styles.Text>
      <button>{t('title')}</button>
    </Styles.Container>
  )

}

// Cards.getInitialProps = () => ({
//   namespacesRequired: ['common'],
// })

// export default withNamespaces('common')(Cards)