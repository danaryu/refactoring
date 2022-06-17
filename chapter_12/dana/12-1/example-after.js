class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }

    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
  
}