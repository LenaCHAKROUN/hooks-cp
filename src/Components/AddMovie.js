import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // init state
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [poster, setPoster] = useState("")

    //update state
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleRate = (e) => {
        setRate(e.target.value)
    }
    const handlePoster = (e) => {
        setPoster(e.target.value)
    }

    const handleMovie = (e) => {
        let newMovie={title,description,rate,poster}
        add(newMovie);
    }

    return (
        <div><Button variant="primary" onClick={handleShow}>
        Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the Movie Name" value={title} onChange={(e) =>handleTitle(e)} />
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the Movie Description" value={description} onChange={(e) =>handleDescription(e)} />
        <Form.Label>Movie Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter the Movie Rate" value={rate} onChange={(e) =>handleRate(e)}/>
        <Form.Label>Movie Poster</Form.Label>
        <Form.Control type="url" placeholder="Enter the Movie Poster URL" value={poster} onChange={(e) =>handlePoster(e)} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={() =>handleMovie()}>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal></div>
    )
}

export default AddMovie