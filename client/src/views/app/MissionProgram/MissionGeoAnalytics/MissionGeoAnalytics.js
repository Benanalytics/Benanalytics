import { getBulletComparativeWarningMeasureTheme } from '@patternfly/react-charts';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Badge, Button, Card, CardBody, CardTitle, Input } from 'reactstrap';
import FoodTable from '../../ActivityDashboard/FoodTable';
import GeoMissionActivityChart from './GeoMissionActivityChart';
import * as XLSX from 'xlsx';
import axios from 'axios';
import Markers1 from './Map/components/Markers1';
import NagativeStackChart from './NagativeStackChart';
import SpiderChart from './SpiderChart';
import HighFiveChart from './HighFiveChart';
import SectoralChart from './SectoralChart';

const MissionGeoAnalytics = () => {
  const [map, setMap] = useState(null);
  const [tableData, setTableData] = useState('ALL');
  const [selectedState, setSelectedState] = useState('All');

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showMap, setShowMap] = useState(true);
  useEffect(() => {
    // get  data
    axios
      .get('http://localhost:5000/api/project/getprojectdata')
      .then((res) => {
        console.log(res.data);
        setShowMap(true);
        setProjects(res.data);
      });
  }, []);

  // process CSV data
  const processData = (dataString) => {
    console.log('process data');
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: c,
    }));

    setData(list);
    setColumns(columns);
    list.map((el) => {
      console.log('ovj', el);
    });
    axios.post('http://localhost:5000/api/project/uploadxl', { data: list });
  };
  // handle file upload
  const handleFileUpload = (e) => {
    // return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };
  const uploadXLData = (e) => {
    e.preventDefault();
    axios
      .post('/api/client/uploadcsv', { csvData: data })
      .then((res) => {
        setUploaded(true);
      })
      .catch((err) => {});
  };

  const randomnumbergenerator = (from, to) => {
    return Math.floor(Math.random() * (to - from)) + 1;
  };

  const allState = [
    {
      stateName: 'Abia',
      width: '96',
      coord: [6.337855814818158, 7.406523301904865],
    },
    {
      stateName: 'Adamawa',
      coord: [9.36446111648574, 12.401259807781818],
      width: '93',
    },
    {
      stateName: 'Akwa',
      width: '91',
      coord: [6.224093009948766, 7.08055987386036],
    },
    {
      stateName: 'Anambra',
      coord: [10.418837, 42.758777],
      width: '89',
    },
    {
      stateName: 'Bauchi',
      coord: [10.418837, 42.758777],
      width: '86',
    },
    {
      stateName: 'Bayelsa',
      coord: [10.418837, 42.758777],
      width: '83',
    },
    {
      stateName: 'Benue',
      coord: [10.418837, 42.758777],
      width: '82',
    },
    {
      stateName: 'Borno',
      coord: [10.418837, 42.758777],
      width: '77',
    },
    {
      stateName: 'CrossRiver',
      coord: [10.418837, 42.758777],
      width: '73',
    },
    {
      stateName: 'Delta',
      coord: [10.418837, 42.758777],
      width: '72',
    },
    {
      stateName: 'Ebonyi',
      coord: [10.418837, 42.758777],
      width: '70',
    },
    {
      stateName: 'Edo',
      coord: [10.418837, 42.758777],
      width: '63',
    },
    {
      stateName: 'Ekiti',
      coord: [10.418837, 42.758777],
      width: '60',
    },
    {
      stateName: 'Enugu',
      coord: [10.418837, 42.758777],
      width: '59',
    },
    {
      stateName: 'Gombe',
      coord: [10.418837, 42.758777],
      width: '59',
    },
    {
      stateName: 'Imo',
      coord: [10.418837, 42.758777],
      width: '57',
    },
    {
      stateName: 'Jigawa',
      coord: [10.418837, 42.758777],
      width: '54',
    },
    {
      stateName: 'Kaduna',
      coord: [10.418837, 42.758777],
      width: '52',
    },
    {
      stateName: 'Kano',
      coord: [10.418837, 42.758777],
      width: '52',
    },
    {
      stateName: 'Katsina',
      coord: [10.418837, 42.758777],
      width: '51',
    },
    {
      stateName: 'Kebbi',
      coord: [10.418837, 42.758777],
      width: '50',
    },
    {
      stateName: 'Kogi',
      coord: [10.418837, 42.758777],
      width: '50',
    },
    {
      stateName: 'Kwara',
      coord: [10.418837, 42.758777],
      width: '46',
    },
    {
      stateName: 'Lagos',
      coord: [10.418837, 42.758777],
      width: '43',
    },
    {
      stateName: 'Nasarawa',
      coord: [10.418837, 42.758777],
      width: '43',
    },
    {
      stateName: 'Niger',
      coord: [10.418837, 42.758777],
      width: '41',
    },
    {
      stateName: 'Ogun',
      coord: [10.418837, 42.758777],
      width: '40',
    },
    {
      stateName: 'Ondo',
      coord: [10.418837, 42.758777],
      width: '39',
    },
    {
      stateName: 'Osun',
      coord: [10.418837, 42.758777],
      width: '37',
    },
    {
      stateName: 'Oyo',
      coord: [10.418837, 42.758777],
      width: '37',
    },
    {
      stateName: 'Plateau',
      coord: [10.418837, 42.758777],
      width: '36',
    },
    {
      stateName: 'Rivers',
      coord: [10.418837, 42.758777],
      width: '34',
    },
    {
      stateName: 'Sokoto',
      coord: [10.418837, 42.758777],
      width: '33',
    },
    {
      stateName: 'Taraba',
      coord: [10.418837, 42.758777],
      width: '23',
    },
    {
      stateName: 'Yobe',
      coord: [10.418837, 42.758777],
      width: '21',
    },
    {
      stateName: 'Zamfara',
      coord: [10.418837, 42.758777],
      width: '16',
    },
    {
      stateName: 'FCT',
      coord: [10.418837, 42.758777],
      width: '3',
    },
  ];
  const setter = (el) => {
    setSelectedState(el.stateName);
    if (map) {
      map.setView(el.coord, 10);
    }
  };
  return (
    <div>
      <div>
        <div className="col-sm-12  complexregoin ">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                onClick={(e) => setTableData('ALL')}
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                ALL
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                onClick={(e) => setTableData('PORTFOLIO')}
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                PORTFOLIO
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                onClick={(e) => setTableData('LENDING')}
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                LENDING
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                onClick={(e) => setTableData('MISSION')}
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                MISSION
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mb-4">
        <Card>
          <CardBody>
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-12  mb-5 mb-md-80">
                <div className="geo-info-block">
                  <div className="side-devider d-lg-block d-xs-none"></div>
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 ">
                      <div className="geo-info-icon-box">
                        <span className=" glyph-icon simple-icon-compass"></span>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9  col-xs-9 ">
                      <div className="geo-info-side">
                        <h1 className="text-info">
                          {randomnumbergenerator(2, 500)}
                        </h1>
                        <h5>Portfolio</h5>
                        <div style={{ width: '30%' }}>
                          <hr />
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <h5>Active</h5>
                          </div>
                          <div className="col-md-3 text-right">
                            <Badge color="primary" className="mt-2">
                              {' '}
                              Active{' '}
                            </Badge>
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12  mb-5 mb-md-80">
                <div className="geo-info-block">
                  <div className="side-devider d-lg-block d-xs-none d-md-none"></div>
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 ">
                      <div className="geo-info-icon-box">
                        <span className=" glyph-icon simple-icon-exclamation"></span>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9  col-xs-9 ">
                      <div className="geo-info-side">
                        <h1 className="text-info">
                          {randomnumbergenerator(2, 500)}
                        </h1>
                        <h5>Portfolio</h5>
                        <div style={{ width: '30%' }}>
                          <hr />
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <h5>Active</h5>
                          </div>
                          <div className="col-md-3 text-right">
                            <Badge color="success" className="mt-2">
                              {' '}
                              Enabled{' '}
                            </Badge>
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12  mb-5 ">
                <div className="geo-info-block">
                  <div className="side-devider d-lg-block d-xs-none"></div>
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 ">
                      <div className="geo-info-icon-box">
                        <span className=" glyph-icon simple-icon-check"></span>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9  col-xs-9 ">
                      <div className="geo-info-side">
                        <h1 className="text-info">
                          {randomnumbergenerator(2, 500)}
                        </h1>
                        <h5>Portfolio</h5>
                        <div style={{ width: '30%' }}>
                          <hr />
                        </div>
                        <div className="row">
                          <div className="col-md-8">
                            <h5>Active</h5>
                          </div>
                          <div className="col-md-3 text-right">
                            <Badge color="danger" className="mt-2">
                              {' '}
                              Invisible{' '}
                            </Badge>
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12  mb-5  ">
                <div className="geo-info-block">
                  <GeoMissionActivityChart />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="row">
        <div className="col-md-6 mb-5">
          <Card className="h-100">
            <CardBody>
              <div className="ovaral-portfolio-details">
                <div className="row"></div>
                <div className="top-content-details">
                  <div className="single-details mb-3 row">
                    <div className=" col-xs-2 col-sm-2 col-md-2 ">
                      <div className=" left-icon-holder ">
                        <span className="glyph-icon simple-icon-layers"></span>
                      </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 text-left ">
                      <h2>Ovarall Portfolio : US $5 Billion</h2>
                    </div>
                  </div>
                  <div className="single-details mb-3 row">
                    <div className=" col-xs-2 col-sm-2 col-md-2 ">
                      <div className=" left-icon-holder ">
                        <span className="glyph-icon simple-icon-layers"></span>
                      </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 text-left ">
                      <h2>Ovarall Portfolio : US $5 Billion</h2>
                    </div>
                  </div>
                </div>
                <div className="middle-content mb-3">
                  <div className="row mb-1 ">
                    <div className="col-md-8">
                      <div className="tech-suport mb-3">
                        <div className="suport-item">
                          <h2>Sector Investment </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="suport-item">
                        <h2> USD 99 Million</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-1 ">
                    <div className="col-md-8">
                      <div className="tech-suport mb-3">
                        <div className="suport-item">
                          <h2>Sector Investment </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="suport-item">
                        <h2> USD 99 Million</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-1 ">
                    <div className="col-md-8">
                      <div className="tech-suport mb-3">
                        <div className="suport-item">
                          <h2>Sector Investment </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="suport-item">
                        <h2> USD 99 Million</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-details">
                  <div className="single-details mb-3 row">
                    <div className=" col-xs-2 col-sm-2 col-md-2 ">
                      <div className=" left-icon-holder ">
                        <span className="glyph-icon simple-icon-layers"></span>
                      </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 text-left ">
                      <h2>US$ 3 Billion disbursed in 2010-2018</h2>
                    </div>
                  </div>

                  <div className="single-details mb-3 row">
                    <div className=" col-xs-2 col-sm-2 col-md-2 ">
                      <div className=" left-icon-holder ">
                        <span className="glyph-icon simple-icon-layers"></span>
                      </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 text-left ">
                      <h2>US$ 2 Billion Disbursed (Private Investment) </h2>
                    </div>
                  </div>

                  <div className="single-details mb-3 row">
                    <div className=" col-xs-2 col-sm-2 col-md-2 ">
                      <div className=" left-icon-holder ">
                        <span className="glyph-icon simple-icon-layers"></span>
                      </div>
                    </div>
                    <div className="col-xs-10 col-sm-10 text-left ">
                      <h2>US$ 1 Billion Disbursed (Public Investment)</h2>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>Ovarall Portfolio Age</h3>
              </div>
              <div className="map-side" style={{ position: 'relative' }}>
                <div className="leaflet-container">
                  <MapContainer
                    scrollWheelZoom={false}
                    whenCreated={setMap}
                    center={{ lat: 9.083333, lng: 7.533333 }}
                    zoom={5}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Markers1 />
                  </MapContainer>
                </div>
              </div>
              <div className="map-status-bar ">
                <div className="map-status-bar-container row">
                  <div className="status-item col-md-1"></div>
                  <div className="status-item col-md-2 text-center">
                    <div className="status-icon">
                      <div
                        className="icon-container"
                        style={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                          display: 'inline-block',
                          color: '#1F9DDB',
                          border: '2px solid #1F9DDB',
                          borderRadius: '100px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <span
                          className="glyph-icon  simple-icon-organization "
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '26px',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="status-text">
                      <h5 style={{ color: '#1F9DDB' }}>This is text</h5>
                    </div>
                  </div>
                  <div className="status-item col-md-2 text-center">
                    <div className="status-icon">
                      <div
                        className="icon-container"
                        style={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                          display: 'inline-block',
                          color: '#6EAA27',
                          border: '2px solid #6EAA27',
                          borderRadius: '100px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <span
                          className="glyph-icon simple-icon-directions"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '26px',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="status-text">
                      <h5 style={{ color: '#6EAA27' }}>This is text</h5>
                    </div>
                  </div>
                  <div className="status-item col-md-2 text-center">
                    <div className="status-icon">
                      <div
                        className="icon-container"
                        style={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                          display: 'inline-block',
                          color: '#B9AC15',
                          border: '2px solid #B9AC15',
                          borderRadius: '100px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <span
                          className="glyph-icon simple-icon-directions"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '26px',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="status-text">
                      <h5 style={{ color: '#B9AC15' }}>This is text</h5>
                    </div>
                  </div>
                  <div className="status-item col-md-2 text-center">
                    <div className="status-icon">
                      <div
                        className="icon-container"
                        style={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                          display: 'inline-block',
                          color: '#FB8310',
                          border: '2px solid #FB8310',
                          borderRadius: '100px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <span
                          className="glyph-icon simple-icon-crop"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '26px',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="status-text">
                      <h5 style={{ color: '#FB8310' }}>This is text</h5>
                    </div>
                  </div>
                  <div className="status-item col-md-2 text-center">
                    <div className="status-icon">
                      <div
                        className="icon-container"
                        style={{
                          position: 'relative',
                          width: '50px',
                          height: '50px',
                          display: 'inline-block',
                          color: '#B71823',
                          border: '2px solid #B71823',
                          borderRadius: '100px',
                          backgroundColor: 'transparent',
                        }}
                      >
                        <span
                          className="glyph-icon  simple-icon-present"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '26px',
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="status-text">
                      <h5 style={{ color: '#B71823' }}>This is text</h5>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <FoodTable />
        </div>
      </div>
      <div className="row mt-5">
        <div className=" col-sm-12 col-md-12 col-xl-6">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>
                  Age distribution of Portfolio by sovereign and non-sovereign
                  Portfolio
                </h3>
              </div>
              <NagativeStackChart />
            </CardBody>
          </Card>
        </div>
        <div className=" col-sm-12 col-md-12 col-xl-6">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>
                  Portfolio Distribution across the six GeoPolitical Zones
                </h3>
              </div>
              <SpiderChart />
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row mt-5">
        <div className=" col-sm-12 col-md-12 col-xl-6">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>
                  Age distribution of Portfolio by sovereign and non-sovereign
                  Portfolio
                </h3>
              </div>
              <SectoralChart />
            </CardBody>
          </Card>
        </div>
        <div className=" col-sm-12 col-md-12 col-xl-6">
          <Card className="h-100">
            <CardBody>
              <div className="alert alert-success text-center alert-custom">
                <h3>
                  Portfolio Distribution across the six GeoPolitical Zones
                </h3>
              </div>
              <HighFiveChart />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MissionGeoAnalytics;
