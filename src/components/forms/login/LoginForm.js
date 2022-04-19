import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginForm.scss';
import Button from '../../common/button/Button';
import InputField from '../../common/input/Input';
import Select from '../../common/select/Select';

/* controllers */
import { getUserData } from '../../../providers/UserProvider';
//import { eventHandler } from '../utils';

/* Context */
import { UserContext } from '../../../providers/UserContext';

const LoginForm = () => {
  const history = useNavigate();
  /* get UserContext value */
  const { setUser } = useContext(UserContext);

  /* state inputs */
  const [documentType, setDocumentType] = useState('DNI');
  const [documentNumber, setDocumentNumber] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [carPlate, setCarPlate] = useState('');
  const [agreedToConditions, setAgreedToConditions] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserData()
      .then((resp) => {
        const userData = {
          ...resp,
          documentNumber,
          mobilePhone,
          carPlate,
        };
        setUser(userData);
        history('/cotizar/datos');
      });
  };

  return (
    <div className="container--full-height d-flex align-items-center">
      <form
        className="form login__form--width container-fluid needs-validation"
        onSubmit={handleSubmit}
      >
        <h2 className="form__title--color mb-4">Déjanos tus datos</h2>
        <div className="input-group mb-3">
          <Select
            id="document-type"
            label="Tipo de documento"
            value={documentType}
            onChange={(event) => setDocumentType(event.target.value)}
            required
            floating={false}
          >
            <option value="DNI">DNI</option>
            <option value="CE">CE</option>
          </Select>
          <InputField
            label="Nro. de doc"
            type="text"
            className="form-control"
            id="document-number"
            placeholder="Nro. de doc"
            onChange={(event) => setDocumentNumber(event.target.value)}
            value={documentNumber}
            maxLength={8}
            pattern="[0-9]{8}"
            required
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Celular"
            type="text"
            className="form-control"
            id="mobile-phone"
            placeholder="Celular"
            value={mobilePhone}
            onChange={(event) => setMobilePhone(event.target.value)}
            maxLength={9}
            pattern="[0-9]{9}"
            required
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Placa"
            type="text"
            className="form-control"
            id="car-plate"
            placeholder="Placa: ABC-123"
            value={carPlate.toUpperCase()}
            onChange={(event) => setCarPlate(event.target.value)}
            maxLength={7}
            pattern="[a-zA-Z0-9]{3}-[0-9]{3}"
            required
          />
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkbox-conditions"
            onChange={(event) => setAgreedToConditions(event.target.checked)}
            checked={agreedToConditions}
            required
          />
          <label className="form-check-label form-check-label--color" htmlFor="checkbox-conditions">
            Acepto la <a href="/">Política de Protección de Datos Personales</a> y los <a href="/">Términos y Condiciones</a>.
          </label>
        </div>
        <div>
          <Button
            type="submit"
            color="primary"
            classes="w-100"
          >
            <>COTÍZALO</>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
