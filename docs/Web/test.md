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

```python
print("Hello Word")
```

```python live
import random
print(random.randint(1, 10))
```