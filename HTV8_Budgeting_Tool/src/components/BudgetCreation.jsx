import { useState } from 'react';
import './BudgetCreation.css';
import CreateNewAddButton from "./CreateNewAddButton.jsx";
import {Modal} from "@mui/base";
import {Box, Typography} from "@mui/material";


function evaluateBudget(expenses, income) {
    if (income - expenses > 0) {
        document.getElementById("result-msg").hidden = false
    } else {
        console.log("You wont get richer typing your stuff here")
    }
}

function addCareer() {

}

function BudgetCreation(){
    const [expense, setExpense] = useState('');
    const [income, setIncome] = useState('');

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return(
        <>
            <label className='income-title'>Income</label>
            <div className='expenses-fill'>
                <div>
                    <label>Add your career:</label>
                    <CreateNewAddButton context='Career' display={open}/>
                    <div id='career-div'>
                        <Modal id='career-modal'
                            open={true}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Box>
                                <Box>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div>
                    <label>Income:</label>
                    <input onChange={(e) => {setIncome(e.target.value)}}
                           type='text'/>
                </div>
                <button type='button' onClick={e =>
                    evaluateBudget(expense, income)}>Submit</button>
                <label id='result-msg' hidden>Good plan!</label>
            </div>

        </>
    )
}

export default BudgetCreation