import { ARR } from '../../utils/constants';
import { algorithmResult } from '../../utils/helper';

const Algorithm = () => {
  console.log(algorithmResult(ARR));
  
  return (
    <section>
      <h3>JavaScript</h3>
      <p>
        Za odredjeni niz, primer [{ARR.join(', ')}], grupisati
        sve elemente koji se ponavljaju i zbir njihovih vrednosti, takodje
        poredjati rezultat po alfabetu. Rezultat treba da bude u formatu
        "a=15, x=4, y=2" i logovati u konzolu.
      </p>
      <h4>RESULT: {algorithmResult(ARR)}</h4>
    </section>
  )
}

export default Algorithm;