import { createSignal, onCleanup } from 'solid-js';

export default function MyCounter() {
    const [count, setCount] = createSignal(0);

    const interval = setInterval(
        () => setCount(count() + 1),
        1000
    );

    onCleanup(() => clearInterval(interval));

    return (
        <div>
            <h2>Counter: {count()}</h2>
        </div>
    );
}