const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");

function ZiViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Zi");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = ZiViewModel;
