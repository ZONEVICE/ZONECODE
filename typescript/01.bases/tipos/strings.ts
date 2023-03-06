(() => {
    const batman: string = 'batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toLocaleUpperCase());
    // Checks if position 10 exists. If not, executes the or.
    // This prevents errors on the console.
    console.log(batman[10]?.toUpperCase() || 'No está presente.');
})();