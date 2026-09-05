export function getUnpaidContributionDays({
    startDate,
    endDate,
    paymentDate,
    transactions,
}) {
    const start = new Date(
        `${startDate}T00:00:00`
    );

    const end = new Date(
        `${endDate}T00:00:00`
    );

    const payment = new Date(
        `${paymentDate}T00:00:00`
    );

    const unpaidDates = [];

    let currentDate = new Date(start);

    while (currentDate <= payment && currentDate <= end) {

        const dateString =
            currentDate.toLocaleDateString(
                "en-CA"
            );

        const alreadyPaid =
            transactions.some(
                (transaction) =>
                    transaction.type ===
                    "contribution" &&
                    transaction.date ===
                    dateString
            );

        if (!alreadyPaid) {
            unpaidDates.push(dateString);
        }

        currentDate.setDate(
            currentDate.getDate() + 1
        );
    }

    return unpaidDates;
}