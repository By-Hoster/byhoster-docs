---
sidebar_position: 1
---

# Test

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

```html live
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <title>Mon premier site statique avec ReactJS</title>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    </head>
    <body>
        <h1>Bonjour !</h1>
        <Clock />
    </body>
```
