<a href="https://de.wikipedia.org/wiki/JavaScript">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=yellow" />
</a>

<a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</a>

<a href="https://reactjs.org/">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
</a>

<br />

<a href="https://en.wikipedia.org/wiki/HTML5">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</a>

<a href="https://en.wikipedia.org/wiki/CSS">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
</a>

<br/>

<a href="https://www.npmjs.com/">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
</a>

<a href="https://webpack.js.org/">
  <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
</a>

<a href="https://jestjs.io/">
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" />
</a>

# Live preview

https://hikyn.github.io/react-shopping-cart/

# Demo gif

<details>
<summary>Mobile version</summary>
<br>
<img src="src/images/preview.gif " height="500"/>
</details>

<details>
<summary>Desktop version</summary>
<br>
<img src="src/images/previewDesktop.gif " height="500"/>
</details>

# Encountered problems:
## Tests:
### userEvent.setup()
Wasn't able to use ```userEvent.setup()```, 
figured out that ```npm create-react-app``` uses 
```"@testing-library/user-event": "^13.5.0"```, but
.setup() was introduced in 14.0.0. 

Solution: update dependency.
```bash
npm outdated
npm install @testing-library/user-event@latest
```

#### Proper click testing
We need to make sure that everything that takes time (rendering, user events, data fetching)
is completed before test assertions are run.

render() automatically wraps content in act() if we use React Testing Library, but
user.click needed to be wrapped manually.

```js
await act(async() => {
    await user.click(button);
})
```

### Wrapping proper action
If we use act() on for loop, it will not work.
```js
await act(async () => {
    for(let i = 0; i < 5; i += 1) {
        await user.click(button);
    }
})
```

Correct usage will be:
```js
for(let i = 0; i < 5; i += 1) {
    await act(async () => {
        await user.click(button);
    })
}
```

### Testing component with ```Link```

Components that use Link needs to appear inside a router, so instead of this:
```js
render(<Shop />);
```

We use this:
```js
render(<MemoryRouter><Shop /></MemoryRouter>);
```

## Deployment
### Deploying to gh-pages removed all images

Reason: I changed "homepage" in package.json

Solution: Change all image path to homepage/{previousPath}

# To improve
- View added items in cart
- Search bar
- Accessibility (after Advanced HTML on odin)
- Product pages
