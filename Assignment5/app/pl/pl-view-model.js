const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");

function PlViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Pl");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = PlViewModel;
