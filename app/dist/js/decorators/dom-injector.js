export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do Dom com o seletor ${seletor}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map