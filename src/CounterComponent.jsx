import useCounter from "./useCounter"


const CounterComponent = () => {

    const {count, increment, decrement} = useCounter(0, 2)

  return (
    <div>
        <h2>Contador: {count}</h2>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterComponent

