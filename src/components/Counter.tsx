import { observer } from "mobx-react-lite";
// import { counterFunction } from "../store/counterFunc";
import { useEffect } from "react";
import { runInAction } from "mobx";
import { CounterStoreClass } from "../store/counterClass";

// const store = counterFunction();
const store = new CounterStoreClass();

type Props = {
  initialCount?: number;
};

const Counter = observer((props: Props) => {
  useEffect(() => {
    runInAction(() => {
      store.count = props.initialCount ?? 0;
    });
  }, [props.initialCount]);
  return (
    <div>
      <h1 style={{ color: store.color }}>{store.count}</h1>
      <div className="btnWrapper">
        <button onClick={store.inc}>+</button>
        <button onClick={store.dec}>-</button>
      </div>
    </div>
  );
});

export default Counter;

// import { observer, useLocalObservable } from "mobx-react-lite";

// type Props = {
//   initialCount?: number;
// };

// const Counter = observer((props: Props) => {
//   const store = useLocalObservable(() => {
//     return {
//       count: props.initialCount ?? 0,
//       get color() {
//         return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
//       },
//       dec() {
//         this.count--;
//       },
//       inc() {
//         this.count++;
//       },
//     };
//   });
//   return (
//     <div>
//       <h1 style={{ color: store.color }}>{store.count}</h1>
//       <div className="btnWrapper">
//         <button onClick={store.inc}>+</button>
//         <button onClick={store.dec}>-</button>
//       </div>
//     </div>
//   );
// });

// export default Counter;
