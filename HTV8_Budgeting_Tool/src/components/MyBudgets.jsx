import BudgetOverview from "./BudgetOverview"
import CreateNewBudget from "./CreateNewBudget"

function MyBudgets(){
    return(
        <>
        {/*Next steps: 
        - Fetch budget details (indirect) from sqlite db and iterate through to create all budgetOverview components
        - Create add budget component (+ Button)
        - If there are no budget records generate widescreen form of add budget component
        */}
        <div className="mybudgets-dashboard">
        <h1>My budgets dashboard</h1>
        <BudgetOverview 
        title='University Tuition' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
        endGoal={1000} totalIncome={500} totalExpenses={350} savings={500} />
        <CreateNewBudget/>
        <h1>My favourite threads</h1>
        {/*Checks for favourite thread list,returns relevant hyperlinks list or returns explore button if none are found.*/}
        </div>
        </>
    )
}

export default MyBudgets