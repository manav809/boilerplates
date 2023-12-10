# MUI Theming

```ts
// Styling Components
const newComponent = styled(OldComponent)(() => {
    backgroundColor: "#ABCDFG'
}))
```

```ts
//Inline CSS: sx={{}} same as style={{}}
<Component sx={{alignItems: "end"}}>
    Hello   
</Component>
```

```js
function App() {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
  return (
    <div className="main" style={styles.main}>
      <input type="text" style={styles.inputText}></input>
    </div>
  );
}
```