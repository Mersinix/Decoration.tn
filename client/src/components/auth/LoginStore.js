import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';
import { getMyProducts } from '../../js/actions/productActions';

import { loginStores } from '../../js/actions/storeActions';

const LoginStore = () => {
  const [modal, setModal] = useState(false);
  const [store_Name, setStore_Name] = useState('');
  const [storePassword, setStorePassword] = useState('');
  const [message, setMessage] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginStores({ store_Name, storePassword }));
    dispatch(getMyProducts({store_Name}));
    history.push('/MyStore');
    setStore_Name('');
    setStorePassword('');
  };

  return (
    <div style={{ padding: '0 15px' }}>
      <NavLink onClick={toggle} href="#">
        Login Store
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login Store</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="StoreName">Store Name</Label>
              <Input
                type="text"
                value={store_Name}
                name="store_Name"
                id="store_Name"
                placeholder="Store Name"
                className="mb-3"
                onChange={(e) => setStore_Name(e.target.value)}
              />
              <Label for="password">StorePassword</Label>
              <Input
                type="password"
                value={storePassword}
                name="password"
                id="password"
                placeholder="StorePassword"
                className="mb-3"
                onChange={(e) => setStorePassword(e.target.value)}
              />
              <Button
                color="yellow"
                style={{ marginTop: '2rem' }}
                block
                onClick={handleLogin}
              >
                Start 
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginStore;
