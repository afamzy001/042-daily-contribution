export function getContributionStatus(
    dateString,
    transactions
) {
    const today =
        new Date().toLocaleDateString("en-CA");


    // Check if this date already has
    // a contribution transaction
    const paymentExists =
        transactions.some(
            (transaction) =>
                transaction.type === "contribution" &&
                transaction.date === dateString
        );


    // --------------------------------
    // Payment already made
    // --------------------------------

    if (paymentExists) {
        return "paid";
    }


    // --------------------------------
    // Future date
    // --------------------------------

    if (dateString > today) {
        return "upcoming";
    }


    // --------------------------------
    // Today
    // --------------------------------

    if (dateString === today) {
        return "pending";
    }


    // --------------------------------
    // Past date
    // --------------------------------

    return "missed";
}

// GET TODAY'S CONTRIBUTION
export function getTodayContribution(
    transactions
) {
    const today =
        new Date().toLocaleDateString("en-CA");


    return transactions.find(
        (transaction) =>
            transaction.type === "contribution" &&
            transaction.date === today
    );
}