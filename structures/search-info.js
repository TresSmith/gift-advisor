class SearchInfo {
    constructor(age, interest, ocassion) {
        this.age = age;
        this.interest = interest;
        this.ocassion = ocassion;
    }
    isApplicable(gift) {
        if (age == gift.age || interest == gift.interest || ocassion == gift.occasion) {
            return false;
        }
    }
}