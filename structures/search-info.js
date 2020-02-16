class SearchInfo {
    constructor(ageMe, interestMe, ocassionMe) {
        this.age = ageMe;
        this.interest = interestMe;
        this.ocassion = ocassionMe;
    }
    isApplicable(gift) {
        let applicability = true;
        for (element of gift.naa) {
            if (age == element || interest == element || ocassion == element) {
                applicability = false;
            }
        }
        return applicability;
    }
}