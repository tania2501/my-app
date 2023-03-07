import { change, UserType } from "./test"

test('upgrade laptop to macbook', () => {
  let user: UserType = {
    name: 'Anna',
    age: 24,
    address: {
      city: 'Kyjiv',
      house: 24
    },
    laptop: {title: 'Asus'},
    books: ['html', 'css', 'js', 'react']
  };
  
  let newUser = change(user, 'css')

  expect(user).not.toBe(newUser);
  expect(user.laptop).toBe(newUser.laptop);
  expect(user.address).toBe(newUser.address);
  expect(user.books).not.toBe(newUser.books);
  expect(newUser.books[1]).toBe('js');
  expect(user.books[2]).toBe('js');
  expect(newUser.books.length).toBe(3);
  expect(newUser.books).toEqual(["html", "js", "react"]);
  expect(user.books.length).toBe(4)
})