import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [expiry, setExpiry] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        let data = {
            name,
            price,
            quantity,
            expiry
        }
        console.log(data);
    }

    

    return (
        <div>

            <h1>Medicine</h1>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Medicine
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            name="price"
                            label="Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="expiry"
                            name="expiry"
                            label="Expiry"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setExpiry(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Medicine;