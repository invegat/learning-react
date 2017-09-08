import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import Summary from './Summary'
const Recipe = ({ name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
            <Summary title={name} ingredients={ingredients.length} steps={steps.length} />
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
    </section>

Recipe.displayName = 'Recipe'

export default Recipe
