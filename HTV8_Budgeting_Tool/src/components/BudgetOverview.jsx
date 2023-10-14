import './BudgetOverview.css'

const Budget = ({ budget }) => {
  return (
    <>
    </>
  )
}

function BudgetOverview({ title, description, endGoal, totalIncome, totalExpenses, savings }) {
  return (
    <>
      <div className='budget-wrapper'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='summary-stats'>
          <div className='income'>
            <p>Total Income: $</p>{totalIncome}
          </div>
          <div className='expenses'>
            <p>Total Expense: $</p>{totalExpenses}
          </div>
          <div className='savings'>
            <p>Total Savings: $</p>{savings}
          </div>
        </div>
        <div className='description'>
          <p>{description}</p>
          <div>
          <a id='decorated-link' href=''> Expand for a detailed view... </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BudgetOverview