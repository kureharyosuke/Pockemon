import { getPoketmonList } from '../apis/getPokemonList';
import { PokemonListItem } from '../components/Card';
import { Cards } from '../components/Cards';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// next-i18next Setup
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//

import Head from 'next/head'

interface HomeProps {
  pokemonList: PokemonListItem[];
}

const Home = ({ pokemonList }: HomeProps) => {
  const { t } = useTranslation("common")
  
  return (
  <>
    <Head>
        <title>{t('title') }</title>
    </Head>
      <Cards pokemonList={pokemonList}/>
      <h1>{t('title')}</h1>
      <h2>{ t('description')}</h2>
      <button>{t('cards.button') }</button>
  </>
  )
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   locale = locale ? locale as string : 'ja'
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   }
// }

export const getStaticProps: GetStaticProps = async ( {locale}) => {
  // console.log("locale of getStaticProps", locale);
  locale = locale ? locale as string : 'ja'
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
            ...await serverSideTranslations(locale, ['common']),
        }
      }
    }
  } catch (error) {
    console.log('ERROR', error)
  }

  return {
    props: {
      pokemonList: [],
    ...await serverSideTranslations(locale, ['common']),
    }
  }
}

// next.js + i18n  : getStaticProps 





export default Home;