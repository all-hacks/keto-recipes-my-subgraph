import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
import { NewRecipe, UpdatedRecipe } from '../generated/Recipe/Recipe'
import { Gravatar, Recipe } from '../generated/schema'

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleNewRecipe(event: NewRecipe): void {
  let recipe = new Recipe(event.params.id.toHex())
  recipe.owner = event.params.owner
  recipe.displayName = event.params.displayName
  recipe.imageUrl = event.params.imageUrl
  recipe.ingredients = event.params.ingredients
  recipe.steps = event.params.steps
  recipe.save()
}

export function handleUpdatedRecipe(event: UpdatedRecipe): void {
  let id = event.params.id.toHex()
  let recipe = Recipe.load(id)
  if (recipe == null) {
    recipe = new Recipe(id)
  }
  recipe.owner = event.params.owner
  recipe.displayName = event.params.displayName
  recipe.imageUrl = event.params.imageUrl
  recipe.save()
}
