# Shopping cart project

## Encountered problems:
### Tests:
#### userEvent.setup()
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

#### Wrapping proper action
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

#### Testing component with ```Link```

Components that use Link needs to appear inside a router, so instead of this:
```js
render(<Shop />);
```

We use this:
```js
render(<MemoryRouter><Shop /></MemoryRouter>);
```

#### Deploying to gh-pages removed all images

Reason: I changed "homepage" in package.json

Solution: Change all image path to homepage/{previousPath}