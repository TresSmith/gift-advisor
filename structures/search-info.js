class SearchInfo {
    constructor(age, interest, ocassion) {
        this.age = age;
        this.interest = interest;
        this.ocassion = ocassion;
    }
    isApplicable(gift) {
        let applicability = true;
        for (element of gift.naa) {
            if (age == element || interest == element || ocassion == element) {
                applicability = false;
            }
        };
        return applicability;
    }
}