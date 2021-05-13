import { getPoketmonList } from '../apis/getPokemonList';
import { PokemonListItem } from '../components/Card';
import { Cards } from '../components/Cards';
import Head from 'next/head'

interface HomeProps {
  pokemonList: PokemonListItem[];
}

const Home = ({ pokemonList }: HomeProps) => {
  <>
    <Head>
      <title>Pokemon World</title>
    </Head>
    <Cards pokemonList={pokemonList}/>
  </>
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

export default Home;