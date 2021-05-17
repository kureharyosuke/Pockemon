import { GetStaticProps } from 'next'
import { getPoketmonList } from '../apis/getPokemonList';
import { PokemonListItem } from '../components/Card';
import { Cards } from '../components/Cards';

// next-i18next Setup
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//

import Head from 'next/head'

interface HomeProps {
  pokemonList: PokemonListItem[];
}

const Home = ({ pokemonList }: HomeProps) => {
  return (
  <>
    <Head>
      <title>Pokemon World</title>
    </Head>
    <Cards pokemonList={pokemonList}/>
  </>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await getPoketmonList()
    if (response?.results) {
      const pokemonList = response.results.map((item, index) => ({
        ...item,
        number: index + 1,
      }));

      return {
        props: {
          pokemonList,
        }
      }
    }
  } catch (error) {
    console.log('ERROR', error)
  }

  return {
    props: {
      pokemonList: [],
    }
  }
}

// next.js + i18n  : getStaticProps 


export const getStaticProps: GetStaticProps = anync ({ locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  }
})




export default Home;