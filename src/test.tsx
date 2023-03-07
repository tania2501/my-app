export type UserType = {
  name: string
  age: number
  address: {city: string, house: number}
  laptop: {title: string}
  books: Array<string>
}

export const change = (u: UserType, name: string) => {
  return {...u, books: u.books.filter( b => b !== name)}
}