import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function Medicine(props) {

    const [open, setOpen] = React.useState(false);
    const [deleteopen, setDeleteopen] = useState(false);
    const [editopen, setEditopen] = useState(false);
    const [name, setName] = useState("");
    const [did, setDid] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [expiry, setExpiry] = useState("");
    const [showData, setShowData] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeleteopen(false);
        setEditopen(false);
    };

    const handleClickdelete = (id) => {
        setDid(id)
        setDeleteopen(true);
    };

    const handleClickopen = (id) => {
        setEditopen(true);
        console.log(id);
        // EditData(id);

    };

    const handleDelete = () => {

        let getDataItem = JSON.parse(localStorage.getItem("medicine"));

        let GFilter = getDataItem.filter((g, i) => g.id !== did)

        localStorage.setItem("employee", JSON.stringify(GFilter))
        getdata();
        deleteopen(false);
    }

    const handleSubmit = () => {
        let data = {
            id: Math.floor(Math.random() * 1000),
            name,
            price,
            quantity,
            expiry
        }

        let medicineData = JSON.parse(localStorage.getItem('medicine'));

        let medicineArray = [];

        if (medicineData == null) {
            localStorage.setItem('medicine', JSON.stringify([data]));
            console.log(medicineArray);
        } else {
            medicineData.push(data)
            localStorage.setItem('medicine', JSON.stringify(medicineData));
        }
        handleClose();
        getdata();

        // console.log(data);
    }

    const getdata = () => {
        const getDataItem = JSON.parse(localStorage.getItem("medicine"));

        if (getDataItem !== null) {
            setShowData(getDataItem);
        }
    }

    useEffect(() => {
        getdata();
    },
        []
    )


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Medicine name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickdelete(params.id)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => handleClickOpen(params.id)} aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    return (
        <div>

            <h1>Medicine</h1>

            <div>
                <Dialog open={deleteopen} onClose={handleClose}>
                    <DialogTitle>Are you sure Delete ?</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={handleDelete}>Yes</Button>
                    </DialogActions>
                </Dialog>
            </div>

            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Medicine
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Medicine Data</DialogTitle>
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

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={showData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </div>
    );
}

export default Medicine;