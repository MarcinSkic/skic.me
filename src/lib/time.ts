export interface ControlledInterval {
    start: () => void;
    stop: () => void;
    reset: () => void;
}

export function getControlledInterval(callback: () => void, duration: number) {
    let interval: ReturnType<typeof setInterval> | undefined;

    function start() {
        if (interval) return;

        interval = setInterval(callback, duration);
    }

    function stop() {
        if (!interval) return;

        clearInterval(interval);
        interval = undefined;
    }

    function reset() {
        stop();
        start();
    }

    start();
    return {
        start,
        stop,
        reset,
    };
}
