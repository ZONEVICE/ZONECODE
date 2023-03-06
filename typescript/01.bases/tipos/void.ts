(() => {
    function callBatman(): void {
        return;
    }

    const callSuperMan = (): void => {
        return;
    }

    const a: void = callBatman();
    console.log(a); // undefined.
})();