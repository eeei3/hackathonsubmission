import './BudgetOverview.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateNewBudget(){
    return(
        <>
        <a href=''>
        <div className='budget-wrapper'>
            <div className='circle'>
            
            <AddCircleIcon fontSize='large'></AddCircleIcon>
            </div>
            <div className='centered-text'>
                Create a new Budget
            </div>
        </div>
        </a>
        </>
    )
}

export default CreateNewBudget