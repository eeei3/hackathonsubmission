import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreateNewAddButton({context, display}){

    return(
        <>
        <div className='budget-wrapper' onClick={e => {
            display = true
        }}>
            <div className='circle'>
            <AddCircleIcon fontSize='large'></AddCircleIcon>
            </div>
            <div className='centered-text'>
                Add a new {context}
            </div>
        </div>
        </>
    )
}

export default CreateNewAddButton