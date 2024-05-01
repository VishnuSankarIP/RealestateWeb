
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { FloatingLabel, Form, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import uploadImage from '../src/assets/upload.png';
import { addPropertyAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProperties() {
  const fileInputRef = useRef(null);
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    address: "",
    room: "",
    parking: "",
    bathroom: "",
    price: "",
    propertyImage: []
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (propertyDetails.propertyImage.length > 0) {
      const image = propertyDetails.propertyImage[0, 1]; // Assuming only one image is selected for preview
      if (image.type === "image/png" || image.type === "image/jpg" || image.type === "image/jpeg") {
        setPreview(URL.createObjectURL(image));
      } else {
        setPreview(uploadImage);
        setPropertyDetails({ ...propertyDetails, propertyImage: [] });
      }
    }
  }, [propertyDetails.propertyImage]);

  const handleAdd = async () => {
    const { title, description, address, room, parking, bathroom, price, propertyImage } = propertyDetails;
    if (!title || !description || !address || !room || !parking || !bathroom || !price || propertyImage.length === 0) {
      toast.warning("Please fill out all fields and select at least one image.");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("description", description);
      reqBody.append("address", address);
      reqBody.append("room", room);
      reqBody.append("parking", parking);
      reqBody.append("bathroom", bathroom);
      reqBody.append("price", price);
      for (let i = 0; i < propertyImage.length; i++) {
        reqBody.append("propertyImage", propertyImage[i]);
      }
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        };
        try {
          const result = await addPropertyAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status === 200) {
            toast.success(`${result.data.title} has been added successfully.`);
            setPropertyDetails({
              title: "",
              description: "",
              address: "",
              room: "",
              parking: "",
              bathroom: "",
              price: "",
              propertyImage: ""
            });

            if (fileInputRef.current) {
              fileInputRef.current.value = ""; // Reset the value to empty string
            }

          } else {
            alert(result.response.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <>
      <Header insideDashboard={true} />
      <div className="hed">
        <h1 className='text-center mt-3'>Create a Listing</h1>
      </div>
      <div className="mainDiv" style={{ height: '80vh' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="w-75 mt-5 ms-5">
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Title"
                  value={propertyDetails.title}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, title: e.target.value })}
                />
                <label htmlFor="floatingInputCustom">Title</label>
              </Form.Floating>
              <FloatingLabel controlId="floatingTextarea2" label="Description" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  style={{ height: '100px' }}
                  value={propertyDetails.description}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, description: e.target.value })}
                />
              </FloatingLabel>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordAddress"
                  type="text"
                  placeholder="Address"
                  value={propertyDetails.address}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, address: e.target.value })}
                />
                <label htmlFor="floatingPasswordAddress">Location</label>
              </Form.Floating>
              <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingPasswordRooms"
                      type="text"
                      placeholder="Rooms"
                      value={propertyDetails.room}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, room: e.target.value })}
                    />
                    <label htmlFor="floatingPasswordRooms">Rooms</label>
                  </Form.Floating>
                </div>
                <div className="p-2">
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingPasswordParking"
                      type="text"
                      placeholder="Parking"
                      value={propertyDetails.parking}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, parking: e.target.value })}
                    />
                    <label htmlFor="floatingPasswordParking">Parking</label>
                  </Form.Floating>
                </div>
                <div className="p-2">
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingPasswordBath"
                      type="text"
                      placeholder="Bathroom"
                      value={propertyDetails.bathroom}
                      onChange={(e) => setPropertyDetails({ ...propertyDetails, bathroom: e.target.value })}
                    />
                    <label htmlFor="floatingPasswordBath">Bathroom</label>
                  </Form.Floating>
                </div>
              </Stack>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingPasswordPrice"
                  type="text"
                  placeholder="Price"
                  value={propertyDetails.price}
                  onChange={(e) => setPropertyDetails({ ...propertyDetails, price: e.target.value })}
                />
                <label htmlFor="floatingPasswordPrice">Price</label>
              </Form.Floating>
            </div>
          </div>
          <div className="col-lg-4">
            <label className='text-center d-flex justify-content-center'>
              <input
               ref={fileInputRef}
                multiple
                type='file'
                // style={{ display: 'none' }}
                onChange={(e) => setPropertyDetails({ ...propertyDetails, propertyImage: e.target.files })}
              />
              <div className="div">
                {/* <img src={preview} width={'400px'} className='img-fluid' alt="Upload Icon" /> */}
                {/* <img src={preview} width={'400px'} className='img-fluid' alt="Upload Icon" /> */}
              </div>

            </label>
          </div>
        </div>
        <div className="btnDiv d-flex justify-content-center me-5">
          <button onClick={handleAdd} className='w-75 mt-3' style={{ color: 'white', backgroundColor: '#2b2b2b', height: '50px', borderRadius: '10px' }}>Add</button>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
}

export default AddProperties;
