function reservationElements() {
    return {
        setOneWayRadioButtom: () => { return $('[value="oneway"]') },
        passangerSelectOption: () => $('[name="passCount"]')
    }
}

function reservationMethods() {
    const element = reservationElements();

    return {
        setOneWayRadioButtom: () => {
            element.setOneWayRadioButtom().waitForExist();
            element.setOneWayRadioButtom().click();
        },
        passangerSelectOption: () => {
            element.passangerSelectOption().waitForExist();
            element.passangerSelectOption().selectByAttribute('value','4');
        }
    }
}

function reservation() {
    const reservation = reservationMethods();
    return {
        fillForm: () => {
            reservation.setOneWayRadioButtom();
            reservation.passangerSelectOption();
        }
    }
}

module.exports = reservation();