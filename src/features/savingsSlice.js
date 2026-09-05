import { createSlice } from "@reduxjs/toolkit";
import { getUnpaidContributionDays } from "../utils/contributionDays";


const initialState = {
    balance: 0,
    totalContributions: 0,

    plan: {
        frequency: "daily",
        amount: 2000,
        startDate: "2026-01-01",
        endDate: "2026-12-31",
    },

    transactions: [],
};


const savingsSlice = createSlice({
    name: "savings",

    initialState,

    reducers: {

        // RECORD CONTRIBUTION
        recordContribution: (state, action) => {
            const {
                amount,
                date,
            } = action.payload;

            const dailyAmount = state.plan.amount;

            // Validate amount

            if (!amount || amount <= 0) {
                return;
            }

            if (amount < dailyAmount) {
                return;
            }

            if (amount % dailyAmount !== 0) {
                return;
            }


            // Plan dates

            const startDate = new Date(
                `${state.plan.startDate}T00:00:00`
            );

            const endDate = new Date(
                `${state.plan.endDate}T00:00:00`
            );

            const paymentDate = new Date(
                `${date}T00:00:00`
            );


            // Payment must be inside the plan
            if (
                paymentDate < startDate ||
                paymentDate > endDate
            ) {
                return;
            }


            // Number of days user wants

            const remainingDays =
                amount / dailyAmount;


            // Build unpaid dates

            const unpaidDates =
                getUnpaidContributionDays({
                    startDate: state.plan.startDate,
                    endDate: state.plan.endDate,
                    paymentDate: date,
                    transactions: state.transactions,
                });


            // Prevent paying more days
            // than are available


            if (
                daysRequested >
                unpaidDates.length
            ) {
                return;
            }


            // Pay oldest unpaid days first

            const daysToPay =
                unpaidDates.slice(
                    0,
                    remainingDays
                );


            daysToPay.forEach(
                (contributionDate, index) => {

                    state.transactions.unshift({
                        id:
                            Date.now() + index,

                        type: "contribution",

                        amount: dailyAmount,

                        note: "Daily Contribution",

                        date: contributionDate,
                    });
                }
            );


            // Update balance

            const amountRecorded =
                daysToPay.length *
                dailyAmount;


            state.balance += amountRecorded;

            state.totalContributions +=
                amountRecorded;
        },


        // SET CONTRIBUTION PLAN

        setContributionPlan: (
            state,
            action
        ) => {

            state.plan =
                action.payload;
        },


        // WITHDRAW

        withdraw: (
            state,
            action
        ) => {

            const amount =
                action.payload;


            if (
                amount <= 0 ||
                amount > state.balance
            ) {
                return;
            }


            state.balance -= amount;


            state.transactions.unshift({
                id: Date.now(),

                type: "withdrawal",

                amount,

                note: "Withdrawal",

                date:
                    new Date()
                        .toLocaleDateString(
                            "en-CA"
                        ),
            });
        },

    },
});


export const {
    recordContribution,
    setContributionPlan,
    withdraw,
} = savingsSlice.actions;


export default savingsSlice.reducer;