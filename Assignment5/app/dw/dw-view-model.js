const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");

function DwViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Dw");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = DwViewModel;
