const observableModule = require("tns-core-modules/data/observable");

function FunFactsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = FunFactsViewModel;
