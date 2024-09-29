// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    }
    return paye;
}



// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1800);
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = 500;
    const nssf = 1000;
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

