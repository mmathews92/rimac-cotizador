import { useContext, useState } from 'react';
import {
  Routes,
  Route,
  useMatch,
  useLocation,
} from 'react-router-dom';
/* styles */
import '../styles/ProcessView.scss';

/* components */
import SideBarSteps from '../components/pages/sidebarsteps/SideBarSteps';
import CarForm from '../components/forms/car/CarForm';
import StepsProgress from '../components/pages/stepsprogress/StepsProgress';
import { getCurrentYear } from '../providers/Utils';
import { UserContext } from '../providers/UserContext';
import MakeYourPlan from '../components/pages/makeyourplan/MakeYourPlan';

const ProcessView = () => {
  //const { url, path } = useMatch();
  const { pathname } = useLocation();

  const currentYear = getCurrentYear();  
  const [yearOfCar, setYearOfCar] = useState(currentYear);
  const [modelOfCar, setmodelOfCar] = useState('Wolkswagen');
  const { name, carPlate } = (useContext(UserContext).user || { name: '', plate: '' });
  const steps = [
    { id: 1, content: 'Datos del auto', pathname: `/cotizar/datos` },
    { id: 2, content: 'Arma tu plan', pathname: `/cotizar/plan` },
  ];
  const currentStep = steps.find((step) => step.pathname === pathname);
  const currentStepIndex = steps.findIndex((step) => step.pathname === pathname);

  return (
    <div className="container-fluid position-relative view--position">
      <div className="row">
        <StepsProgress steps={steps.length} currentStep={currentStepIndex + 1} />
        <div className="position-fixed col-lg-3 p-0">
          <SideBarSteps itemsNav={steps} currentItem={currentStep.id} />
        </div>
        <div className="col-lg-9 offset-lg-3 p-0 container-fluid">
          <main>
            <Routes>
              <Route path={`datos`} element={
                <CarForm {
                  ... {
                    yearOfCar,
                    setYearOfCar,
                    modelOfCar,
                    setmodelOfCar,
                    clientName: name,
                  }
                }
                />
              }>
                
              </Route>
              <Route path={`plan`} element={
                <MakeYourPlan
                  yearOfCar={yearOfCar}
                  modelOfCar={modelOfCar}
                  plateOfCar={carPlate}
                />
              }>                
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProcessView;
