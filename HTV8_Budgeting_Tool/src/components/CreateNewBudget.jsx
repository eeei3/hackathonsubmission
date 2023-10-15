import './BudgetOverview.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Link} from "react-router-dom";

function CreateNewBudget(){
    return(
        <>
        <Link to='./budgetcreation'>
        <div className='budget-wrapper'>
            <div className='circle'>
            <AddCircleIcon fontSize='large'></AddCircleIcon>
            </div>
            <div className='centered-text'>
                Create a new Budget
            </div>
        </div>
        </Link>
        </>
    )
}

export default CreateNewBudget