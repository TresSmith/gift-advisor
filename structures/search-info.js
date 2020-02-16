class SearchInfo {
    constructor(ageMe, interestMe, ocassionMe) {
        this.age = ageMe;
        this.interest = interestMe;
        this.ocassion = ocassionMe;
    }
    isApplicable(gift) {
        let applicability = true;
        var theGift;
        for (theGift of gift.naa) {
            if (this.age == theGift || this.interest == theGift || this.ocassion == theGift) {
                applicability = false;
            }
        }
        return applicability;
    }
}