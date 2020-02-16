class SearchInfo {
    constructor(ageMe, interestMe, occasionMe) {
        this.age = ageMe;
        this.interest = interestMe;
        this.occasion = occasionMe;
    }
    isApplicable(gift) {
        let applicability = true;
        var theGift;
        for (theGift of gift.naa) {
            if (this.age == theGift || this.interest == theGift || this.occasion == theGift) {
                applicability = false;
            }
        }
        return applicability;
    }
}